import {
  VENDEDOR_DETAILS_FAIL,
  VENDEDOR_DETAILS_REQUEST,
  VENDEDOR_DETAILS_SUCCESS,
  VENDEDOR_LIST_FAIL,
  VENDEDOR_LIST_REQUEST,
  VENDEDOR_LIST_SUCCESS,
} from "../constants/vendedorConstants";

export const vendedorListReducer = (state = { vendedores: [] }, action) => {
  switch (action.type) {
    case VENDEDOR_LIST_REQUEST:
      return { loading: true, vendedores: [] };
    case VENDEDOR_LIST_SUCCESS:
      return { loading: false, vendedores: action.payload };
    case VENDEDOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const vendedorDetailsReducer = (
  state = { vendedor: { clientes: [] } },
  action
) => {
  switch (action.type) {
    case VENDEDOR_DETAILS_REQUEST:
      return { ...state, loading: true };
    case VENDEDOR_DETAILS_SUCCESS:
      return { loading: false, vendedor: action.payload };
    case VENDEDOR_DETAILS_FAIL:
      return { loading: false, vendedor: action.payload };
    default:
      return state;
  }
};
