import express from 'express';
import {authRouter} from "./auth/auth.router";
import {cors} from './middleware/cors';
import {setupDB} from "./database/setupDB";
import {ErrorHandler} from "./middleware/exceptions";

const PORT = process.env.PORT || 5000;
const HOST = 'localhost';

const app = express();
app.use(cors)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', authRouter);

app.use(ErrorHandler);

(async () => {
	try {
		app.listen(PORT);
		setupDB()
		console.info(`Server started and running on http://${HOST}:${PORT}`)
	} catch (e) {
		
		if (e instanceof Error) console.error(e.message, 1)
	}
})()
