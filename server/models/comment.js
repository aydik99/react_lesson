const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema ({
    title: { type: String }
});

module.exports = mongoose.model('Comment', Comment);