const Answers = require("../Models/answers");

const getAllAnswers = async (req, res) => {
    try {
        const answers = await Answers.find();
        res.status(200).json(answers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getSingleAnswer = async (req, res) => {
    const id = req.params.id;
    try {
        const answer = await Answers.findOne({ _id: id });
        res.status(200).json(answer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createAnswer = async (req, res) => {
    const { question, survey, responder, answer } = req.body;

    // Check for required fields
    if (!question || !survey || !answer) {
        return res.status(400).json({ message: "Required fields are missing" });
    }

    try {
        // Create a new answer object with the provided data
        const newAnswer = await Answers.create({
            question,
            survey,
            responder,
            answer,
        });

        res.status(201).json(newAnswer);

    } catch (error) {
        // Handle internal server errors
        res.status(500).json({ message: error.message });
    }
};

const updateAnswer = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedAnswer = await Answers.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(updatedAnswer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteAnswer = async (req, res) => {
    const id = req.params.id;
    try {
        await Answers.findOneAndDelete({ _id: id });
        res.status(204).json({ message: "Answer deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getAllAnswers, getSingleAnswer, createAnswer, updateAnswer, deleteAnswer };
