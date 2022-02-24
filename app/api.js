const express = require("express");

const api = express.Router();

const clientRouter = require("./routers/client.router");

api.use("/clients", clientRouter);

module.exports = api;
