const Race = require('../models/race');

module.exports = {
    index,
    show,
    new: newRace,
    create
}

function index(req, res) {
    Race.find({}, function(err, races) {
        res.render('races/index', { title: 'All Races', races })
    });
};
function show(req, res) {
    Race.findById(req.params.id, function (err, race) {
        res.render('races/show', { title: 'Race Details', race });    
    });
};
function newRace(req, res) {
    res.render('races/new', { title: 'Start a Race' })
};

function create(req, res) {
    req.body.user = req.user._id

    Race.create(req.body, function (err, race) {
        if (err) console.log(err)
        res.redirect(`/races/${race._id}`);
    });
};

// function create(req, res) {
//     const race = new Race(req.body);
//     race.save(function(err) {
//         if(err) return res.render('races/new');
//         res.redirect('races/show')
//     });
// };

