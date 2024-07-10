const QuestionType = require('../Models/questionType');

// Controller to get all question types
const getAllQuestionTypes = async (req, res) => {
    try {
        const questionTypes = await QuestionType.find();
        res.status(200).json(questionTypes);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve question types', error: err.message });
    }
};

// Controller to get a single question type by ID
const getQuestionTypeById = async (req, res) => {
    try {
        const questionType = await QuestionType.findById(req.params.id);
        if (!questionType) {
            return res.status(404).json({ message: 'Question type not found' });
        }
        res.status(200).json(questionType);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve question type', error: err.message });
    }
};

// Controller to create a new question type
const createQuestionType = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        const newQuestionType = new QuestionType({ name, description });
        await newQuestionType.save();
        res.status(201).json(newQuestionType);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create question type', error: err.message });
    }
};

// Controller to update a question type by ID
const updateQuestionType = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        const updatedQuestionType = await QuestionType.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true, runValidators: true }
        );
        if (!updatedQuestionType) {
            return res.status(404).json({ message: 'Question type not found' });
        }
        res.status(200).json(updatedQuestionType);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update question type', error: err.message });
    }
};

// Controller to delete a question type by ID
const deleteQuestionType = async (req, res) => {
    try {
        const deletedQuestionType = await QuestionType.findByIdAndDelete(req.params.id);
        if (!deletedQuestionType) {
            return res.status(404).json({ message: 'Question type not found' });
        }
        res.status(200).json({ message: 'Question type deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete question type', error: err.message });
    }
};

module.exports = {
    getAllQuestionTypes,
    getQuestionTypeById,
    createQuestionType,
    updateQuestionType,
    deleteQuestionType
};
