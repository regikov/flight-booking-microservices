"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flightRoutes_js_1 = __importDefault(require("./flightRoutes.js"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.FLIGHT_SERVICES_PATH || 3002;
app.use(express_1.default.json());
app.use('/flights', flightRoutes_js_1.default);
if (process.env.MONGODB_URI) {
    mongoose_1.default.connect(process.env.MONGODB_URI).then(() => {
        console.log("Connected to the DB");
    }).catch((err) => {
        console.log("Error in connecting to the DB", err);
    });
}
app.listen(PORT, () => {
    console.log(`the flight server is open at port: ${PORT}`);
});
