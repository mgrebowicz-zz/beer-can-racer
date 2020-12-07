const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

// GET /profiles/edit
router.get('/edit', isLoggedIn, profilesCtrl.edit);
//GET //profiles/:id
router.get('/:id', isLoggedIn, profilesCtrl.show)
//PUT /profiles/:id
router.put('/', isLoggedIn, profilesCtrl.update);

module.exports = router;