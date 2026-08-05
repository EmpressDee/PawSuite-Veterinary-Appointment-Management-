import express from "express";
import { getAllPets, getPetById, createPet, deletePet, updatePet} from "../controllers/petController.js";

const router = express.router();

router.get("/", getAllPets);
router.get("/:id", getPetById);
router.post("/", createPet);
router.patch("/:id", updatePet);
router.delete("/:id", deletePet);

export default router;