import asyncHandler from "express-async-handler";
import Vendedor from "../models/vendedorModel.js";

// @desc    Fetch all vendedores
// @route   GET /api/vendedores
// @access  Public
const getVendedores = asyncHandler(async (req, res) => {
  const vendedor = await Vendedor.find({});
  res.json(vendedor);
});

/**
 * @description     Fetch single products
 * @route           GET /api/products/:id
 * @access          Public
 */
const getVendedorById = asyncHandler(async (req, res) => {
  const vendedor = await Vendedor.findById(req.params.id);
  if (vendedor) {
    res.json(vendedor);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getVendedores, getVendedorById };
