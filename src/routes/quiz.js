import express from 'express';
const router = express.Router();
import * as quiz from '../controller/quiz.js';

router.get('/allquestions', quiz.getAllQuestions);

router.get('/question/:id', quiz.getOneQuestion);

router.get('/questions', quiz.getQuestions);

router.post('/question', quiz.createOneQuestion);

router.put('/question/:id', quiz.updateOneQuestion);

router.delete('/question/:id', quiz.deleteOneQuestion);

router.get('/', (req, res) => {
	res.send('Hello world from Quiz API!');
});

export default router;
