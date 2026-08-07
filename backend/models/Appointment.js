import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    date: { 
      type: Date, 
      required: true 
    },
    reason: { 
      type: String, 
      required: true, 
      trim: true
     },
    status: {
      type: String,
      enum: ["Planned", "Confirmed", "Cancelled"],
      default: "Planned",
    },
    notes: { 
      type: String,
      trim: true 
      },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    visitType: {
      type: String,
      enum: ["Wellness/Vaccines", "Sick", "Recheck", "Nurse"]
    }
  },
  { timestamps: true },
);

appointmentSchema.index({ date: 1 });

export default mongoose.model("Appointment", appointmentSchema);
