//logic for CRUD goes here

import Pet from "./models/Pet.js";

//GET
export const getAllPets = async (req,res,next) => {
    try{
        const pets = await Pet.find();
        res.status(200).json(pets);
    }catch (err) {
        next(err);
    }
}

// GET id
export const getPetById = async (req,res,next) => {
    try {
        const petId = await Pet.findById(req.params.id)
        if (!pet) {
            return res.status(404).json({ message: "Not Found"})
        }
        res.status(200).json(petId);
    } catch (err) {
        next(err);
    }
}

//POST

export const createPet = async (req,res,next) => {
    try {
        const newPet = await Pet.create(req.body);
        res.status(201).json(newPet);
    } catch (err) {
        next(err);
    }
}
