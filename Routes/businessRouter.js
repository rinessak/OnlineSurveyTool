const express = require('express');
const router = express.Router();
const businessController = require('../Controllers/businessController'); // Corrected path to controller

// GET all businesses
router.get('/', businessController.getAllBusinesses);

// GET single business by ID
router.get('/:id', businessController.getBusinessById);

// POST create new business
router.post('/', businessController.createBusiness);

// DELETE a business by ID
router.delete('/:id', businessController.deleteBusiness);

// PUT update a business by ID
router.patch('/:id', businessController.updateBusiness);

module.exports = router;
