import { Request, Response } from "express";
import { OperationService } from "../services/operation.service";


export class OperationController {

    constructor(
        public readonly operationService: OperationService,
    ) { }

    create = (req: Request, res: Response) => {
        const {
            user_id,
            operation_type_id,
            ammount,
            sender_account_id,
            //reciever_account_id,
            reciever_account_number,
            is_income } = req.body

        const operation = {
            user_id,
            operation_type_id,
            ammount,
            sender_account_id,
            reciever_account_number,
            //reciever_account_id,
            is_income
        }

        this.operationService.create(operation)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.operationService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.operationService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByUserID = (req: Request, res: Response) => {
        const { user_id } = req.params

        const nUser_id = Number(user_id)

        this.operationService.getByUserID(nUser_id)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    //TODO: Implementar reversa
    reverse = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.operationService.reverse(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    // deleteByID = (req: Request, res: Response) => {
    //     const { id } = req.params

    //     const numberId = Number(id)

    //     this.operationService.deleteByID(numberId)
    //         .then((data) => res.json(data))
    //         .catch(error => res.status(400).json({ error: error.message }))
    // }

}