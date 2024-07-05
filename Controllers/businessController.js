const Business = require('../Models/Business');

// Get all businesses
const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await Business.find();
        res.json(businesses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get single business by ID
const getSingleBusiness = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id);
        if (business) {
            res.json(business);
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new business
const createBusiness = async (req, res) => {
    const business = new Business({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newBusiness = await business.save();
        res.status(201).json(newBusiness);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a business
const deleteBusiness = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id);
        if (business) {
            await business.remove();
            res.json({ message: 'Business deleted' });
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a business
const updateBusiness = async (req, res) => {
    try {
        const business = await Business.findById(req.params.id);
        if (business) {
            business.name = req.body.name || business.name;
            business.description = req.body.description || business.description;
            business.updated_at = Date.now();

            const updatedBusiness = await business.save();
            res.json(updatedBusiness);
        } else {
            res.status(404).json({ message: 'Business not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getAllBusinesses, getSingleBusiness, createBusiness, deleteBusiness, updateBusiness };
