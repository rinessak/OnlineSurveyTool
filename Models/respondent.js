const mongoose = require('mongoose');

const respondentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const Respondent = mongoose.model('Respondent', respondentSchema);

module.exports = Respondent;
