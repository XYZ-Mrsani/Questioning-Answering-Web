const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    uid: String,
    name: String,
    question: String,
    date: String
});

const questionModel = mongoose.model('Questions',questionSchema);

module.exports = questionModel;
