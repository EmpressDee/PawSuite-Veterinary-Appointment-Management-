import Appointment from "../models/Appointment.js";

export const getAllAppointments = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        const filter = start && end ? { date: { $gte: start, $lte: end } } : {};

        const appts = await Appointment.find(filter).populate('client pet');
        res.status(200).json(appts);
    } catch (err) {
        next(err);
    }
}

export const getApptById = async (req, res, next) => {
    try {
        const appt = await Appointment.findById(req.params.id).populate('client pet');
        if (!appt) {
            return res.status(404).json({ message: "Not found" });
        }
        res.status(200).json(appt);
    } catch (err) {
        next(err);
    }
}
export const createAppt = async (req,res,next) => {
    try {
        const newAppt = await Appointment.create(req.body);
        res.status(201).json(newAppt);
    } catch (err) {
        next(err);
    }
}


export const updateAppt = async (req,res,next) => {
    try {
        const updatedAppt = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if (!updatedAppt) {
            return res.status(404).json({ message: "Not found"})
        }
        res.status(200).json(updatedAppt);
    } catch (err) {
        next(err);
    }
}

export const deleteAppt = async (req,res,next) => {
    try {
        const deletedAppt = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppt) {
            return res.status(404).json({ message: "Not found"});
        }
        res.status(200).json({ message: "Successfully deleted", id: req.params.id });
    } catch (err) {
        next(err);
    }
}
