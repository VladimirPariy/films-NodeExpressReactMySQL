import {Users} from '../database/Models/users';
import bcrypt from 'bcryptjs';

class AuthModel {
	async getCandidateDuplicate(email: string, login: string) {
		
		const candidateDuplicate = await Users.query().where({login}).orWhere({email});
		return candidateDuplicate
		
	}
	
	async registration(login: string, email: string, password: string) {
		
		const candidate = await this.getCandidateDuplicate(email, login);
		if (candidate.length) {
			return {message: 'User already exists'};
		}
		
		const encryptedPass = await bcrypt.hash(password, 7);
		
		const user = await Users.query().insert({login, email, password: encryptedPass});
		return user
	}
	
	async login(login: string, email: string, password: string) {
	
	}
}

export default new AuthModel();