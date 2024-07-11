const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: function () {
            return !this.companyId; 
        }
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: function () {
            return !this.userId; 
        }
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Survey', SurveySchema);











