const express = require('express');

const app = express();
const http = require('http');

const server = http.createServer(app);

const api = require('./api');

app.use('/api', api);

module.export = server;
