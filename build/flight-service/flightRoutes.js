"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flightController_js_1 = __importDefault(require("./flightController.js"));
const express_1 = require("express");
const middlewares_js_1 = __importDefault(require("./middlewares.js"));
const router = (0, express_1.Router)();
router.post('/', middlewares_js_1.default, flightController_js_1.default.create);
router.get('/', flightController_js_1.default.get);
router.get('/:id', flightController_js_1.default.getByID);
router.delete('/:id', flightController_js_1.default.remove);
exports.default = router;
