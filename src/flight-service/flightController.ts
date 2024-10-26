import { Request, Response } from 'express';
import axios from 'axios';
import Flight from './flightModel.js';

const create = async (req: Request, res: Response) => {
    const { origin, destination, price, userId } = req.body;

    try {
        const userResponse = await axios.get(`http://localhost:3001}/users/${userId}`);

        if (userResponse.status === 200) {
            const newFlight = new Flight({
                origin,
                destination,
                price,
                userId, 
            });
            await newFlight.save(); 
            return res.status(201).json({ message: 'Flight created', flight: newFlight });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error:any) {
        return res.status(500).json({ message: 'Error communicating with User Service', error: error.message });
      }
    };
    ;

// Fetch all flights
const get = async (req: Request, res: Response) => {
    try {
        const flights = await Flight.find();
        res.status(200).send(flights); 
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'Unknown error occurred' });
        }
    }
};

// Fetch a flight by its ID
const getByID = async (req: Request, res: Response) => {
    const flightId = req.params.id;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) {
            return res.status(404).send({ message: 'Flight not found' });
        }
        res.status(200).send(flight); 
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'Unknown error occurred' });
        }
    }
};

// Remove a flight by its ID
const remove = async (req: Request, res: Response) => {
    const flightId = req.params.id;
    try {
        await Flight.findByIdAndDelete(flightId);
        res.status(204).send(); 
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'Unknown error occurred' });
        }
    }
};

export default { get, getByID, create, remove };
