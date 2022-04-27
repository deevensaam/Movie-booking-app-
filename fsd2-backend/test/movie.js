const chai = require("chai");
const assert = require("assert");
const app = require("../server");
const chaiHttp = require("chai-http");
const { describe } = require("mocha");

const should = chai.should();
chai.use(chaiHttp);

describe("Testing movie", function () {
  it("get all the movies", (done) => {
    chai
      .request(app)
      .get("/movie")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  let id = "";

  it("post movie", (done) => {
    let movie = {
        title : "Kgf 2",
        genre: "Action",
        imdb : 9.9 ,
        image : "https://reelcinemas.com",
        duration: "3 hrs 2 min",
        trailer: "https://www.youtube.com/watch?v=JKa05nyUmuQ"
     };

    chai
      .request(app)
      .post("/movie")
      .send(movie)
      .end((err, res) => {
        res.should.have.status(201);
        id = res.body._id;
        done();
      });
  });

  it("get movie by id", (done) => {
    chai
      .request(app)
      .get("/movie/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("patch movie", (done) => {
    chai
      .request(app)
      .patch("/movie/" + id)
      .send({ title: "kgf 3" })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("delete movie", (done) => {
    chai
      .request(app)
      .delete("/movie/" + id)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});