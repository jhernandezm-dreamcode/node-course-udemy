const express = require("express");
const server = express();
const routes = require("../server/routes");
const router = routes.router

server.use('/v1',router);

module.exports = {server}