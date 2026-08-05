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

//PUT 
export const updatePet = async (req,res,next) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!updatedPet) {
            return res.status(404).json({ message: "Not found"})
        }
        res.status(200).json(updatedPet);
    } catch (err) {
        next(err);
    }
}

export const deletePet = async (req,res,next) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id);
        if (!deletedPet) {
            return res.status(404).json({ message: "Not found"});
        }
        res.status(200).json({ message: "Successfully deleted", id: req.params.id });
    } catch (err) {
        next(err);
    }
}