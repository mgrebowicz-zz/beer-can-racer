const express = require('express');
const router = express.Router();
const racesCtrl = require('../controllers/races');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, racesCtrl.index);
router.get('/new', isLoggedIn, racesCtrl.new);
router.get('/:id', isLoggedIn, racesCtrl.show);
router.post('/', isLoggedIn, racesCtrl.create);


module.exports = router;
