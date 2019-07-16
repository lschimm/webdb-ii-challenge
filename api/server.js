// import express, etc
// import the car router and express router, etc
// set the endpoint for carRouter

const express = require("express");
const helmet = require("helmet");
const server = express();

const carRouter = require("../cars/car-router.js");

server.get("/api", (req, res) => {
  res.send(`<h2>oh, what up</h2>`);
});

server.use(helmet());
server.use(express.json());

server.use("/cars", carRouter);

module.exports = server;
