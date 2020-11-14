import axios from "axios";
import {
  VENDEDOR_LIST_REQUEST,
  VENDEDOR_LIST_SUCCESS,
  VENDEDOR_LIST_FAIL,
  VENDEDOR_DETAILS_REQUEST,
  VENDEDOR_DETAILS_SUCCESS,
  VENDEDOR_DETAILS_FAIL,
} from "../constants/vendedorConstants";

export const listarVendedores = () => async (dispatch) => {
  try {
    dispatch({ type: VENDEDOR_LIST_REQUEST });

    const { data } = await axios.get("/api/vendedores");

    dispatch({
      type: VENDEDOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENDEDOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listVendedorDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: VENDEDOR_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/vendedores/${id}`);

    dispatch({
      type: VENDEDOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENDEDOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
