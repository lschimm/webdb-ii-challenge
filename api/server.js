// import express, etc
// import the car router and express router, etc
// set the endpoint for carRouter

const express = require("express");
const helmet = require("helmet");

const carRouter = require("../cars/car-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/cars", carRouter);

module.exports = server;
