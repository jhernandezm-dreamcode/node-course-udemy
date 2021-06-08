const express = require("express");
const server = express();
const routes = require("../server/routes");
const middleware = require("../middlewares/middlewares");
const router = routes.router;
const cors = require("cors")

server.use(express.json()) 
server.use('/v1',router);
server.use(middleware.errorView);
server.use(cors())
module.exports = {server}