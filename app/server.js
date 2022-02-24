const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const api = require("./api");

app.use("/api", api);

module.exports = server;
