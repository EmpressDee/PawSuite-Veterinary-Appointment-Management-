import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, 
    required: true, 
    trim: true, 
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"] },
  phone: {
    type: String,
    required: true,
    trim: true,

  },
});

clientSchema.index({ lastName: 1, firstName: 1 });

export default mongoose.model("Client, clientSchema");
