const QuestionType = require('../Models/questionType');

// Controller to get all question types
const getAllQuestionTypes = async (req, res) => {
    try {
        const questionTypes = await QuestionType.find();
        res.json(questionTypes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to get a single question type by ID
const getSingleQuestionType = async (req, res) => {
    try {
        const questionType = await QuestionType.findById(req.params.id);
        if (!questionType) {
            return res.status(404).json({ message: 'Question type not found' });
        }
        res.json(questionType);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller to create a new question type
const createQuestionType = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newQuestionType = new QuestionType({ name, description });
        await newQuestionType.save();
        res.status(201).json(newQuestionType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to update a question type by ID
const updateQuestionType = async (req, res) => {
    try {
        const { name, description } = req.body;
        const updatedQuestionType = await QuestionType.findByIdAndUpdate(
            req.params.id,
            { name, description, updated_at: Date.now() },
            { new: true }
        );
        if (!updatedQuestionType) {
            return res.status(404).json({ message: 'Question type not found' });
        }
        res.json(updatedQuestionType);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Controller to delete a question type by ID
const deleteQuestionType = async (req, res) => {
    try {
        const deletedQuestionType = await QuestionType.findByIdAndDelete(req.params.id);
        if (!deletedQuestionType) {
            return res.status(404).json({ message: 'Question type not found' });
        }
        res.json({ message: 'Question type deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllQuestionTypes,
    getSingleQuestionType,
    createQuestionType,
    updateQuestionType,
    deleteQuestionType
};
