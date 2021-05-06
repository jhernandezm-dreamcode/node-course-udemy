const express = require("express");
const server = express();
const routes = require("../server/routes");
const middleware = require("../middlewares/middlewares");
const router = routes.router

server.use('/v1',router);
server.use(middleware.errorView);

module.exports = {server}