import Client from "../models/Client.js";

export const getAllClients = async (req,res,next) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        next(err);
    }
}