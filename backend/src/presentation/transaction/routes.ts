import { Router } from "express";
import { TransactionService } from "../services/transaction.service";
import { TransactionController } from "./controller";
import { AccountService } from "../services/account.service";
import sequelize from "../../data/db";

export class TransactionRoutes {

    static get routes(): Router {

        const router = Router();
        const accountService = new AccountService();

        const service = new TransactionService(accountService, sequelize);

        const controller = new TransactionController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.get('/account/:id', controller.getByAccountID);
        router.post('/user/:id', controller.getByUserID);
        router.get("/transactions/:accountId", controller.getTransactionsSummary);

        return router;
    }



}