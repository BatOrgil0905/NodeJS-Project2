const express = require('express');
const route = express.Router();
const controller = require('../controller/loginController')

route.get("/loginUser", controller.getLoginData);
route.post('/login', controller.postLoginData)

module.exports = route