const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  },
  questionTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionType',
    required: true
  }
  // Add other fields for your questions here
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
