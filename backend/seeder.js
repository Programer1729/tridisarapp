import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import clientes from "./data/clientes.js";
import productos from "./data/productos.js";
import vendedores from "./data/vendedores.js";
import Cliente from "./models/clienteModel.js";
import Producto from "./models/productoModel.js";
import Vendedor from "./models/vendedorModel.js";
import connectDB from "./config/db.js";
import bcrypt from "bcryptjs";
import User from "./models/userModel.js";
import Pedido from "./models/pedidoModel.js";
import rejected from "./data/rejected.js";
import Rejected from "./models/rejectedModel.js";
import moment from "moment";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Cliente.deleteMany();
    await Producto.deleteMany();
    await Vendedor.deleteMany();
    await User.deleteMany();
    await Pedido.deleteMany();
    await Rejected.deleteMany();

    const createdProductos = await Producto.insertMany(productos);

    const createdVendedores = await Vendedor.insertMany(vendedores);
    const createdClientes = await Cliente.insertMany(clientes);

    createdClientes[0].vendedor.name = createdVendedores[0].name;
    createdClientes[0].vendedor.id = createdVendedores[0]._id;
    await createdClientes[0].save();

    createdClientes[1].vendedor.name = createdVendedores[1].name;
    createdClientes[1].vendedor.id = createdVendedores[1]._id;
    await createdClientes[1].save();

    createdClientes[2].vendedor.name = createdVendedores[2].name;
    createdClientes[2].vendedor.id = createdVendedores[2]._id;
    await createdClientes[2].save();

    createdVendedores[0].clientes.push({
      name: createdClientes[0].name,
      businessName: createdClientes[0].businessName,
      businessAddress: createdClientes[0].businessAddress,
      cliente: createdClientes[0]._id,
    });

    await createdVendedores[0].save();

    createdVendedores[1].clientes.push({
      name: createdClientes[1].name,
      businessName: createdClientes[1].businessName,
      businessAddress: createdClientes[1].businessAddress,
      cliente: createdClientes[1]._id,
    });

    await createdVendedores[1].save();

    createdVendedores[2].clientes.push({
      name: createdClientes[2].name,
      businessName: createdClientes[2].businessName,
      businessAddress: createdClientes[2].businessAddress,
      cliente: createdClientes[2]._id,
    });

    await createdVendedores[2].save();

    /**
     * PEDIDO 1 - PENDIENTE
     */
    const pedido1 = await Pedido.create({
      cliente: {
        name: createdClientes[0].name,
        businessName: createdClientes[0].businessName,
        cliente: createdClientes[0]._id,
      },
      vendedor: {
        name: createdVendedores[0].name,
        idNumber: createdVendedores[0].idNumber,
        vendedor: createdVendedores[0]._id,
      },
      orderItems: [
        {
          name: createdProductos[0].name,
          qty: 2,
          price: 2 * createdProductos[0].price,
          product: createdProductos[0]._id,
        },
        {
          name: createdProductos[1].name,
          qty: 3,
          price: 3 * createdProductos[1].price,
          product: createdProductos[1]._id,
        },
        {
          name: createdProductos[2].name,
          qty: 4,
          price: 4 * createdProductos[2].price,
          product: createdProductos[2]._id,
        },
      ],
      addressDelivery: createdClientes[0].businessAddress,
      totalPrice:
        2 * createdProductos[0].price +
        3 * createdProductos[1].price +
        4 * createdProductos[2].price,
      createdAt: moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    });

    createdProductos[0].countInStock -= 2;
    await createdProductos[0].save();

    createdProductos[1].countInStock -= 3;
    await createdProductos[1].save();

    createdProductos[2].countInStock -= 4;
    await createdProductos[2].save();

    /**
     * PEDIDO 2 (pago y entregado)
     */
    const pedido2 = await Pedido.create({
      cliente: {
        name: createdClientes[1].name,
        businessName: createdClientes[1].businessName,
        cliente: createdClientes[1]._id,
      },
      vendedor: {
        name: createdVendedores[1].name,
        idNumber: createdVendedores[1].idNumber,
        vendedor: createdVendedores[1]._id,
      },
      orderItems: [
        {
          name: createdProductos[3].name,
          qty: 2,
          price: 2 * createdProductos[3].price,
          product: createdProductos[3]._id,
        },
        {
          name: createdProductos[4].name,
          qty: 3,
          price: 3 * createdProductos[4].price,
          product: createdProductos[4]._id,
        },
        {
          name: createdProductos[0].name,
          qty: 4,
          price: 4 * createdProductos[0].price,
          product: createdProductos[0]._id,
        },
      ],
      addressDelivery: createdClientes[1].businessAddress,
      totalPrice:
        2 * createdProductos[3].price +
        3 * createdProductos[4].price +
        4 * createdProductos[0].price,
      isPaid: true,
      paidAt: Date.now(),
      isDelivered: true,
      deliveredAt: Date.now(),
      createdAt: moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    });

    createdProductos[3].countInStock -= 2;
    await createdProductos[3].save();

    createdProductos[4].countInStock -= 3;
    await createdProductos[4].save();

    createdProductos[0].countInStock -= 4;
    await createdProductos[0].save();

    const createdRejected = await Rejected.insertMany(rejected);

    /**
     * PEDIDO 3 (RECHAZADO)
     */
    const pedido3 = await Pedido.create({
      cliente: {
        name: createdClientes[2].name,
        businessName: createdClientes[2].businessName,
        cliente: createdClientes[2]._id,
      },
      vendedor: {
        name: createdVendedores[2].name,
        idNumber: createdVendedores[2].idNumber,
        vendedor: createdVendedores[2]._id,
      },
      orderItems: [
        {
          name: createdProductos[2].name,
          qty: 2,
          price: 2 * createdProductos[2].price,
          product: createdProductos[2]._id,
        },
        {
          name: createdProductos[1].name,
          qty: 3,
          price: 3 * createdProductos[1].price,
          product: createdProductos[1]._id,
        },
        {
          name: createdProductos[4].name,
          qty: 4,
          price: 4 * createdProductos[4].price,
          product: createdProductos[4]._id,
        },
      ],
      addressDelivery: createdClientes[2].businessAddress,
      totalPrice:
        2 * createdProductos[2].price +
        3 * createdProductos[1].price +
        4 * createdProductos[4].price,
      isRejected: true,
      rejected: {
        name: createdRejected[0].name,
        annotation: "el cliente cuenta con mercancia",
        rejected: createdRejected[0]._id,
      },
      createdAt: moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    });

    createdProductos[2].countInStock -= 2;
    await createdProductos[2].save();

    createdProductos[1].countInStock -= 3;
    await createdProductos[1].save();

    createdProductos[4].countInStock -= 4;
    await createdProductos[4].save();

    const user = await User.create({
      name: "admin tridisar",
      email: "admin@tridisar.com",
      password: 123456,
      isAdmin: true,
    });

    const usersVendedores = createdVendedores.map((vendedor) => {
      return {
        idNumber: vendedor._id,
        name: vendedor.name,
        email: vendedor.email,
        password: 123456,
        isVendedor: true,
      };
    });

    await User.insertMany(usersVendedores);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
