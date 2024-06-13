const express = require('express');
const router = express.Router();
const surveyController = require('../Controllers/surveyController');

// Routes
router.get('/', surveyController.getAllSurveys);
router.get('/:id', surveyController.getSurveyById);
router.post('/', surveyController.createSurvey);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.deleteSurvey);

module.exports = router;





// router.get('/', usersController.getAllUsers);
// router.get('/:id', usersController.getSingleUser);
// router.post('/', usersController.createUser);
// router.patch('/:id', usersController.updateUser);
// router.delete('/:id', usersController.deleteUser);

// module.exports = router;