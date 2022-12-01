import express, {Express} from 'express';
import {createAuthRouter} from "./auth/auth.router";
import {cors} from './middleware/cors';
import {setupDB} from "./database/setupDB";
import {ErrorHandler} from "./middleware/exceptions";

const PORT = process.env.PORT || 5000;
const HOST = 'localhost';

const createWebServer = (): Express => {
	const app = express();
	setupDB()
	app.use(cors)
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	
	app.use('/api', createAuthRouter());
	
	app.use(ErrorHandler);
	return app
}


const start = async (app: Express) => {
	try {
		app.listen(PORT);
		
		console.info(`Server started and running on http://${HOST}:${PORT}`)
	} catch (e) {
		
		if (e instanceof Error) console.error(e.message, 1)
	}
}

start(createWebServer())