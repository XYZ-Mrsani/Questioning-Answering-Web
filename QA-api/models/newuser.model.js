const mongoose = require("mongoose");

const newuserSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String    
});

const newuserModel = mongoose.model('Newuser',newuserSchema);

module.exports = newuserModel;