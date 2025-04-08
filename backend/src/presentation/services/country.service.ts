import Country from '../../data/models/country.model';


export class CountryService {

    constructor() { }

    public async create(name: string) {
        try {
            await this.getByName(name);
            const country = await Country.create({ name })
            return country

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getAll() {
        try {
            const countries = await Country.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });

            if (countries.length <= 0) throw new Error('No countries found')

            return countries;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)

        }
    }

    public async getByID(id: number) {

        try {
            const country = await Country.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt'] } });

            if (!country) throw new Error('Country not found')

            return country;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async getByName(name: string) {

        const country = await Country.findOne({ where: { name } })

        if (country) throw new Error('Country already exists')
        return
    }

    public async update(name: string, id: number) {

        try {
            const country = await Country.findByPk(id, { attributes: { exclude: ['createdAt'] } });

            if (!country) throw new Error('Country not found')
            if (country.name == name) throw new Error('Country name is not different')
            country.name = name;

            await country.save();

            return country

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }

    public async deleteByID(id: number) {
        try {
            const country = await Country.findByPk(id);

            if (!country) throw new Error('Country not found')

            await country.destroy();

            return country

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }

    }



}