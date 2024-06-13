const QuestionType = require("../Models/questionType");

const getAllQuestionTypes = async (req, res) => {
    try {
        const questionTypes = await QuestionType.find();
        res.status(200).json(questionTypes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getSingleQuestionType = async (req, res) => {
    const id = req.params.id;
    try {
        const questionType = await QuestionType.findOne({ _id: id });
        res.status(200).json(questionType);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createQuestionType = async (req, res) => {
    const { type } = req.body;

    if (!type) {
        return res.status(400).json({ message: "Type is required" });
    }

    try {
        const newQuestionType = await QuestionType.create({ type });
        res.status(201).json(newQuestionType);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateQuestionType = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedQuestionType = await QuestionType.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json(updatedQuestionType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteQuestionType = async (req, res) => {
    const id = req.params.id;
    try {
        await QuestionType.findOneAndDelete({ _id: id });
        res.status(204).json({ message: "Question type deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllQuestionTypes, getSingleQuestionType, createQuestionType, updateQuestionType, deleteQuestionType };