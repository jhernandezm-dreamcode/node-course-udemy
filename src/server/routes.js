const express = require("express");
const router = express.Router();
const myFunctions = require("../controller/controllerItem");
router.route("/save-item").post(myFunctions.saveItem);
router.route("/add-item").get(myFunctions.addItems);
module.exports = {router}