// 创建 express
const express = require("express");

// Controller 引入
const BaiDuController = require("../controller/BaiDuController");
const CorsController = require("../controller/CorsController");
const MainController = require("../controller/MainController");
const BingController = require("../controller/BingController");

// 创建路由容器
let router = express.Router();

// 路由引入
CorsController(router);
MainController(router);
BaiDuController(router);
BingController(router);

module.exports = router;
