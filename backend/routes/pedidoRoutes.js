import express, { Router } from "express";
import { getPedidos, getPedidoById } from "../controllers/pedidoController.js";

const router = express.Router();

router.route("/").get(getPedidos);
router.route("/:id").get(getPedidoById);

export default router;
