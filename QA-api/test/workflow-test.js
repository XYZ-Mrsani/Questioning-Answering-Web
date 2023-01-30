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

/*describe("GET Q List", () => {
    
    it('Test Question List, are there any Questions', () => {
        chai.request(server).get("/questions/list").end((err, res) => {
            res.should.have.status(200);

            expect(res.body.recordCount).to.be.above(0);
            res.body.results.length.should.be.eql(res.body.recordCount);
        });
    });
});*/

const delay = require("delay"); 

/*describe("Post Question", () => {

    // After Testing Add Question Please Comment this Test
    it('Test Add Question', async function(){

        await delay(1000);
        let question = {
            username: "saniya",
            question: "what is the world fastest car?"
        }
        chai.request(server).post("/questions/add?username="+question.username).send(question).end((err, res) => {
            res.should.have.status(200);
        });
    });
});*/

describe("Update Question", () => {

    it('Test Update Question', async function(){

        await delay(1000);
        let question = {
            id: "63d7b7a9fa5471cc8444b93c",
            question: "WHAT IS THE WORLD FASTEST CAR?"
        }

        chai.request(server).put("/questions/update?id=" + question.id).send(question).end((err, res) => {
            res.should.have.status(200);
        });
    });
});
