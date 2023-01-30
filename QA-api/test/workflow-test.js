process.env.NODE_ENV = 'test';
const Question = require("../models/questions.model");
const User = require("../models/newuser.model");
const Answer = require("../models/answers.model");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
const server = require("../app");

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
