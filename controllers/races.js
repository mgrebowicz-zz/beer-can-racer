const Race = require('../models/race');

module.exports = {
    index,
    show,
    new: newRace,
    create
}

function index(req, res) {
    res.render('races/index', { title: 'All Races' })
};
function show(req, res) {
    
};
function newRace(req, res) {
    res.render('races/new', { title: 'Start a Race' })
};
function create(req, res) {

};

