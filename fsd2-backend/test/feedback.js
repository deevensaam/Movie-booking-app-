const chai = require("chai");
const assert = require("assert");
const app = require("../server");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");

const should = chai.should();
chai.use(chaiHttp);

describe("Testing feedbacks", function () {
  this.timeout(0)
  it("get all the feedbacks", (done) => {
    chai
      .request(app)
      .get("/feedback")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  let id = "";

  it("post feedback", (done) => {
    let feedback = {
      name: "lucky",
      telnum: 7894561230,
      email: "lucky@gmail.com",
      message: "Checkingggg"
    };
    chai
      .request(app)
      .post("/feedback")
      .send(feedback)
      .end((err, res) => {
        res.should.have.status(201);
        id = res.body._id;
        done();
      });
  });

  it("get feedback by id", (done) => {
    chai
      .request(app)
      .get("/feedback/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("patch feedback", (done) => {
    chai
      .request(app)
      .patch("/feedback/" + id)
      .send({ password: "deeven@123" })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("delete feedback", (done) => {
    chai
      .request(app)
      .delete("/feedback/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});