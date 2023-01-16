const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    username:String,
    answers:String,
    date:String,
    postuser:String,
    pdate:String,
    pquestion:String
});

const answerModel = mongoose.model('Answers',answerSchema);

module.exports = answerModel;