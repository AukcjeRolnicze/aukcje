const express = require('express');
const router = express.Router();

const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');




router.get('/', authController.authenticate, userController.getMyProfile);




router.post('/', authController.loginUser);




router.patch(
  '/update-password',
  authController.authenticate,
  authController.updatePassword
);

module.exports = router;
