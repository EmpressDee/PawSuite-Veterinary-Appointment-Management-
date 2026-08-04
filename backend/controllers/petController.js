//logic for CRUD goes here

import Pet from "./models/Pet.js";

export const getAllPets = async (req,res,next) => {
    try{
        const pets = await Pet.find();
        res.status(200).json(pets);
    }catch (err) {
        next(err);
    }
}

