import jwt from 'jsonwebtoken';
import { SECRET } from '../config/app-config';
import { Login } from '../controller/auth';

export async function login(data) {
	const result = await Login(data);
	return result;
}

export function isValidAuth(req, res, next) {
	const token = req.headers.authorization;

	console.log('Toke:', token);
	if (!token) {
		res.json({ auth: false, message: 'No Token' });
	} else {
		console.log('in else');
		next();
	}
}
