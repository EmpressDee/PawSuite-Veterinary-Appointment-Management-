import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connection.js"
import appointmentRoute from "./routes/appointmentRoute.js";
import petRoute from "./routes/petRoute.js";
import clientRoute from "./routes/clientRoute.js";
import {errorHandler} from "./middleware/errorHandling.js"


const app = express ();
const port = 3000;

app.use(cors());

dotenv.config();
connectDB();

app.use(express.json());

// app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoute);
app.use('/api/clients',  clientRoute);
app.use('/api/pets',  petRoute);

app.use(errorHandler);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});