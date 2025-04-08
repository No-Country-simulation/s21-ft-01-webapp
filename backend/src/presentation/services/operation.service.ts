import Operation from '../../data/models/operation.model';
import OperationType from '../../data/models/operationType.model';
import { TransactionService } from './transaction.service';
import { AccountService } from './account.service';
import sequelize from '../../data/db';


export class OperationService {

    constructor(private transactionService: TransactionService, private accountService: AccountService) { }

    public async create(operation: any) {

        

        try {
           

            switch (operation.operation_type_id) {

                case 1: {

                    const senderBalanceBefore = await this.accountService.getAccountBalance(operation.sender_account_id)
                    if (senderBalanceBefore < operation.ammount) throw new Error(`Balance is lower than operation ammount`);

                    operation.senderBalanceBefore = senderBalanceBefore
                    //operation.recieverBalanceBefore = await this.accountService.getAccountBalance(operation.reciever_account_id)
                    const {reciever_account_id, reciever_balance}= await this.accountService.getAccountForNumberAccount(operation.reciever_account_number)
                    operation.recieverBalanceBefore=reciever_balance;
                    operation.reciever_account_id=reciever_account_id;
            
                    const newOperation = await Operation.create(operation)
                    operation.operation_id = newOperation.operation_id;
                    operation.date = newOperation.date;
                    this.transactionService.transfer(operation);

                    return newOperation
                }

                default: {
                    throw new Error(`Missing operation_type_id`);
                }
            }


        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getAll() {
        try {
            const operations = await Operation.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'operation_type_id'] }, include: [{ model: OperationType, attributes: ['operation_type_id', 'name'] }] });

            if (operations.length <= 0) throw new Error('No operations found')

            return operations;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const operation = await Operation.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt', 'operation_type_id'] }, include: [{ model: OperationType, attributes: ['operation_type_id', 'name'] }] });

            if (!operation) throw new Error('Operation not found')

            return operation;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByUserID(user_id: number) {

        try {
            const operations = await Operation.findByPk(user_id, { attributes: { exclude: ['createdAt', 'updatedAt', 'operation_type_id'] }, include: [{ model: OperationType, attributes: ['operation_type_id', 'name'] }] });

            if (!operations) throw new Error('No operations found for this user id')

            return operations;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }


    // public async getByName(name: string) {

    //     const operation = await Operation.findOne({ where: { name } })

    //     if (operation) throw new Error('Operation already exists')
    //     return
    // }

    //TODO: Implementar reversa
    public async reverse(id: number) {

        try {
            const operation = await Operation.findByPk(id);

            if (!operation) throw new Error('Operation not found')

            // operation.name = name;

            // await operation.save();

            return operation

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const operation = await Operation.findByPk(id);

            if (!operation) throw new Error('Operation not found')

            await operation.destroy();

            return operation

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }



}