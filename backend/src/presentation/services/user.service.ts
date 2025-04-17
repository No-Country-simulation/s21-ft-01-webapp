import { bcryptAdapter } from "../../config/bcrypt.adapter";
import User from "../../data/models/user.model"


export class UserService {

    constructor() { }

    private generateAccountNumber(): string {  
        return 'ACC-' + Date.now();
    } 

    public async create(user: any) {
        try {

            await this.getByDni(user.dni);
            user.status = false;
            user.password = bcryptAdapter.hash(user.password);
            user.user_account_id = this.generateAccountNumber();
            
            const newUser = await User.create(user);
            return newUser;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }



    public async getAllUser() {
        try {
            const users = await User.findAll();
            if (!users) {
                throw new Error("users not found")
            }
            return users;

        } catch (error) {
            throw new Error(`Internal server error: ${error}`)
        }
    }




    public async getByID(id: any) {
    return {
        message: 'getByID ok',
        id
    }
}

    public async getByEmail(email: any) {
    const res = await User.findOne({ where: { email } })

    if (!res) throw new Error('Email no longer exists')
    return res
}

    public async getByDni(dni: string) {
    const res = await User.findOne({ where: { dni } })

    if (res) throw new Error('DNI already exists')
    return
}

    public async update(data: any) {
    return 'update ok'
}

    public async deleteByID(id: any) {
    return 'deleteByID ok'
}


}