import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";


export class AuthController {

    constructor(
        public readonly authService: AuthService,
    ) { }

    register = (req: Request, res: Response) => {
        const {
            name,
            last_name,
            email,
            dni,
            password,
            address,
            phone,
            birth_date,
            city_id } = req.body

        const user = {
            name,
            last_name,
            email,
            dni,
            password,
            address,
            phone,
            birth_date,
            city_id
        }

        this.authService.register(user)
            .then((data) => {

                data.newUser

                res
                    .status(201)
                    .cookie(
                        'x-token',
                        data.token,
                        {
                            httpOnly: true,
                            sameSite: 'strict',
                            maxAge: 1000 * 60 * 60
                        }
                    )
                    .json()
            })
            .catch(error => res.status(400).json({ error: error.message }))
    }

    login = (req: Request, res: Response) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
            throw new Error("Falta email o contraseña")
        }
    
        this.authService.loginUser(email, password)
            .then((tokenAndUser) => {
                if (!tokenAndUser) {
                    throw new Error("Credenciales incorrectas");
                }
    
                const { token, userLogin } = tokenAndUser;
    
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 3600000, // 1 hora
                }).status(200).json({
                    message: "Autenticado",
                    user: {
                        id_user:userLogin.user_id,
                        email: userLogin.email,
                        name: userLogin.name,
                        last_name: userLogin.last_name,
                        phone:userLogin.phone,
                        account_id:userLogin.account_id,
                        account_number:userLogin.account_number,
                        balance:userLogin.balance
                    }
                });
            })
            .catch(err => {
                res.status(500).json({ message: "Error en el login", error: err.message });
            });
    };

    verifyRegisterController = (req: Request, res: Response) => {
        const { token, user } = req.body;
    
        if (!token || !user) {
            throw new Error("Faltan datos requeridos");
        }
    
        this.authService.verifyRegister(token, user)
            .then((userCreated) => {
                res.status(201).json(userCreated.message);
            })
            .catch((err) => {
                res.status(500).json({ message: "Error en la verificación del registro", error: err.message });
            });
    };


    sendingCode = (req: Request, res: Response) => {
        const {email, name} = req.body;
        this.authService.generateAndSendOTP(email, name)
        .then(() => {
            res.status(201).json("Codigo enviado");
        })
        .catch((err) => {
            res.status(500).json({ message: "Error al enviar el código", error: err.message });
        });

    }

}