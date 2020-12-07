require('./config/database');
const Race = require('./models/race');
const User = require('./models/user');

let r;
let u;

Race.findOne({}, function (err, race) {
    r = race;
})

User.findOne({}, function(err, user) {
    u = user;
});