import Client from "../models/Client.js";

export const getAllClients = async (req,res,next) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        next(err);
    }
}

export const getClientById = async (req,res,next) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: "Not found"});
        }
        res.status(200).json(client);
    } catch (err) {
        next(err);
    }
}