var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const newuserModel = require('../models/newuser.model');

/* create new user. */
router.post('/add', function (req, res, next) {

  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;


  let newuserObj = new newuserModel({
      email: email,
      username: username,
      password: password,
  });

  newuserObj.save(function (err, newuserObj) {
      if (err) {
          res.send({ status: 500, message: 'Unable to add newuser' });
      } else {
          res.send({ status: 200, message: 'newuser added successfully', newuserDetails: newuserObj });
      }
  });
});

module.exports = router;
