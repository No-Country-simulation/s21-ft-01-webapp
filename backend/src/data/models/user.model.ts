import { Model, DataTypes, Sequelize } from "sequelize";

class User extends Model {
    public user_id!: number;
    public name!: string;
    public last_name!: string;
    public email!: string;
    public dni!: string;
    public dni_url!: string;
    public password!: string;
    public address!: string;
    public phone!: string;
    public birth_date!: string;
    public status!: boolean;
    public city_id!: number;

    static initModel(sequelize: Sequelize) {
        User.init(
            {
                user_id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                last_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    //unique: true,
                },
                dni: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    //unique: true,
                },
                dni_url: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: ''
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                address: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                phone: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                birth_date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                city_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                }
            },
            {
                sequelize,
                tableName: "user",
            }
        );
    }
}

export default User;
