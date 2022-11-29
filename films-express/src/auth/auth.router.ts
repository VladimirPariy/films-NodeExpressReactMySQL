import Router from 'express';
import {check} from "express-validator";
import AuthController from "./auth.controller";

const authRouter = Router();

authRouter.post('/registration',
	[
		check('email', 'E-mail field must not be empty').notEmpty(),
		check('email', 'E-mail does not match the set parameters').isEmail(),
		check('password', 'Password must contain at least 3 characters and no more than 10').isLength({min: 3, max: 10}),
		check('login', 'Login field must not be empty').notEmpty(),
	],
	AuthController.registration);
authRouter.post('/login', AuthController.login);

export {authRouter};