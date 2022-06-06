// 创建 express
const express = require("express");
const BaiDuController = require("../controller/BaiDuController");

// Controller 引入
const CorsController = require("../controller/CorsController");
const MainController = require("../controller/MainController");

// 创建路由容器
let router = express.Router();

// 路由引入
router = CorsController(router);
router = MainController(router);
router = BaiDuController(router);

module.exports = router;