const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    username: String,
    question: String,
    date: String
});

const questionModel = mongoose.model('Questions',questionSchema);

module.exports = questionModel;
