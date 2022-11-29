import {Response, Request} from "express";
import AuthModel from "./auth.model";
import {validationResult} from "express-validator";

class AuthController {
	async registration(req: Request, res: Response) {
		try {
			const {login, email, password} = req.body;
			
			const validationError = validationResult(req);
			if(!validationError.isEmpty()){
				console.error(validationError.array().map(err => err.msg));
				return res.status(400).json({errors: validationError.array});
			}
			
			const data = await AuthModel.registration(login, email, password)
			res.json(data)
		} catch (e) {
			if (e instanceof Error) res.status(400).json(e.message)
		}
	}
	
	async login(req: Request, res: Response) {
		try {
			const {login, email, password} = req.body;
			const data = await AuthModel.login(login, email, password)
			res.status(200).json(data)
		} catch (e) {
			if (e instanceof Error) res.status(400).json(e.message)
		}
	}
}

export default new AuthController();