import express from 'express';
const router = express.Router();
import * as course from '../controllers/course.js';

router.get('/courses', course.getCourses);

router.post('/courses', course.createCourse);


router.get('/', (req, res) => {
	res.send('Hello world from course API!');
});

export default router;
