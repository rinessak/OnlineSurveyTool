const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  Text: {
    type: String,
    required: true
  },
  Question_Type_Id: {
    type: String,
    required: true
  },
  Options: {
    type: [String],
    required: false
  },
  Required: {
    type: Boolean,
    required: true,
    default: false
  },
  Survey_Id: {
    type: String,
    required: true
  },
  Allow_Other: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Question', questionSchema); // Removed the space before 'question'

