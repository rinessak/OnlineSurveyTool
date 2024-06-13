const mongoose = require('mongoose');

const AnswersSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey',
        required: true
    },
    responder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    answer: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Answers', AnswersSchema);
