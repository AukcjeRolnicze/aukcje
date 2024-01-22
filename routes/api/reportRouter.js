const express = require('express');
const router = express.Router();

const reportController = require('../../controllers/reportController');
const authController = require('../../controllers/authController');




router.post('/:id', authController.authenticate, reportController.createReport);

router.get('/', reportController.getReports);
module.exports = router;
