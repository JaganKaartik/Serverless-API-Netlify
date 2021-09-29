"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var serverless_http_1 = __importDefault(require("serverless-http"));
var data = require("./data");
var app = (0, express_1.default)();
var router = express_1.default.Router();
router.get("/", function (req, res) {
    res.json({
        hello: "hi!",
    });
});
router.get("/data/all", function (req, res) {
    res.send(data);
});
app.use("/.netlify/functions/api", router);
module.exports = app;
module.exports.handler = (0, serverless_http_1.default)(app);
