const express = require('express');
const questionTypeController = require('../Controllers/questionType'); // Import the entire controller object
const router = express.Router();

// Route to get all question types
router.get('/', questionTypeController.getAllQuestionTypes);

router.get('/:id', questionTypeController.getSingleQuestionType);

// Route to create a new question type
router.post('/', questionTypeController.createQuestionType);

// Route to update a question type by ID
router.patch('/:id', questionTypeController.updateQuestionType);

// Route to delete a question type by ID
router.delete('/:id', questionTypeController.deleteQuestionType);

module.exports = router;
