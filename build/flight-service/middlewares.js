"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const flightSchema = joi_1.default.object({
    origin: joi_1.default.string().required().messages({
        'string.base': 'Origin must be a string',
        'any.required': 'Origin is required'
    }),
    destination: joi_1.default.string().required().messages({
        'string.base': 'Distination must be a string',
        'any.required': 'Distination is required'
    }),
    price: joi_1.default.number().required().messages({
        'number.base': 'Price must be a Number',
        'any.required': 'Price is required'
    }),
    userId: joi_1.default.string().required().messages({
        'string.base': 'Origin must be a string',
        'any.required': 'Origin is required'
    })
});
const validator = (req, res, next) => {
    const { error } = flightSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }
    next();
};
exports.default = validator;
