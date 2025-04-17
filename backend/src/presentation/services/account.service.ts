import { Transaction } from "sequelize";
import sequelize from "../../data/db";
import Account from "../../data/models/account.model";
import AccountType from "../../data/models/accountType.model";

export class AccountService {
  public async registerAccount(userId: number) {
    const transaction: Transaction = await sequelize.transaction();
    try {
      // Buscar el tipo de cuenta "corriente"
      const accountType = await AccountType.findOne({
        where: { name: "Corriente" },
      });

      if (!accountType) {
        throw new Error("Tipo de cuenta 'corriente' no encontrado");
      }

      // Crear la cuenta bancaria
      const account = await Account.create(
        {
          user_id: userId,
          account_type_id: accountType.account_type_id,
        },
        { transaction }
      );

      await transaction.commit();
      return account;
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al crear la cuenta: ${(error as Error).message}`);
    }
  }

  public async getAccountBalance(account_id: number) {

    try {
      const account = await Account.findByPk(account_id);

      if (!account) throw new Error('Account not found');

      return account.balance;

    } catch (error) {
      throw new Error(`Internal server error: ${error instanceof Error ? error.message : error}`); 
    }

  }

  public async setAccountBalance(account_id: number, balance: number) {

    try {
      const account = await Account.findByPk(account_id);

      if (!account) throw new Error('Account not found');

      account.balance = balance;

      await account.save();

      return account;

    } catch (error) {
      throw new Error(`Internal server error: ${error instanceof Error ? error.message : error}`); 
    }

  }
}


