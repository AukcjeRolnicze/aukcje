const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const userController = require('../../controllers/userController');
const authController = require('../../controllers/authController');




router.post('/', userController.createUser);




router.get('/me', authController.authenticate, userController.getMyProfile);




router.get(
  '/bids',
  authController.authenticate,
  userController.getUserBidHistory
);




router.patch('/me', authController.authenticate, userController.updateUser);




router.delete('/me', authController.authenticate, userController.deleteUser);




router.delete('/', authController.authenticate, userController.deleteUser);




router.get('/', userController.getAllUsers);




router.get('/:id', userController.getUserById);

module.exports = router;
