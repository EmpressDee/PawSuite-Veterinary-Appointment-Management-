import express from "express";
import { getAllAppointments, getApptById, createAppt, updateAppt, deleteAppt } from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/", getAllAppointments);
router.get("/:id", getApptById);
router.post("/", createAppt);
router.patch("/:id", updateAppt);
router.delete("/:id", deleteAppt);

export default router;