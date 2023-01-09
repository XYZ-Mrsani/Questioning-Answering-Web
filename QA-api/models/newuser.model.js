const mongoose = require("mongoose");

const newuserSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String    
});

const newuserModel = mongoose.model('Users',newuserSchema);

module.exports = newuserModel;