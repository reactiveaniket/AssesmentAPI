const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    name: {type: String},
    password: {type:String}
}, {collection: 'loginTable'});

module.exports = mongoose.model('login', loginSchema);