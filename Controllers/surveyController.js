const Survey = require('../Models/survey');

const getAllSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find().populate('userId', 'username').populate('companyId', 'name');
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSurveyById = async (req, res) => {
    const id = req.params.id;
    try {
        const survey = await Survey.findById(id).populate('userId', 'username').populate('companyId', 'name');
        if (!survey) {
            return res.status(404).json({ message: 'Survey not found' });
        }
        res.status(200).json(survey);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSurvey = async (req, res) => {
    const { userId, companyId, name, description, startDate, endDate } = req.body;

    if (!name || !description || !startDate || !endDate) {
        return res.status(400).json({ message: 'Required fields are missing' });
    }

    if (!userId && !companyId) {
        return res.status(400).json({ message: 'Either userId or companyId is required' });
    }

    if (userId && companyId) {
        return res.status(400).json({ message: 'A survey can be created by either a user or a company, not both' });
    }

    try {
        const newSurvey = new Survey({
            userId,
            companyId,
            name,
            description,
            startDate,
            endDate
        });

        await newSurvey.save();
        res.status(201).json(newSurvey);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSurvey = async (req, res) => {
    const id = req.params.id;
    const { userId, companyId, name, description, startDate, endDate } = req.body;

    if (userId && companyId) {
        return res.status(400).json({ message: 'A survey can be updated by either a user or a company, not both' });
    }

    try {
        const updatedSurvey = await Survey.findByIdAndUpdate(
            id,
            { userId, companyId, name, description, startDate, endDate },
            { new: true }
        );

        if (!updatedSurvey) {
            return res.status(404).json({ message: 'Survey not found' });
        }
        res.status(200).json(updatedSurvey);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteSurvey = async (req, res) => {
    const id = req.params.id;
    try {
        await Survey.findByIdAndDelete(id);
        res.status(204).json({ message: 'Survey deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllSurveys, getSurveyById, createSurvey, updateSurvey, deleteSurvey };

