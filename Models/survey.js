const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: function () {
            return !this.companyId; // User ID is required if company ID is not provided
        }
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: function () {
            return !this.userId; // Company ID is required if user ID is not provided
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







// // models/Survey.js
// const mongoose = require('mongoose');

// const SurveySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   startDate: { type: Date, required: true },
//   endDate: { type: Date, required: true },
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Survey', SurveySchema);



