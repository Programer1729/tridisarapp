import mongoose from "mongoose";

const vendedorSchema = mongoose.Schema(
  {
    idNumber: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    addressResidence: {
      type: String,
      required: true,
    },
    clientes: [
      {
        name: { type: String, required: true },
        businessName: { type: String, required: true },
        businessAddress: { type: String, required: true },
        cliente: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cliente",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Vendedor = mongoose.model("Vendedor", vendedorSchema);

export default Vendedor;
