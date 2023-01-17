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

router.get('/vq', function (req, res, next) {


    answerModel.find({"username":req.query.username}, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Answer' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});

router.get('/viewqa', function (req, res, next) {


    answerModel.findById(req.query.id, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Answer' });
        } else {
            res.send({ status: 200, results: questionResponse });
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

/* Update Answer. */
router.put('/update', function (req, res, next) {

     let answer = req.body.answer;
     let id = req.body.id;
 
 
     let answerObj = {
         answers: answer,
         date: postdate
     };
 
     answerModel.findByIdAndUpdate(id, answerObj, function (err, answerResponse) {
         if (err) {
             res.send({ status: 500, message: 'Unable to update the answer' });
         } else {
             res.send({ status: 200, message:'Answer Updated Successfully', results: answerObj });
         }
     });
 });

 /* delete answer. */
router.delete('/delete', function (req, res, next) {

    answerModel.findByIdAndDelete(req.query.id, function (err, answerResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to delete the answer' });
        } else {
            res.send({ status: 200, message:'Answer deleted successfully', results: answerResponse });
        }
    });
});


module.exports = router;