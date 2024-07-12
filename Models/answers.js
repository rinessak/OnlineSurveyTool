const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
  questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
  },
  surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Survey',
      required: true
  },
  responderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false
  },
  answer: {
      type: String,
      required: true
  },
  otherAnswer: {
      type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Answers', AnswerSchema);
