var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const checkAuth = require("../check_auth");

var mongoose = require('mongoose');
const newuserModel = require('../models/newuser.model');

const date = new Date();
let cdate = date.getFullYear();

/* create new user. */
router.post('/add', function (req, res, next) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.send({ message: 'hash error' });
        } else {
            let email = req.body.email;
            let username = req.body.username;
            let password = req.body.password;


            let newuserObj = new newuserModel({
                email: email,
                username: username,
                password: hash,
                title: 'No Title Added',
                aboutme: 'No About Added',
                date: cdate
            });

            newuserObj.save(function (err, newuserObj) {
                if (err) {
                    res.send({ status: 500, message: 'Unable to add newuser' });
                } else {
                    res.send({ status: 200, message: 'newuser added successfully', newuserDetails: newuserObj });

                }
            });
        }
    })
});

router.post('/login', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    newuserModel.find({ username: req.body.username }).exec().then((result) => {
        if (result.length < 1) {

            return res.json({ success: false, message: "user not found" });
        }
        const user = result[0];
        bcrypt.compare(req.body.password,user.password,(err,ret)=>{
            if(ret){
                const playload ={
                    userName : user.username
                }
                const token = jwt.sign(playload,"webBatch")
                return res.json({ success: true, token:token, messages: "Login Successful" });
            }else{
                res.json({ success: false, message: "Password does not match" });
            }
        });

    });
});

router.get('/profile', checkAuth, (req, res)=> {
    const username = req.userData.userName;

   newuserModel.find({"username": username}).exec().then((result)=>{
    res.json({success: true, data:result});
    }).catch(err=>{
        res.json({success: false, message:"error"});
    });
    /*newuserModel.find({"username":username}, function (err, profileResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: profileResponse });
        }
    });*/
});

router.put('/update',function (req, res, next) {

    let username = req.query.username;
    let email = req.body.email;
    let title = req.body.title;
    let aboutme = req.body.aboutme;

    let profileObj = {
        username:username,
        email: email,
        title: title,
        aboutme: aboutme,
    };

    newuserModel.findOneAndUpdate({"username":username}, profileObj,{new:true}, function (err, profileResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to update the profile' });
        } else {
            res.json(profileResponse); 
        }
    });
   console.log(username);
});


router.delete('/delete', function (req, res, next) {
    const username = req.query.username;

   newuserModel.findOneAndDelete({"username":username}, function (err, deleteResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to delete the user' });
        } else {
            res.send({ status: 200, message:'user deleted successfully', results: deleteResponse });
        }
    });
    console.log(username);
});

module.exports = router;
