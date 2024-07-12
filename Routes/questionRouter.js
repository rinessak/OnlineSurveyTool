const express = require('express');
const questionController = require('../Controllers/questionController');
const router = express.Router();

router.get('/', questionController.getAllQuestions);
router.get('/:id', questionController.getSingleQuestion);
router.post('/', questionController.createQuestion);
router.patch('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;
