const express = require("express");
const router = express.Router();
const myFunctions = require("../controller/controllerItem");
const userFunctions = require("../controller/userController");

router.route("/saveitem").post(myFunctions.saveItem);
router.route("/getitem").get(myFunctions.findAllItems);
router.route("/login").post(userFunctions.login)
module.exports = {router}