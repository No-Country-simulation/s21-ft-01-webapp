import { Model, DataTypes, Sequelize } from "sequelize";

class OperationType extends Model {
    public operation_type_id!: number;
    public name!: string;

    static initModel(sequelize: Sequelize) {
        OperationType.init(
            {
                operation_type_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "operation_type",
            }
        );
    }
}

export default OperationType;
