import { Op, QueryTypes, Sequelize } from 'sequelize';
import Account from '../../data/models/account.model';
import Transaction from '../../data/models/transaction.model';
import { AccountService } from './account.service';


interface TransactionInfo {
    operation_id: number;
    date: string;
    ammount: number;
    is_income: boolean;
    sender_account_id: number;
    reciever_account_id: number;
    senderBalanceBefore: number;
    recieverBalanceBefore: number;
}

interface CreateTransaction {
    operation_id: number,
    date: string,
    ammount: number,
    is_income: boolean,
    balance_before: number,
    balance_after: number,
    account_id: number,
}


export class TransactionService {

    constructor(private accountService: AccountService, private sequelize: Sequelize) { }

    public async create(transaction: any) {

        try {

            if (!transaction) {
                throw new Error(`SIn transacción`);
            }
            const newTransaction = await Transaction.create(transaction)
            await this.accountService.setAccountBalance(newTransaction.account_id, newTransaction.balance_after)
            return

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async transfer(transactionInfo: TransactionInfo) {

        try {
            const sender: CreateTransaction = {
                operation_id: transactionInfo.operation_id,
                date: transactionInfo.date,
                ammount: transactionInfo.ammount,
                is_income: transactionInfo.is_income,
                balance_before: transactionInfo.senderBalanceBefore,
                balance_after: transactionInfo.senderBalanceBefore - transactionInfo.ammount,
                account_id: transactionInfo.sender_account_id
            }

            const reciever: CreateTransaction = {
                operation_id: transactionInfo.operation_id,
                date: transactionInfo.date,
                ammount: transactionInfo.ammount,
                is_income: !transactionInfo.is_income,
                balance_before: transactionInfo.recieverBalanceBefore,
                balance_after: transactionInfo.recieverBalanceBefore + transactionInfo.ammount,
                account_id: transactionInfo.reciever_account_id
            }


            await this.create(sender);
            await this.create(reciever);
            return

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const transactions = await Transaction.findAll();

            if (transactions.length <= 0) throw new Error('No transactions found')

            return transactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const transaction = await Transaction.findByPk(id);

            if (!transaction) throw new Error('Transaction not found')

            return transaction;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByAccountID(account_id: number) {
        try {

            const transactions = await Transaction.findAll({ where: { account_id } })

            if (!transactions) throw new Error('Account has not transactions')

            return transactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    //TODO: Falta agrupar por fecha
    public async getByUserID(user_id: number, month: string) {
        try {
            // Construcción del rango de fechas
            const startDate = `${month}-01T00:00:00.000Z`; // Primer día del mes
            const endDate = new Date(new Date(startDate).setMonth(new Date(startDate).getMonth() + 1)).toISOString(); // Primer día del siguiente mes


            const transactions = await Transaction.findAll({
                where: {
                    '$Account.user_id$': user_id,
                    date: { [Op.gte]: startDate, [Op.lt]: endDate } // ✅ Filtrar por mes usando un rango
                },
                include: [{
                    model: Account,
                    attributes: {
                        exclude: ['account_id',
                            'date',
                            'account_number',
                            'balance',
                            'account_type_id',
                            'user_id',
                            'createdAt',
                            'updatedAt']
                    }
                }],
                attributes: { exclude: ['balance_before', 'balance_after', 'account_id', 'operation_id', 'createdAt', 'updatedAt'] },
                order: [['date', 'DESC']]
            })

            if (!transactions || transactions.length === 0) throw new Error('User has not transactions')

            // Agrupar por fecha (YYYY-MM-DD)
            const groupedTransactions = transactions.reduce((acc: Record<string, any[]>, transaction) => {
                const dateKey = new Date(transaction.date).toISOString().split('T')[0]; // Extrae YYYY-MM-DD

                if (!acc[dateKey]) {
                    acc[dateKey] = [];
                }
                acc[dateKey].push(transaction);
                return acc;
            }, {});

            return groupedTransactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByOperationID(operation_id: string) {
        try {

            const transactions = await Transaction.findAll({ where: { operation_id } })

            if (!transactions) throw new Error('Operation has not transactions')

            return transactions;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async update(name: string, id: number) {

        try {
            const transaction = await Transaction.findByPk(id);

            if (!transaction) throw new Error('Transaction not found')

            // transaction.name = name;

            await transaction.save();

            return transaction

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const transaction = await Transaction.findByPk(id);

            if (!transaction) throw new Error('Transaction not found')

            await transaction.destroy();

            return transaction

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }
    public async getTransactionsSummary(accountId: Number) {
        // 1️⃣ Obtener las transacciones mensuales agrupadas por mes e ingresos/egresos
        const monthlyTransactions = await Transaction.findAll({
            attributes: [
                [Sequelize.fn("TO_CHAR", Sequelize.col("date"), "YYYY-MM"), "year_month"],
                "is_income",
                [Sequelize.fn("SUM", Sequelize.col("ammount")), "total_amount"]
            ],
            where: { account_id: accountId },
            group: ["year_month", "is_income"],
            order: [[Sequelize.fn("TO_CHAR", Sequelize.col("date"), "YYYY-MM"), "ASC"]],
            raw: true
        });
    
        // 2️⃣ Obtener los totales de ingresos y egresos
        const totalAmounts = await Transaction.findOne({
            attributes: [
                [Sequelize.fn("SUM", Sequelize.literal("CASE WHEN is_income = true THEN ammount ELSE 0 END")), "total_income"],
                [Sequelize.fn("SUM", Sequelize.literal("CASE WHEN is_income = false THEN ammount ELSE 0 END")), "total_expense"]
            ],
            where: { account_id: accountId },
            raw: true
        });
        const balance=  await this.accountService.getAccountBalance(Number(accountId));
    
        return {
            monthly: monthlyTransactions,
            totals: totalAmounts,
            balance
        };
    }
    



}