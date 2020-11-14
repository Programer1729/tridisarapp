import {
  PEDIDO_DETAILS_FAIL,
  PEDIDO_DETAILS_REQUEST,
  PEDIDO_DETAILS_SUCCESS,
  PEDIDO_LIST_FAIL,
  PEDIDO_LIST_REQUEST,
  PEDIDO_LIST_SUCCESS,
} from "../constants/pedidoConstants";
import axios from "axios";

export const listarPedidos = () => async (dispatch) => {
  try {
    dispatch({ type: PEDIDO_LIST_REQUEST });

    const { data } = await axios.get("/api/pedidos");

    dispatch({
      type: PEDIDO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PEDIDO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPedidoDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PEDIDO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/pedidos/${id}`);

    dispatch({
      type: PEDIDO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PEDIDO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
