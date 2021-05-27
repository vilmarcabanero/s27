import express from 'express';
import connectDB from './config/db.js';
import env from 'dotenv';
import cors from 'cors';

// import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';

const app = express();
env.config();
connectDB();
app.use(cors());
app.use(express.json());

// app.use('/', userRoutes);
app.use('/', courseRoutes);

// app.get('/', (req, res) => {
// 	res.send('Hello World')
// })

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
