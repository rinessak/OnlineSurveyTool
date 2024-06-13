// models/QuestionType.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionTypeSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['text', 'multiple-choice', 'single-choice', 'rating']
    }
}, { timestamps: true });

module.exports = mongoose.model('QuestionType', QuestionTypeSchema);



// const mongoose = require('mongoose');

// const questionTypeSchema = new mongoose.Schema({
//     type: {
//         type: String,
//         required: true,
//     },
// });

// module.exports = mongoose.model('QuestionType', questionTypeSchema);