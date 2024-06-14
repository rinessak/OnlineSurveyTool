const Respondent = require("../models/Respondent");

// Get all respondents
const getAllRespondents = async (req, res) => {
    try {
        const respondents = await Respondent.find();
        res.status(200).json(respondents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get a single respondent by ID
const getSingleRespondent = async (req, res) => {
    const id = req.params.id;
    try {
        const respondent = await Respondent.findById(id);
        if (!respondent) {
            return res.status(404).json({ message: "Respondent not found" });
        }
        res.status(200).json(respondent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Create a respondent
const createRespondent = async (req, res) => {
    const { name, email } = req.body;

    try {
        const respondent = new Respondent({
            name,
            email
        });

        await respondent.save();
        res.status(201).json(respondent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a respondent
const updateRespondent = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    try {
        const updatedRespondent = await Respondent.findByIdAndUpdate(
            id,
            { name, email },
            { new: true }
        );

        if (!updatedRespondent) {
            return res.status(404).json({ message: "Respondent not found" });
        }

        res.status(200).json(updatedRespondent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a respondent
const deleteRespondent = async (req, res) => {
    const id = req.params.id;
    try {
        const respondent = await Respondent.findByIdAndDelete(id);

        if (!respondent) {
            return res.status(404).json({ message: "Respondent not found" });
        }

        res.status(204).json({ message: "Respondent deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllRespondents, getSingleRespondent, createRespondent, updateRespondent, deleteRespondent };
