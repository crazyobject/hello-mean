/*
 * Mean stack application
 * data model
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Info', {
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    grade: {
        type: String,
        default: ''
    }
});