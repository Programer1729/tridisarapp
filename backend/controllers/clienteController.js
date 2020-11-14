import asyncHandler from "express-async-handler";
import Cliente from "../models/clienteModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getClientes = asyncHandler(async (req, res) => {
  const clientes = await Cliente.find({});
  res.json(clientes);
});

const getClienteById = asyncHandler(async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);

  if (cliente) {
    res.json(cliente);
  } else {
    res.status(404);
    throw new Error("Cliente not found");
  }
});

export { getClientes, getClienteById };
