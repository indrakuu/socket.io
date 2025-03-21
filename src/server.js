const express = require("express");
const http = require("http");
const cors = require("cors");

const config = require("./config/config");
const socket = require("./config/socket");

const app = express();
const server = http.createServer(app);
const io = config(server);

app.use(express.json());
app.use(cors());

socket(io);

module.exports = server;