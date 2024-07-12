const Answer = require('../Models/answers');
const Question = require('../Models/question');
const Survey = require('../Models/survey')

// Get all answers
exports.getAllAnswers = async (req, res) => {
    try {
        const answers = await Answer.find();
        res.json(answers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving answers');
    }
};

// Get a single answer by ID
exports.getSingleAnswer = async (req, res) => {
    try {
        const answer = await Answer.findById(req.params.id);
        if (!answer) {
            return res.status(404).send('Answer not found');
        }
        res.json(answer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving answer');
    }
};

// Create a new answer
exports.createAnswer = async (req, res) => {
    const { questionId, surveyId, responderId, answer, otherAnswer } = req.body;

    try {
        if (!questionId || !surveyId) {
            return res.status(400).send('QuestionId and SurveyId are required');
        }

        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).send('Question not found');
        }

        const survey = await Survey.findById(surveyId);
        if (!survey) {
            return res.status(404).send('Survey not found');
        }

        const newAnswer = new Answer({
            questionId: questionId,
            surveyId: surveyId,
            responderId: responderId,
            answer: answer,
            otherAnswer: otherAnswer
        });

        await newAnswer.save();

        res.status(200).json(newAnswer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting answer');
    }
};


exports.updateAnswer = async (req, res) => {
    const { answer, otherAnswer } = req.body;
    try {
        let updatedAnswer = await Answer.findByIdAndUpdate(
            req.params.id,
            { answer, otherAnswer },
            { new: true }
        );
        if (!updatedAnswer) {
            return res.status(404).send('Answer not found');
        }
        res.json(updatedAnswer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating answer');
    }
};

// Delete an answer
exports.deleteAnswer = async (req, res) => {
    try {
        const answer = await Answer.findByIdAndDelete(req.params.id);
        if (!answer) {
            return res.status(404).send('Answer not found');
        }
        res.json({ msg: 'Answer deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting answer');
    }
};

// Submit answer 
exports.submitAnswer = async (req, res) => {
    const { questionId, surveyId, responderId, answer, otherAnswer } = req.body;

    try {
        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).send('Question not found');
        }

        const newAnswer = new Answer({
            questionId: questionId,
            surveyId: surveyId,
            responderId: responderId,
            answer: answer,
            otherAnswer: otherAnswer
        });

        await newAnswer.save();
        res.status(200).send('Answer submitted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting answer');
    }
};

