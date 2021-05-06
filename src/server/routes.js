const express = require("express");
const router = express.Router();
const myFunctions = require("../controller/controller1");
router.route("/").get(myFunctions.helloWorld);
router.route("/add-item").get(myFunctions.addItems);
module.exports = {router}