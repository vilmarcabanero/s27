import express from 'express';
const router = express.Router();
import * as user from '../controllers/user.js';

router.get('/users', user.getUsers);

router.post('/users', user.registerUser);


router.get('/', (req, res) => {
	res.send('Hello world from User API!');
});

export default router;
