const express = require("express");
const route = express.Router();
const controller = require('../controller/newsController');

route.get("/news", controller.getNewsData);
route.post('/news', controller.postNewsData);

route.get('/detail/:id', controller.getNewsDetail);

route.get('/edit/:id', controller.getUpdateNewsData);
route.post('/edit/:id', controller.postUpdateNewsData)

route.post('/delete/:id', controller.deleteNewsData);

module.exports = route;
