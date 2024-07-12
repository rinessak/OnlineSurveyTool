const Question = require("../Models/question");

// Get all questions
const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get a single question by ID
const getSingleQuestion = async (req, res) => {
    const id = req.params.id;
    try {
        const question = await Question.findById(id);
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create a question
const createQuestion = async (req, res) => {
    const { Text, Options, Question_Type_Id, Required, Survey_Id, Allow_Other } = req.body;

    try {
        const question = new Question({
            Text,
            Options,
            Question_Type_Id,
            Required,
            Survey_Id,
            Allow_Other
        });

        await question.save();
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a question
const updateQuestion = async (req, res) => {
    const id = req.params.id;
    const { Text, Options, Question_Type_Id, Required, Allow_Other } = req.body;

    try {
        const updatedQuestion = await Question.findByIdAndUpdate(
            id,
            { Text, Options, Question_Type_Id, Required, Allow_Other },
            { new: true }
        );

        if (!updatedQuestion) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a question
const deleteQuestion = async (req, res) => {
    const id = req.params.id;
    try {
        const question = await Question.findByIdAndDelete(id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.status(204).json({ message: "Question deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllQuestions, getSingleQuestion, createQuestion, updateQuestion, deleteQuestion };
