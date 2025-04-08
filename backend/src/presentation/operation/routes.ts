import { Router } from "express";
import { OperationController } from "./controller";
import { OperationService } from "../services/operation.service";
import { TransactionService } from "../services/transaction.service";
import { AccountService } from "../services/account.service";
import sequelize from "../../data/db";

export class OperationRoutes {

    static get routes(): Router {

        const router = Router();

        const accountService = new AccountService();
        const transactionService = new TransactionService(accountService, sequelize);
        const service = new OperationService(transactionService, accountService);

        const controller = new OperationController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.get('/user/:user_id', controller.getByUserID);
        router.post('/', controller.create);
        router.post('/reverse', controller.reverse);
        // router.patch('/:id', controller.update);
        // router.delete('/:id', controller.deleteByID);

        return router;
    }



}