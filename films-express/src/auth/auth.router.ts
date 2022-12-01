import {Router} from 'express';

import AuthController from "./auth.controller";
import {userSchema, registrationValidation} from "../middleware/yup/validationRegistration";

export const createAuthRouter = (): Router => {
	const authRouter = Router();
	
	authRouter.post('/registration', registrationValidation(userSchema), AuthController.registration);
	authRouter.post('/login', AuthController.login);
	
	
	return authRouter
}


