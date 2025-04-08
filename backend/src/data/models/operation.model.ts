import { Model, DataTypes, Sequelize } from "sequelize";

class Operation extends Model {
    public operation_id!: number;
    public date!: string;
    public ammount!: number;
    public transaction_type_id!: number;
    public user_id!: number;

    static initModel(sequelize: Sequelize) {
        Operation.init(
            {
                operation_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: new Date()
                },
                ammount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                operation_type_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "operation",
            }
        );
    }
}

export default Operation;
