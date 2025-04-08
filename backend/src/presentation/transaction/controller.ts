import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";


export class TransactionController {

    constructor(
        public readonly transactionService: TransactionService,
    ) { }

    create = (req: Request, res: Response) => {
        const { name } = req.body

        this.transactionService.create(name)
            .then((data) => res.status(201).json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getAll = (req: Request, res: Response) => {

        this.transactionService.getAll()
            .then((data) => res.json(data))
            .catch(error => { console.log(error); res.status(400).json({ error: error.message }) })
    }

    getByID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.transactionService.getByID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByAccountID = (req: Request, res: Response) => {
        const { id } = req.params

        const numberId = Number(id)

        this.transactionService.getByAccountID(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }

    getByUserID = (req: Request, res: Response) => {
        const { id } = req.params
        const { month } = req.body

        const numberId = Number(id)

        this.transactionService.getByUserID(numberId, month)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }))
    }
    getTransactionsSummary = (req: Request, res: Response) => {
        const { accountId } = req.params;
        const numberId = Number(accountId);

        if (isNaN(numberId)) {
            res.status(400).json({ error: "ID inválido" });
        }

        this.transactionService.getTransactionsSummary(numberId)
            .then((data) => res.json(data))
            .catch(error => res.status(400).json({ error: error.message }));
    };


    // update = (req: Request, res: Response) => {
    //     const { name } = req.body
    //     const { id } = req.params

    //     const numberId = Number(id)

    //     this.transactionService.update(name, numberId)
    //         .then((data) => res.json(data))
    //         .catch(error => res.status(400).json({ error: error.message }))
    // }

    // deleteByID = (req: Request, res: Response) => {
    //     const { id } = req.params

    //     const numberId = Number(id)

    //     this.transactionService.deleteByID(numberId)
    //         .then((data) => res.json(data))
    //         .catch(error => res.status(400).json({ error: error.message }))
    // }

}