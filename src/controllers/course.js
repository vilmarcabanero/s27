import Course from '../models/Course.js';

export const getCourses = async (req, res) => {
	try {
		const _course = await Course.find();
		return res.status(200).json(_course);
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const createCourse = async (req, res) => {
  try {
		const {
			name,
      description,
      price,
      isActive
		} = req.body;

		const _course = await Course.create({
			name,
      description,
      price,
      isActive
		});

		return res.status(201).json(_course);
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};
