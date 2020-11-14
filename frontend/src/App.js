import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import AdminScreen from "./adminTridisar/screens/AdminScreen";
import ClientesScreen from "./adminTridisar/screens/ClientesScreen";
import PedidosScreen from "./adminTridisar/screens/PedidosScreen";
import ClienteDetail from "./adminTridisar/screens/ClienteDetail";
import VendedoresScreen from "./adminTridisar/screens/VendedoresScreen";
import VendedorDetail from "./adminTridisar/screens/VendedorDetail";
import PedidoDetail from "./adminTridisar/screens/PedidoDetail";
import ProfileScreen from "./screens/ProfileScreen";
import ProductosScreen from "./adminTridisar/screens/ProductosScreen";

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/admin/pedidos/:id' component={PedidoDetail} exact />
        <Route path='/admin/clientes/:id' component={ClienteDetail} exact />
        <Route path='/admin/vendedores/:id' component={VendedorDetail} exact />
        <Route path='/admin/clientes' component={ClientesScreen} exact />
        <Route path='/admin/vendedores' component={VendedoresScreen} exact />
        <Route path='/admin/productos' component={ProductosScreen} exact />
        <Route path='/admin/home' component={AdminScreen} exact />
        <Route path='/admin/profile' component={ProfileScreen} exact />
        <Route path='/admin/pedidos' component={PedidosScreen} exact />
        <Route path='/' component={LoginScreen} exact />
      </main>
    </Router>
  );
};

export default App;
