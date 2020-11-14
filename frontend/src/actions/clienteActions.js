import {
  CLIENTE_DETAILS_FAIL,
  CLIENTE_DETAILS_REQUEST,
  CLIENTE_DETAILS_SUCCESS,
  CLIENTE_LIST_FAIL,
  CLIENTE_LIST_REQUEST,
  CLIENTE_LIST_SUCCESS,
} from "../constants/clienteConstants";
import axios from "axios";

export const listarClientes = () => async (dispatch) => {
  try {
    dispatch({ type: CLIENTE_LIST_REQUEST });

    const { data } = await axios.get("/api/clientes");

    dispatch({
      type: CLIENTE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listClienteDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: CLIENTE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/clientes/${id}`);

    dispatch({
      type: CLIENTE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENTE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
