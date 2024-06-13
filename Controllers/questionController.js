// controllers/questionController.js

const Question = require("../models/question");

// Get all questions
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 
// Get a single question by ID
const getSingleQuestion = async (req, res) => {
    const id = req.params.id;
    try {
        const question = await Question.findOne({ _id: id });
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Create a question
const createQuestion = async (req, res) => {
    const { surveyId, questionTypeId } = req.body;

    try {
        const question = await Question.create({
            surveyId,
            questionTypeId
            // Add other fields as needed
        });
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a question
const updateQuestion = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedQuestion = await Question.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete a question
const deleteQuestion = async (req, res) => {
    const id = req.params.id;
    try {
        await Question.findOneAndDelete({ _id: id });
        res.status(204).json({ message: "Question deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getAllQuestions, getSingleQuestion, createQuestion, updateQuestion, deleteQuestion };
