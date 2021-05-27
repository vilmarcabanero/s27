import Question from '../models/Question.js';

export const createOneQuestion = async (req, res) => {
	try {
		const {
			subject,
			chapter,
			difficulty,
			question,
			figure,
			correct_answer,
			incorrect_answers,
			writtenSolution,
			videoSolution,
		} = req.body;

		const _question = await Question.create({
			subject,
			chapter,
			difficulty,
			question,
			figure,
			correct_answer,
			incorrect_answers,
			writtenSolution,
			videoSolution,
		});

		return res.status(201).json(_question);
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const getAllQuestions = async (req, res) => {
	try {
		const _question = await Question.find();
		return res.status(200).json(_question);
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const getOneQuestion = async (req, res) => {
	try {
		const _id = req.params.id;

		const _question = await Question.findOne({ _id });
		if (!_question) {
			return res.status(404).json({});
		} else {
			return res.status(200).json(_question);
		}
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const getQuestions = async (req, res) => {
	
	try {
		const _amount = parseInt(req.query.amount);
		console.log(_amount);

		const _question = await Question.find().limit(_amount);
		console.log(_question);
		if (!_question) {
			return res.status(404).json({});
		} else {
			return res.status(200).json(_question);
		}
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const updateOneQuestion = async (req, res) => {
	try {
		const _id = req.params.id;
		const {
			subject,
			chapter,
			difficulty,
			question,
			figure,
			correct_answer,
			incorrect_answers,
			writtenSolution,
			videoSolution,
		} = req.body;

		let _question = await Question.findOne({ _id });

		if (!_question) {
			_question = await Question.create({
				subject,
				chapter,
				difficulty,
				question,
				figure,
				correct_answer,
				incorrect_answers,
				writtenSolution,
				videoSolution,
			});
			return res.status(201).json(_question);
		} else {
			_question.subject = subject;
			_question.chapter = chapter;
			_question.difficulty = difficulty;
			_question.question = question;
			_question.figure = figure;
			_question.correct_answer = correct_answer;
			_question.incorrect_answers = incorrect_answers;
			_question.writtenSolution = writtenSolution;
			_question.videoSolution = videoSolution;

			await _question.save();
			return res.status(200).json(_question);
		}
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};

export const deleteOneQuestion = async (req, res) => {
	try {
		const _id = req.params.id;

		const question = await Question.deleteOne({ _id });

		if (question.deletedCount === 0) {
			return res.status(404).json();
		} else {
			return res.status(204).json();
		}
	} catch (error) {
		return res.status(500).json({ error: error });
	}
};
