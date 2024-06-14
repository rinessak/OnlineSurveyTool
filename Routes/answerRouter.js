const express = require('express');
const answerController = require('../Controllers/answerController');
const router = express.Router();

router.get('/', answerController.getAllAnswers);
router.get('/:id', answerController.getSingleAnswer);
router.post('/', answerController.createAnswer);
router.patch('/:id', answerController.updateAnswer);
router.delete('/:id', answerController.deleteAnswer);

module.exports = router;
