import Router from 'express';
import AuthController from "./auth.controller";
import {userSchema, registrationValidation} from "../middleware/yup";

const authRouter = Router();

authRouter.post('/registration', registrationValidation(userSchema), AuthController.registration);
authRouter.post('/login', AuthController.login);


export {authRouter};
