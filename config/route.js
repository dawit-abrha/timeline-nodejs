const express = require("express");
const route = express.Router();
const userController = require('../conroller/usercontroller')

route.get("/",  userController.homePage);
 route.get('/about/:username',  userController.about);
 route.get("/*",  userController.noPage);

    module.exports = route;