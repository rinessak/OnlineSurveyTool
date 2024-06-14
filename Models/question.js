const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  Question_Id: {
    type: String,
    required: true,
    unique: true
  },
  Text: {
    type: String,
    required: true
  },
  Options: {
    type: [String], // Array of strings
    required: false
  },
  Question_Type_Id: {
    type: String,
    required: true
  },
  Required: {
    type: Boolean,
    required: true,
    default: false
  },
  Survey_Id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Question', questionSchema);
