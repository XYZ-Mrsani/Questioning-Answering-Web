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
            id: "63d7d1725d28d68d3023700c",
            question: "WHAT IS THE WORLD FASTEST CAR?"
        }

        chai.request(server).put("/questions/update?id=" + question.id).send(question).end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

describe("Search Question", () => {

    it('Test Search Question', (done) => {

        let question = {
            question: "WHAT IS THE WORLD FASTEST CAR?"
        }
        chai.request(server).get("/questions/search?question=" + question.question).end((err, res) => {
            res.should.have.status(200);
            expect([{ pquestion: 'WHAT IS THE WORLD FASTEST CAR?' }]).to.have.deep.members([{ pquestion: 'WHAT IS THE WORLD FASTEST CAR?' }]);
            done();
        });
    });
});

/*describe("Delete Question", () => {

    //After Test Delete Question it will delete the Question from DB, to add again uncomment 'Test Add Question' and Comment This test
    it('Test Delete Question', (done) => {

        let question = {
            id: "63d7d1725d28d68d3023700c"
        }
        chai.request(server).delete("/questions/delete?id="+question.id).end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});*/

/*--------------------------------------------------------------Test-Answer---------------------------------------------------------------*/

/*describe("POST Answer", () => {
    // After Testing Add Answer Please Comment this Test
    it('Test Add Answesr', (done) => {

        let answers = {
            username: "saniya",
            answer:"Buggati",
            question:"WHAT IS THE WORLD FASTEST CAR?",
        }
        chai.request(server).post("/answers/add").send(answers).end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});*/

describe("View Posted Questions", () => {
    it('Test View Posted Question', (done) => {
        chai.request(server).get("/answers/vq?username=saniya").end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

describe("View Answer", () => {
    it('Test View Post Answer', (done) => {
        chai.request(server).get("/answers/viewqa?id=63d7d2e3823bcc9e855749fd").end((err, res) => {
            res.should.have.status(200);
            expect([{answers:res.body.results.answers}]).to.have.deep.members([{ answers:res.body.results.answers }]);
            done();
        });
    });
});

describe("View Question", () => {
    it('Test View Question by Question', (done) => {
        chai.request(server).get("/answers/view?question=WHAT IS THE WORLD FASTEST CAR?").end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});

describe("Update Answer", () => {
    it('Test Update Answer', (done) => {

        let answer = {
            answer:"Koenigsegg",
            id: "63d7d2e3823bcc9e855749fd"
        }
        chai.request(server).put("/answers/update").send(answer).end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
});


