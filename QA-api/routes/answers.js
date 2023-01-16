var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const answerModel = require('../models/answers.model');

var date = new Date();
let pdate = date.toISOString().slice(0, 10);

/* Create new answer. */
router.post('/add', function (req, res, next) {

    let username = req.query.username;
    let answers = req.body.answers;
    let askuser = req.body.askuser;
    let postdate = req.body.postdate


    let answerObj = new answerModel({
        username: username,
        answers: answers,
        date: pdate,
        askuser: askuser,
        postdate:postdate,
    });

    answerObj.save(function (err, answerObj) {
        if (err) {
            res.send({ status: 500, message: 'Unable to add Question' });
        } else {
            res.send({ status: 200, message: 'Question added successfully', answerDetails: answerObj });
        }
    });
});

module.exports = router;