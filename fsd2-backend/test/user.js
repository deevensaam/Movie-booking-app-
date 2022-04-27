const chai = require("chai");
const assert = require("assert");
const app = require("../server");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");

const should = chai.should();
chai.use(chaiHttp);

describe("Testing User", function () {
  it("get all the users", (done) => {
    chai
      .request(app)
      .get("/user")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  let id = "";

  it("post user", (done) => {
    let user = {
      username: "user1",
      password: "user1",
    };
    chai
      .request(app)
      .post("/user")
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        id = res.body._id;
        done();
      });
  });

  it("get user by id", (done) => {
    chai
      .request(app)
      .get("/user/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("patch user", (done) => {
    chai
      .request(app)
      .patch("/user/" + id)
      .send({ password: "user1" })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("delete user", (done) => {
    chai
      .request(app)
      .delete("/user/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});