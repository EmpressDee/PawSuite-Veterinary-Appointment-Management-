import express from "express";
import { getAllPets, getPetById, createPet, deletePet, updatePet} from "../controllers/petController.js";

const router = express.router();

