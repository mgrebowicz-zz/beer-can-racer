const express = require('express');
const router = express.Router();
const racesCtrl = require('../controllers/races');

router.get('/', racesCtrl.index);
router.get('/new', racesCtrl.new);
router.get('/:id', racesCtrl.show);
router.post('/', racesCtrl.create);


module.exports = router;