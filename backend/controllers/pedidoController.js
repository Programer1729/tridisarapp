import asyncHandler from "express-async-handler";
import Pedido from "../models/pedidoModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getPedidos = asyncHandler(async (req, res) => {
  const pedidos = await Pedido.find({});
  res.json(pedidos);
});

const getPedidoById = asyncHandler(async (req, res) => {
  const pedido = await Pedido.findById(req.params.id);

  if (pedido) {
    res.json(pedido);
  } else {
    res.status(404);
    throw new Error("Pedido not found");
  }
});

export { getPedidos, getPedidoById };
