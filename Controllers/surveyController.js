// controllers/surveyController.js
const Survey = require('../Models/survey');

// Get all surveys
exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single survey by ID
exports.getSurveyById = async (req, res) => {
  const id = req.params.id;
  try {
    const survey = await Survey.findById(id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new survey
exports.createSurvey = async (req, res) => {
  const { userId, companyId, name, description, startDate, endDate } = req.body;
  try {
    const newSurvey = await Survey.create({
      userId,
      companyId,
      name,
      description,
      startDate,
      endDate
    });
    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing survey
exports.updateSurvey = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedSurvey = await Survey.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedSurvey);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a survey by ID
exports.deleteSurvey = async (req, res) => {
  const id = req.params.id;
  try {
    await Survey.findByIdAndDelete(id);
    res.status(204).json({ message: 'Survey deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





// const Survey = require('../Models/survey');

// const getAllSurveys = async (req, res) => {
//     try {
//         const surveys = await Survey.find();
//         res.status(200).json(surveys);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// const getSingleSurvey = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const survey = await Survey.findById(id);
//         res.status(200).json(survey);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// const createSurvey = async (req, res) => {
//     const { name, description, startDate, endDate } = req.body;
//     try {
//         const newSurvey = new Survey({ name, description, startDate, endDate });
//         await newSurvey.save();
//         res.status(201).json(newSurvey);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// const updateSurvey = async (req, res) => {
//     const id = req.params.id;
//     try {
//         const updatedSurvey = await Survey.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(updatedSurvey);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// const deleteSurvey = async (req, res) => {
//     const id = req.params.id;
//     try {
//         await Survey.findByIdAndDelete(id);
//         res.status(204).json({ message: 'Survey deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// }

// module.exports = { getAllSurveys, getSingleSurvey, createSurvey, updateSurvey, deleteSurvey };
