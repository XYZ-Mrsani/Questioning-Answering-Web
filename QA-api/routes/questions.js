var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var datetime = require('node-datetime');

const questionModel = require('../models/questions.model')

var date = new Date();
let pdate = date.toISOString().slice(0, 10);


/* GET all Questions. */
router.get('/list', function (req, res, next) {
    questionModel.find(function (err, questionListResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to list Questions' });
        } else {
            const recordCount = questionListResponse.length;
            res.send({ status: 200, recordCount: recordCount, results: questionListResponse });
        }
    });
});

/* GET details of a specific Questions. */
router.get('/view', function (req, res, next) {

    const userId = req.query.userId;

    questionModel.findById(userId, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});

/* Create new question. */
router.post('/add', function (req, res, next) {

    let uid = req.body.uid;
    let name = req.body.name;
    let question = req.body.question;


    let questionObj = new questionModel({
        uid: uid,
        name: name,
        question: question,
        date: pdate
    });

    questionObj.save(function (err, questionObj) {
        if (err) {
            res.send({ status: 500, message: 'Unable to add Question' });
        } else {
            res.send({ status: 200, message: 'Question added successfully', questionDetails: questionObj });
        }
    });
});

/* Update Question. */
router.put('/update', function (req, res, next) {

    const userId = req.body.userId;
    let uid = req.body.uid;
    let name = req.body.name;
    let question = req.body.question;


    let questionObj = {
        uid: uid,
        name: name,
        question: question,
        date: pdate
    };

    questionModel.findByIdAndUpdate(userId, questionObj, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to update the Question' });
        } else {
            res.send({ status: 200, message:'Question Updated Successfully', results: questionObj });
        }
    });
});

/* delete Qeustion. */
router.delete('/delete', function (req, res, next) {
    const userId = req.query.userId;

    questionModel.findByIdAndDelete(userId, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to delete the Question' });
        } else {
            res.send({ status: 200, message:'Question deleted successfully', results: questionResponse });
        }
    });
});

/* search question. */
router.get('/search', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
