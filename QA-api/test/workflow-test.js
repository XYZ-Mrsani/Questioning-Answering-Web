process.env.NODE_ENV = 'test';
const Question = require("../models/questions.model");
const User = require("../models/newuser.model");
const Answer = require("../models/answers.model");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../app");
const assert = require('assert');

chai.use(chaiHttp);

before((done) => {
    //Question.deleteMany({}, function (err) {});
    //User.deleteMany({}, function (err) {});
    //Answer.deleteMany({}, function (err) {});
    done();
});

after((done) => {
    //Question.deleteMany({}, function (err) {});
    //User.deleteMany({}, function (err) {});
    //Answer.deleteMany({}, function (err) {});
    done();
});

var date = new Date();
let pdate = date.toISOString().slice(0, 10);

describe('Test Question Model', function () {
    it('create and save question successfully', ()=> {

      const question = new Question({ username: 'Tom', question: 'What is Unit testing?', date:pdate});
  
      return question.save().then(function (question) {
        assert(question.username=='Tom');
      });
    });
  });

  describe('Test Answer Model', function () {
    it('create and save Answer successfully', ()=> {

      const answer = new Answer({ username: 'Sani', answers:'Unit Testing is a type of software testing where individual units or components of a software are tested.', date:pdate, pquestion: 'What is Unit testing?'});
  
      return answer.save().then(function (answer) {
        assert(answer.username=='Sani');
      });
    });
  });

  describe('Test User Model', function () {
    it('create and save User successfully', ()=> {

      const user = new User({ email:"sani@gmail.com", username:"sani", password:"sani12345", title:"Software Developer", aboutme:"Hello Wolrd!", date:pdate});
  
      return user.save().then(function (user) {
        assert(user.username=='sani');
      });
    });
  });

describe("GET Q List", () => {

    it('Test Question List, are there any Questions', (done) => {
        chai.request(server).get("/questions/list").end((err, res) => {
            res.should.have.status(200);

            expect(res.body.recordCount).to.be.above(0);
            res.body.results.length.should.be.eql(res.body.recordCount);
            done();
        });
    });
});