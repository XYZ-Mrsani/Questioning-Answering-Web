const mongoose = require("mongoose");

const newuserSchema = mongoose.Schema({
    email: String,
    username: {type: String, unique: true, index: true, required: true},
    password: String,
    title: String,
    aboutme: String,
    date: String
});

const newuserModel = mongoose.model('Users',newuserSchema);

module.exports = newuserModel;