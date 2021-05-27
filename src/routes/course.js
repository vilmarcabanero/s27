import express from 'express';
const router = express.Router();
import * as course from '../controllers/course.js';

router.get('/courses', course.getCourses);

router.get('/activecourses', course.getActiveCourses);

router.post('/courses', course.createCourse);

router.delete('/courses', course.deleteCourse);


router.get('/', (req, res) => {
	res.send('Hello world from course API!');
});

export default router;
