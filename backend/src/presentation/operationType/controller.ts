import { Request, Response } from "express";
import { OperationTypeService } from "../services/operationType.service";


export class OperationTypeController {

    constructor(
        public readonly operationTypeService: OperationTypeService,
    ) { }

    create = (req: Request, res: Response) => {
        const { name } = req.body

        this.operationTypeService.create(name)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.operationTypeService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.operationTypeService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    update = (req: Request, res: Response) => {
        const { name } = req.body
        const { id } = req.params

        const numberId = Number(id)

        this.operationTypeService.update(name, numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    deleteByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.operationTypeService.deleteByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

}