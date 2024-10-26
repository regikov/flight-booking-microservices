"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModels_js_1 = __importDefault(require("./userModels.js"));
const get = async (req, res) => {
    const users = await userModels_js_1.default.find();
    res.send(users);
};
const getByID = async (req, res) => {
    const userId = req.params.id;
    const user = await userModels_js_1.default.findById(userId);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
};
const create = async (req, res) => {
    const { name, email } = req.body;
    const user = new userModels_js_1.default({
        name,
        email
    });
    await user.save();
    res.status(201).send(user);
};
const update = async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const user = await userModels_js_1.default.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
};
const remove = async (req, res) => {
    const userId = req.params.id;
    const user = await userModels_js_1.default.findByIdAndDelete(userId);
    if (user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(204).send();
};
exports.default = { get, getByID, create, update, remove };
