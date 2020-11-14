import mongoose from "mongoose";

const rejectedSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Rejected = mongoose.model("Rejected", rejectedSchema);

export default Rejected;
