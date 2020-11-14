import express from "express";
import {
  getVendedores,
  getVendedorById,
} from "../controllers/vendedorController.js";
const router = express.Router();

router.route("/").get(getVendedores);

router.route("/:id").get(getVendedorById);

export default router;
