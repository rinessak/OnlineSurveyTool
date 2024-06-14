const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// @route    POST api/questions
// @desc     Create a question
// @access   Public
router.post('/', async (req, res) => {
  const { Question_Id, Text, Options, Question_Type_Id, Required, Survey_Id } = req.body;

  try {
    let question = new Question({
      Question_Id,
      Text,
      Options,
      Question_Type_Id,
      Required,
      Survey_Id
    });

    await question.save();
    res.json(question);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
