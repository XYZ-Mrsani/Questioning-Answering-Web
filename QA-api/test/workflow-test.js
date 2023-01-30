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

/*describe("Post Question", () => {

    // After Testing Add Question Please Comment this Test
    it('Test Add Question', (done) => {

        let question = {
            username: "saniya",
            question: "what is the world fastest car?"
        }
        chai.request(server).post("/questions/add?username="+question.username).send(question).end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});*/

describe("Update Question", () => {

    it('Test Update Question', (done) => {

        let question = {
            id: "63d789ccf08c1db0b5467838",
            question: "WHAT IS THE WORLD FASTEST CAR?"
        }

        chai.request(server).put("/questions/update?id=" + question.id).send(question).end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});
