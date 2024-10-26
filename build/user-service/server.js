"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_js_1 = __importDefault(require("./userRoutes.js"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 3001; //TODO:move this to an .env file
app.use(express_1.default.json());
app.use('/users', userRoutes_js_1.default);
mongoose_1.default.connect('mongodb+srv://testuser:test1234@education.bsck2.mongodb.net/?retryWrites=true&w=majority&appName=education').then(() => {
    console.log("Connected to the DB");
}).catch((err) => {
    console.log("Error in connecting to the DB", err);
});
app.listen(PORT, () => {
    console.log(`the user server is open at port: ${PORT}`);
});
