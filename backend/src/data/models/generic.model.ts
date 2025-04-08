//sequelize model
import { Sequelize } from "sequelize";
import AccountType from "./accountType.model";
import Account from "./account.model";
import User from "./user.model";
import City from "./city.model";
import Country from "./country.model";
import { OTP } from "./OTP.model";
import Transaction from "./transaction.model";
import OperationType from "./operationType.model";
import Operation from "./operation.model";

export const initModels = (sequelize: Sequelize) => {
  AccountType.initModel(sequelize);
  Account.initModel(sequelize);
  Country.initModel(sequelize);
  City.initModel(sequelize);
  User.initModel(sequelize);
  OTP.initModel(sequelize);
  OperationType.initModel(sequelize)
  Operation.initModel(sequelize)
  Transaction.initModel(sequelize)

  // Definir relaciones
  Account.belongsTo(AccountType, { foreignKey: "account_type_id" });
  AccountType.hasMany(Account, { foreignKey: "account_type_id" });

  City.belongsTo(Country, { foreignKey: "country_id" });
  Country.hasMany(City, { foreignKey: "country_id" });

  User.belongsTo(City, { foreignKey: "city_id" });
  City.hasMany(User, { foreignKey: "city_id" });

  Operation.belongsTo(OperationType, { foreignKey: "operation_type_id" });
  OperationType.hasMany(Operation, { foreignKey: "operation_type_id" });

  Transaction.belongsTo(Operation, { foreignKey: "operation_id" });
  Operation.hasMany(Transaction, { foreignKey: "operation_id" });

  Transaction.belongsTo(Account, { foreignKey: "account_id" });
  Account.hasMany(Transaction, { foreignKey: "account_id" });


};
