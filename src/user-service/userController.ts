import { Request,Response } from "express";
import User from "./userModels.js";

const get = async (req: Request,res: Response) => {
    const users = await User.find();
    res.send(users);
};

const getByID =  async (req: Request, res: Response) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user); 
}

const create = async (req: Request,res: Response) => {
    const {name, email} = req.body;
    const user  = new User({
        name,
        email
    });
    await user.save()
    res.status(201).send(user);
}

const update =  async (req: Request,res: Response) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(userId, {name, email}, {new: true});
    if (user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user); 
}

const remove =  async (req: Request,res: Response) => {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId)
    if (user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(204).send(); 
}

export default {get, getByID, create, update, remove};