const express = require('express');
const route = express.Router();
const controller = require('../controller/homeController')

route.get('/', controller.homeController)

module.exports = route