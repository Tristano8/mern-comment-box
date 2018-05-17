const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.secham: the schema takes an
// object that shows the shape of your databse entries.
const CommentsSchema = new Schema({
    author: String,
    text: String,
}, { timestamps: true});

// export our module to use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);