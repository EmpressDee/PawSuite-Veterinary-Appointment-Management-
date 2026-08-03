import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    reason: { type: String, required: true, trim: true },
    status: {
      enum: ["scheduled", "confirmed", "cancelled"],
      default: "scheduled",
    },
    notes: { type: String, trim: true },
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
  },
  { timestamps: true },
);

appointmentSchema.index({ date: 1 });

export default mongoose.model("Appointment", appointmentSchema);
