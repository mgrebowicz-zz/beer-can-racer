const User = require('../models/user');

module.exports = {
    create,
    delete: deleteReview
};

function deleteReview(req, res, next) {
    User.findOne({'reviews._id': req.params.id})
        .then(function(user) {
            const review = user.reviews.id(req.params.id);
            review.remove();
            user.save().then(function() {
                res.redirect(`/profiles/${user._id}`);
            }).catch(function(err) {
                return next(err);
            });
        });
}

function create(req, res) {
    User.findById(req.params.id, function(err, user) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        
        user.reviews.push(req.body);
        user.save(function(err) {
            res.redirect(`/profiles/${user._id}`);
        });
   });
};