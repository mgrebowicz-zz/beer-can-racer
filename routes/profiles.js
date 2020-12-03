const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');


// GET /profiles/edit
router.get('/edit', profilesCtrl.edit);

module.exports = router;