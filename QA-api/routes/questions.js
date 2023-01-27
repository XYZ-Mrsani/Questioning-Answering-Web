var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var datetime = require('node-datetime');

const questionModel = require('../models/questions.model')

var date = new Date();
let pdate = date.toISOString().slice(0, 10);
/*--Socket Part--*

var express = require('express'),
http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

const port = 4000;
const server = app.listen(port, () => {
    console.log(`Server connection on  http://localhost:${port}`);  // Server Connnected
  });
  const socket = require('socket.io')(server);
  socket.on('connection', socket => {
    console.log('Socket: client connected');
});

/*-------------------------------------------------------*/

/* GET all Questions. */
router.get('/list', function (req, res, next) {
    questionModel.find(function (err, questionListResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to list Questions' });
        } else {
            const recordCount = questionListResponse.length;
            res.send({ status: 200, recordCount: recordCount, results: questionListResponse });
        }
        //socket.emit('questionList', questionListResponse);
        //res.send(questionListResponse);
    });
});

/* GET details of a specific Questions. */
router.get('/view', function (req, res, next) {

    

    questionModel.find({"username":req.query.username}, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});

/* GET details of a specific Questions using Question. */
router.get('/viewqa', function (req, res, next) {

    questionModel.find({"question":req.query.question}, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});

router.get('/vq', function (req, res, next) {

    

    questionModel.findById(req.query.id, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});

/* Create new question. */
router.post('/add', function (req, res, next) {

    let username = req.query.username;
    let question = req.body.question;


    let questionObj = new questionModel({
        username: username,
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

   // const userId = req.body.userId;
    //let uid = req.body.uid;
    ///let username = req.body.name;
    let question = req.body.question;


    let questionObj = {
       // uid: uid,
       // username: username,
        question: question,
        date: pdate
    };

    questionModel.findByIdAndUpdate(req.query.id, questionObj, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to update the Question' });
        } else {
            res.send({ status: 200, message:'Question Updated Successfully', results: questionObj });
        }
    });
});

/* delete Qeustion. */
router.delete('/delete', function (req, res, next) {

    questionModel.findByIdAndDelete(req.query.id, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to delete the Question' });
        } else {
            res.send({ status: 200, message:'Question deleted successfully', results: questionResponse });
        }
    });
});

/* search question. */
router.get('/search', function (req, res, next) {
    
    questionModel.find({"question":{$regex: req.query.question,$options:'i'}}, function (err, questionResponse) {
        if (err) {
            res.send({ status: 500, message: 'Unable to find Question' });
        } else {
            res.send({ status: 200, results: questionResponse });
        }
    });
});

module.exports = router;
