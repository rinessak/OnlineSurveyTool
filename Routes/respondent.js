const express = require('express');
const router = express.Router();
const Respondent = require('../models/respondent');

// Create a respondent
router.post('/', async (req, res) => {
  try {
    const respondent = new Respondent(req.body);
    await respondent.save();
    res.status(201).send(respondent);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all respondents
router.get('/', async (req, res) => {
  try {
    const respondents = await Respondent.find();
    res.send(respondents);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
