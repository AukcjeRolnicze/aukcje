const express = require('express');
const router = express.Router();

const listingController = require('../../controllers/listingController');
const authController = require('../../controllers/authController');
const multer = require('multer');

const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage: storage });





router.post('/', authController.authenticate, listingController.createListing);




router.get(
  '/',
  listingController.getAllListings,
  listingController.endExpiredListings
);




router.delete(
  '/:id',
  authController.authenticate,
  listingController.deleteListing
);




router.get('/:id', listingController.getListingById);




router.get('/slug/:slug', listingController.getListingBySlug);




router.patch(
  '/:id',
  authController.authenticate,
  listingController.updateListing
);




router.post('/:id/bid', authController.authenticate, listingController.makeBid);




router.delete(
  '/:listing_id/bid/:bid_id',
  authController.authenticate,
  listingController.deleteBid
);




router.post('/:id', authController.authenticate, listingController.endListing);




router.get(
  '/dashboard/active',
  authController.authenticate,
  listingController.getUsersActiveListings
);




router.get(
  '/dashboard/inactive',
  authController.authenticate,
  listingController.getUsersInactiveListings
);




router.get(
  '/dashboard/won',
  authController.authenticate,
  listingController.getUsersWonListings
);




router.get('/:user_id/active', listingController.getActiveListingsByUser);




router.get('/:user_id/inactive', listingController.getInactiveListingsByUser);




router.post(
  '/upload/image',
  upload.single('image'),
  listingController.uploadImage
);

module.exports = router;
