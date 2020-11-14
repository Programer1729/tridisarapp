import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  clienteListReducer,
  clienteDetailsReducer,
} from "./reducers/clienteReducer";
import {
  vendedorListReducer,
  vendedorDetailsReducer,
} from "./reducers/vendedorReducer";
import {
  pedidosListReducer,
  pedidoDetailsReducer,
} from "./reducers/pedidoReducer";

import { productListReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  listClientes: clienteListReducer,
  clienteDetail: clienteDetailsReducer,
  listVendedores: vendedorListReducer,
  vendedorDetail: vendedorDetailsReducer,
  listPedidos: pedidosListReducer,
  pedidoDetail: pedidoDetailsReducer,
  listProductos: productListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
