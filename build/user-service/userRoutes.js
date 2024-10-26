"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_js_1 = __importDefault(require("./userController.js"));
const middlewares_js_1 = __importDefault(require("./middlewares.js"));
const router = (0, express_1.Router)();
//CRUD
router.get('/', userController_js_1.default.get);
router.get('/:id', userController_js_1.default.getByID);
router.post('/', middlewares_js_1.default.userValidation, middlewares_js_1.default.userVallidationHandler, userController_js_1.default.create);
router.put('/:id', middlewares_js_1.default.userValidation, userController_js_1.default.update);
router.delete('/:id', userController_js_1.default.remove);
exports.default = router;
