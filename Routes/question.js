const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Create a question
router.post('/', questionController.createQuestion);

// Get all questions
router.get('/', questionController.getAllQuestions);

// Export the router
module.exports = router;
