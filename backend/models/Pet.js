import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    species: { type: String, required: true, trim: true },
    breed: { type: String, trim: true },
    dateOfBirth: { type: Date },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true
    }
  },
  { timestamps: true }
);

petSchema.index({ name: 1 });
petSchema.index({ owner: 1 }); 

export default mongoose.model("Pet", petSchema);

