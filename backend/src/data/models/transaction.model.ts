import { Model, DataTypes, Sequelize } from "sequelize";

class Transaction extends Model {
    public transaction_id!: number;
    public date!: string;
    public ammount!: number;
    public is_income!: boolean;
    public balance_before!: number;
    public balance_after!: number;
    public account_id!: number;
    public operation_id!: number;

    static initModel(sequelize: Sequelize) {
        Transaction.init(
            {
                transaction_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                ammount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                is_income: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                },
                balance_before: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                balance_after: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                account_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                operation_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "transaction",
            }
        );
    }
}

export default Transaction;
