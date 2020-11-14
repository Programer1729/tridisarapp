import express, { Router } from "express";
import {
  getClientes,
  getClienteById,
} from "../controllers/clienteController.js";

const router = express.Router();

router.route("/").get(getClientes);
router.route("/:id").get(getClienteById);

export default router;
