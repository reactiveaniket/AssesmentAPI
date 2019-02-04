import express from 'express';
import request from 'superagent';
import { login } from '../service/auth';
import { github } from '../config/app-config';

const authRouter = express.Router();

authRouter.get('/authenticate', (req, res, next) => {
	const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${github.client_id}`;
	// redirect user with express
	res.send({ url: githubAuthUrl });
});

authRouter.get('/authenticate/callback', (req, res, next) => {
	const { query } = req;
	const { code } = query;

	if (!code) {
		res.send({
			success: false,
			message: 'Error: No code'
		});
	}

	request
		.post('https://github.com/login/oauth/access_token')
		.send({
			client_id: github.client_id,
			client_secret: github.client_secret,
			code
		})
		.set('Accept', 'application/json')
		.then(resp => {
			const data = resp.body;
			console.log('Data:', data);
			// res.set({'data': 'check if passed'});
			// req.session.access_token = code;
			res.cookie('token', code);
			// res.send(data);
			res.redirect('http://localhost:4200/home');
		},err => {
			res.send({
				success:false,
				message:'Authentication error'
			})
		});
});

export default authRouter;