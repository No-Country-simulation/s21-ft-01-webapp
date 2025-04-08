import { Router } from "express";
import { AuthController } from "./controller";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { AccountService } from "../services/account.service";

export class AuthRoutes {

    static get routes(): Router {

        const router = Router();

        const userService = new UserService();
        const accountService= new AccountService();
        const service = new AuthService(userService, accountService);

        const controller = new AuthController(service);

        router.post('/register', controller.register);
        router.post('/login', controller.login)
        router.post("/verify", controller.verifyRegisterController);
        router.post("/sendingCode", controller.sendingCode)

        return router;
    }



}