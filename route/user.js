import express from 'express';
import axios from 'axios';
import { getList, register } from '../service/user';
import { isValidAuth } from '../service/auth';

import {userListUrl} from '../config/app-config';

import Axios from 'axios';

const userRouter = express.Router();

userRouter.get('/list', isValidAuth, (req, res, next) => {
	const search = req.query.user;

	return axios.get(`${userListUrl}${search}`).then((resp) => {
		res.send({
			success: true,
			data: resp.data,
			message: 'List fetched successfully'
		});
	}, () => {
		res.send({
			succesS: false,
			message: err.message,
			data: []
		})
	});
});

userRouter.get('/data', isValidAuth, (req, res, next) => {
	// getList().then(resp => {
	// 	res.json(resp);
	// }, err => {
	// 	res.json(err);
	// })
});

export default userRouter;