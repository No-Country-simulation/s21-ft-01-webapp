import { Router } from "express";
import { OperationTypeController } from "./controller";
import { OperationTypeService } from "../services/operationType.service";

export class OperationTypeRoutes {

    static get routes(): Router {

        const router = Router();

        const service = new OperationTypeService();

        const controller = new OperationTypeController(service);

        router.get('/', controller.getAll);
        router.get('/:id', controller.getByID);
        router.post('/', controller.create);
        router.patch('/:id', controller.update);
        router.delete('/:id', controller.deleteByID);

        return router;
    }



}