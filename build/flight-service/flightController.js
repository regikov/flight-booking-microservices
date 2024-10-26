"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const flightModel_js_1 = __importDefault(require("./flightModel.js"));
const create = async (req, res) => {
    const { origin, destination, price, userId } = req.body;
    try {
        const userResponse = await axios_1.default.get(`http://localhost:3001}/users/${userId}`);
        if (userResponse.status === 200) {
            const newFlight = new flightModel_js_1.default({
                origin,
                destination,
                price,
                userId,
            });
            await newFlight.save();
            return res.status(201).json({ message: 'Flight created', flight: newFlight });
        }
        else {
            return res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Error communicating with User Service', error: error.message });
    }
};
;
// Fetch all flights
const get = async (req, res) => {
    try {
        const flights = await flightModel_js_1.default.find();
        res.status(200).send(flights);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        }
        else {
            res.status(500).send({ message: 'Unknown error occurred' });
        }
    }
};
// Fetch a flight by its ID
const getByID = async (req, res) => {
    const flightId = req.params.id;
    try {
        const flight = await flightModel_js_1.default.findById(flightId);
        if (!flight) {
            return res.status(404).send({ message: 'Flight not found' });
        }
        res.status(200).send(flight);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        }
        else {
            res.status(500).send({ message: 'Unknown error occurred' });
        }
    }
};
// Remove a flight by its ID
const remove = async (req, res) => {
    const flightId = req.params.id;
    try {
        await flightModel_js_1.default.findByIdAndDelete(flightId);
        res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        }
        else {
            res.status(500).send({ message: 'Unknown error occurred' });
        }
    }
};
exports.default = { get, getByID, create, remove };
