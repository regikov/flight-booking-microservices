"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const userValidation = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required'),
    (0, express_validator_1.body)('email').isEmail().notEmpty().withMessage('Email is reuired')
];
const userVallidationHandler = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors);
    }
    next();
};
exports.default = { userValidation, userVallidationHandler };
