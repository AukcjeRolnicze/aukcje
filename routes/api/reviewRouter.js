const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const reviewController = require('../../controllers/reviewController');
const authController = require('../../controllers/authController');




router.post(
  '/:id/mark-helpful',
  authController.authenticate,
  reviewController.markReviewAsHelpful
);




router.post('/:id', authController.authenticate, reviewController.createReview);




router.get('/:id', reviewController.getReviewsForUserId);




router.get('/:id/one', reviewController.getReviewById);




router.get(
  '/',
  authController.authenticate,
  reviewController.getReviewsWrittenByUserId
);




router.delete(
  '/:id',
  authController.authenticate,
  reviewController.deleteReview
);




router.patch(
  '/:id',
  authController.authenticate,
  reviewController.updateReview
);

module.exports = router;
