const express = require('express');
const router = express.Router();
const Response = require('../Models/answers');
const Survey = require('../Models/survey');

// Get response count for each option of a multiple-choice question
router.get('/report/:surveyId/:questionId', async (req, res) => {
    try {
        const { surveyId, questionId } = req.params;
        const responses = await Response.find({ surveyId: surveyId });

        const questionResponses = responses.map(response => {
            return response.answer; // Use response.answer directly
        }).filter(answer => answer !== null);

        const report = questionResponses.reduce((acc, answer) => {
            acc[answer] = (acc[answer] || 0) + 1;
            return acc;
        }, {});

        res.json(report);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});



module.exports = router;

