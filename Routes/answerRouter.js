// routes/answersRoutes.js
const express = require('express');
const router = express.Router();
const answersController = require('../Controllers/answersController');

// Routes
router.get('/', answersController.getAllAnswers);
router.get('/question/:questionId', answersController.getAnswersByQuestionId);
router.post('/', answersController.createAnswer);
// router.put('/:answerId', answersController.updateAnswer);


module.exports = router;
