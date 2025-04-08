import { Model, DataTypes, Sequelize } from "sequelize";
class Account extends Model {
  public account_id!: number;
  public date!: Date;
  public account_number!: string;
  public balance!: number;
  public account_type_id!: number;
  public user_id!: number;

  static initModel(sequelize: Sequelize) {
    Account.init(
      {
        account_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        account_number: {
          type: DataTypes.STRING,
          unique: true,
        },
        balance: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
        },
        account_type_id: {
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
        tableName: "account",
        hooks: {
          beforeCreate: async (account) => {
            account.account_number = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
          },
        },
      }
    );
  }
}
export default Account;
