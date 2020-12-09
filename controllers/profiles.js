const User = require('../models/user');
const { request } = require('../server');

module.exports = {
    edit,
    update: updateProfile,
    show
};

function show(req, res) {
    User.findById(req.params.id, function(err, user){
        res.render('profiles/show', { title: 'My Profile', user });
    });
}
 
function updateProfile(req, res) {
    req.user.bio = req.body.bio;
        req.user.save(function(err){
            res.redirect(`/profiles/${req.user._id}`);
    }); 
};

function edit(req, res) {
    res.render('profiles/edit', { title: 'Welcome to Beer Can Racer!'} );
};


