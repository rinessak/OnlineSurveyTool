const Business = require('../Models/business');

// Get all businesses
const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await Business.find();
        res.status(200).json(businesses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single business by ID
const getBusinessById = async (req, res) => {
    const id = req.params.id;
    try {
        const business = await Business.findById(id);
        if (!business) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.status(200).json(business);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new business
const createBusiness = async (req, res) => {
    const { name, description, fiscalNumber, address } = req.body;
    try {
        const newBusiness = await Business.create({
            name,
            description,
            fiscalNumber,
            address
        });
        res.status(201).json(newBusiness);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an existing business
const updateBusiness = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedBusiness = await Business.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBusiness) {
            return res.status(404).json({ message: 'Business not found' });
        }
        res.status(200).json(updatedBusiness);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a business by ID
const deleteBusiness = async (req, res) => {
    const id = req.params.id;
    try {
        await Business.findByIdAndDelete(id);
        res.status(204).json({ message: 'Business deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBusinesses,
    getBusinessById,
    createBusiness,
    updateBusiness,
    deleteBusiness
};
