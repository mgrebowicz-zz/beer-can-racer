const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

// POST users/:id/reviews
router.post('/profiles/:id/reviews', isLoggedIn, reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);

module.exports = router;