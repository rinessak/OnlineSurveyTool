const express = require('express');
const questionTypeController = require('../Controllers/questionTypeController'); // Import the entire controller object
const router = express.Router();

router.get('/', questionTypeController.getAllQuestionTypes); // Use questionTypeController.getAllQuestionTypes
router.get('/:id', questionTypeController.getSingleQuestionType); // Use questionTypeController.getSingleQuestionType
router.post('/', questionTypeController.createQuestionType); // Use questionTypeController.createQuestionType
router.patch('/:id', questionTypeController.updateQuestionType); // Use questionTypeController.updateQuestionType
router.delete('/:id', questionTypeController.deleteQuestionType); // Use questionTypeController.deleteQuestionType

module.exports = router;