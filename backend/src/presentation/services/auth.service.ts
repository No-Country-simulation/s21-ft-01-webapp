import { bcryptAdapter } from "../../config/bcrypt.adapter";
import jwt from "jsonwebtoken";
import { JwtAdapter } from "../../config/jwt.adapter";
import { UserService } from "./user.service";
import { AccountService } from "./account.service";
import { generateCode } from "../../config/securityCode";
import { OTP } from "../../data/models/OTP.model";
import { validateOTP } from "../../config/validateOTP";
import { sendOTPtoEmail } from "./extern/mailSender.service";
import User from "../../data/models/user.model";

const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

interface UserRegister {
    name: string;
    last_name: string;
    email: string;
    dni: string;
    password: string;
    address: string;
    phone: string;
    birth_date: string;
    city_id: number;
}
interface UserLogin {
    user_id:number;
    name: string;
    last_name: string;
    email: string;
    dni: string;
    address: string;
    phone: string;
    birth_date: string;
    city_id: number;
    account_id:number;
    account_number:string;
    balance:number
}

export class AuthService {
    constructor(private userService: UserService, private accountService: AccountService) { }

    public async register(user: UserRegister) {
        if (!user.name) throw new Error(`name missing`);
        if (!user.last_name) throw new Error(`last_name missing`);
        if (!user.email) throw new Error(`email missing`);
        if (!user.dni) throw new Error(`dni missing`);
        if (!user.password) throw new Error(`password missing`);
        if (!user.address) throw new Error(`address missing`);
        if (!user.phone) throw new Error(`phone missing`);
        if (!user.birth_date) throw new Error(`birth_date missing`);
        if (user.city_id === undefined || user.city_id === null) throw new Error(`city_id missing`);

        try {
            const newUser = await this.userService.create(user);

            const token = await JwtAdapter.generateToken({
                user_id: newUser.user_id,
                name: newUser.name,
                last_name: newUser.last_name
            });


            if (!token) throw new Error('Error while creating JWT');
            await this.accountService.registerAccount(newUser.user_id)
            await this.generateAndSendOTP(newUser.email, newUser.name);
            return { newUser, token };
        } catch (error) {
            throw new Error(`Internal server error: ${error instanceof Error ? error.message : error}`);
        }
    }

    public async loginUser(email: string, password: string) {
        const user = await this.userService.getByEmail(email);
        if (!user) throw new Error("User not found");
        const account =await this.accountService.getAccountByUserID(user.user_id);
        if (!account) throw new Error("Account not found");
        const userLogin = this.filterUserData(user, account);
        const isMatch = await bcryptAdapter.compare(password, user.password);
        if (!isMatch) return null;

        const token = jwt.sign({ userLogin }, SECRET_KEY, { expiresIn: "1h" });
        return {token, userLogin};
    }

    public verifyToken(token: string) {
        try {
            return jwt.verify(token, SECRET_KEY);
        } catch (err) {
            return null;
        }
    }
    public filterUserData = (user: any, account: any): UserLogin => {
        const {user_id, name, last_name, email, dni, address, phone, birth_date, city_id } = user.dataValues;
        const {account_id, account_number, balance} = account.dataValues;
        return {user_id, name, last_name, email, dni, address, phone, birth_date, city_id, account_id, account_number, balance };
    };

    public async verifyRegister(token: string, user: any) {
        // Validar token
        const isValidToken = await validateOTP(token, user.email);
        if (isValidToken === "notFound") {
            throw new Error("Token inválido");
        }
        if (isValidToken === "expired") {
            throw new Error("Token expirado");
        }

        const userUpdate = await User.findOne({ where: { email: user.email } });
        if (!userUpdate) {
            throw new Error("Usuario no encontrado");
        }
    
        // Actualizar estado del usuario
        await userUpdate.update({ status: true });

        // Eliminar token si es válido o expirado
        if (isValidToken || isValidToken === "expired") {
            await OTP.destroy({
                where: {
                    token,
                    userEmail: user.email,
                },
            });
        }

        return {
            message: "Usuario confirmado exitosamente"
        };
    }

    public async generateAndSendOTP(userEmail: string, name: string): Promise<void> {
        const tokenOTP = generateCode();
    
        // Crear el código OTP en la base de datos
        await OTP.create({
            token: tokenOTP,
            userEmail: userEmail,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000), // Expira en 10 minutos
        });
    
        // Enviar el OTP por correo electrónico
        await sendOTPtoEmail({
            name: name,
            email: userEmail,
            token: tokenOTP
        });
    }

}
