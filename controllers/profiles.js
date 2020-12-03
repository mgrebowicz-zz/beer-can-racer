const User = require('../models/user');

module.exports = {
    edit
};

function edit(req, res) {
    res.render('profiles/edit', { title: 'Edit Profile'} );
};

