import mongoose from "mongoose";
import moment from "moment";

const pedidoSchema = mongoose.Schema(
  {
    cliente: {
      name: { type: String, required: true },
      businessName: { type: String, required: true },
      cliente: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Cliente",
      },
    },
    vendedor: {
      name: { type: String, required: true },
      idNumber: { type: String, required: true },
      vendedor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Vendedor",
      },
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    addressDelivery: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    isRejected: {
      type: Boolean,
      required: true,
      default: false,
    },
    rejected: {
      name: { type: String },
      annotation: { type: String },
      rejected: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rejected",
      },
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

pedidoSchema.methods.return = function () {
  const createdAt = moment(this.createdAt).format("ddd, hA");
  this.createdAt = createdAt;
};

const Pedido = mongoose.model("Pedido", pedidoSchema);

export default Pedido;
