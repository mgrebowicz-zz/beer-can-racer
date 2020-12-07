const User = require('../models/user');

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
    User.findById(req.params.id, req.body, { new: true}, function(err, user){
        console.log(req.body);
        res.redirect('profiles/show', { title: 'My Profile'} );
    });
};

function edit(req, res) {
    res.render('profiles/edit', { title: 'Edit Profile'} );
};


