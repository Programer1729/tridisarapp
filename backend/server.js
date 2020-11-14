import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productoRoutes from "./routes/productoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import vendedorRoutes from "./routes/vendedorRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("API is running"));

//Routes
app.use("/api/clientes", clienteRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vendedores", vendedorRoutes);
app.use("/api/pedidos", pedidoRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(
  PORT,
  console.log(`Server running ${ENV} on port ${PORT}`.yellow.bold)
);
