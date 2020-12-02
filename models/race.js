const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        default: function () {
            return new Date().getFullYear();
        }
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Race', raceSchema);