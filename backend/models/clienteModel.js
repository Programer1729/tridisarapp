import mongoose from "mongoose";

const clienteSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    businessName: {
      type: String,
      required: true,
      unique: true,
    },
    businessAddress: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    vendedor: {
      name: { type: String },
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Vendedor" },
    },
    daysVisit: [
      {
        type: Number,
        required: true,
      },
    ],
    daysDelivery: [
      {
        type: Number,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;
