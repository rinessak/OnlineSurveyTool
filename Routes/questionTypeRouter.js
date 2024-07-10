const express = require('express');
const questionTypeController = require('../Controllers/questionTypeController'); // Import the entire controller object
const router = express.Router();

// Route to get all question types
router.get('/', questionTypeController.getAllQuestionTypes);

// Route to get a single question type by ID
router.get('/:id', questionTypeController.getQuestionTypeById);

// Route to create a new question type
router.post('/', questionTypeController.createQuestionType);

// Route to update a question type by ID
router.patch('/:id', questionTypeController.updateQuestionType);

// Route to delete a question type by ID
router.delete('/:id', questionTypeController.deleteQuestionType);

module.exports = router;

