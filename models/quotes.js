const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    content: String,
    author: String
});

module.exports = mongoose.model('quote', quoteSchema);