var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const answerModel = require('../models/answers.model');

var date = new Date();
let postdate = date.toISOString().slice(0, 10);

/* Create new answer. */
router.post('/add', function (req, res, next) {

    let username = req.body.username;
    let answers = req.body.answer;
    //let askquestion = req.body.askquestion;
    //let postuser = req.body.postuser;
    //let pdate = req.body.pdate;
    let pquestion = req.body.question;


    let answerObj = new answerModel({
        username: username,
        answers: answers,
        date: postdate,
        //postuser: postuser,
        //pdate:pdate,
        pquestion: pquestion,
    });

    answerObj.save(function (err, answerObj) {
        if (err) {
            res.send({ status: 500, message: 'Unable to add answers' });
        } else {
            res.send({ status: 200, message: 'Answers added successfully', answerDetails: answerObj });
        }
    });
});


router.get('/view', function (req, res, next) {


    answerModel.find({"pquestion":req.query.question}, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});


module.exports = router;