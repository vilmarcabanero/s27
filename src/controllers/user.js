import User from '../models/User.js';

export const getUsers = async (req, res) => {
	try {
		const _user = await User.find();
		return res.status(200).json(_user);
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const registerUser = async (req, res) => {
	try {
		const { firstName, lastName, email, mobileNo } = req.body;

		const _user = await User.create({
			firstName,
			lastName,
			email,
			mobileNo,
		});

		return res.status(201).json(_user);
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};
