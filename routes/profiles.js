const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

// GET /profiles/edit
router.get('/edit', profilesCtrl.edit);
//GET //profiles/:id
router.get('/:id', profilesCtrl.show)
//PUT /profiles/:id
router.put('/:id', isLoggedIn, profilesCtrl.update);

module.exports = router;