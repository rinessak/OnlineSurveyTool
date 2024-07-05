const express = require('express');
const router = express.Router();
const businessController = require('../Controllers/businessController');

// GET all businesses
router.get('/', businessController.getAllBusinesses);

// GET single business
router.get('/:id', businessController.getSingleBusiness);

// POST create new business
router.post('/', businessController.createBusiness);

// DELETE a business
router.delete('/:id', businessController.deleteBusiness);

// PUT update a business
router.patch('/:id', businessController.updateBusiness);

module.exports = router;
