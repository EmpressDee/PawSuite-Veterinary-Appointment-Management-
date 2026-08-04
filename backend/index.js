import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connection.js"


const app = express ();
const port = 3000;

dotenv.config();
connectDB();

app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});