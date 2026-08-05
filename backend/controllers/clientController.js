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

export const createClient = async (req,res,next) => {
    try {
        const newClient = await Client.create(req.body);
        res.status(201).json(newClient);
    } catch (err) {
        next(err);
    }
}


export const updateClient = async (req,res,next) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!updatedClient) {
            return res.status(404).json({ message: "Not found"})
        }
        res.status(200).json(updatedClient);
    } catch (err) {
        next(err);
    }
}

export const deleteClient = async (req,res,next) => {
    try {
        const deletedClient = await Client.findByIdAndDelete(req.params.id);
        if (!deletedClient) {
            return res.status(404).json({ message: "Not found"});
        }
        res.status(200).json({ message: "Successfully deleted", id: req.params.id });
    } catch (err) {
        next(err);
    }
}