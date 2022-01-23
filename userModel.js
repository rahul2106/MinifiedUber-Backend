// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    vehicle:{
        type: String,
        required: false
    },
    isDriver:{
        type: Boolean,
        required: true
    },
    isAvailable:{
        type:Boolean,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Users model
var Users = module.exports = mongoose.model('CabData', UserSchema);
module.exports.get = function (callback, limit) {
    Users.find(callback).limit(limit);
}