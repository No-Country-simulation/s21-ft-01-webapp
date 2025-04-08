import OperationType from '../../data/models/operationType.model';


export class OperationTypeService {

    constructor() { }

    public async create(name: string) {
        try {
            await this.getByName(name);
            const operationType = await OperationType.create({ name })
            return operationType

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const operationTypes = await OperationType.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });

            if (operationTypes.length <= 0) throw new Error('No operation types found')

            return operationTypes;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const operationType = await OperationType.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt'] } });

            if (!operationType) throw new Error('Operation type not found')

            return operationType;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByName(name: string) {

        const operationType = await OperationType.findOne({ where: { name } })

        if (operationType) throw new Error('Operation type already exists')
        return
    }

    public async update(name: string, id: number) {

        try {
            const operationType = await OperationType.findByPk(id, { attributes: { exclude: ['createdAt'] } });

            if (!operationType) throw new Error('Operation type not found')

            operationType.name = name;

            await operationType.save();

            return operationType

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const operationType = await OperationType.findByPk(id);

            if (!operationType) throw new Error('Operation type not found')

            await operationType.destroy();

            return operationType

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }



}