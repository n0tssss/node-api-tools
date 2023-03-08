/*
 * @Author: N0ts
 * @Date: 2022-08-30 14:38:31
 * @Description: 路由配置
 * @FilePath: /node-api-tools/router/router.js
 * @Mail：mail@n0ts.cn
 */

// 创建 express
const express = require("express");

// Controller 引入
const BaiDuController = require("../controller/BaiDuController");
const CorsController = require("../controller/CorsController");
const MainController = require("../controller/MainController");
const BingController = require("../controller/BingController");
const GiteeController = require("../controller/GiteeController");
const ChatGPTController = require("../controller/ChatGPTController");

// 创建路由容器
let router = express.Router();

// 路由引入
CorsController(router);
MainController(router);
BaiDuController(router);
BingController(router);
GiteeController(router);
ChatGPTController(router);

module.exports = router;
