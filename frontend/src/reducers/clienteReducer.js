import {
  CLIENTE_DETAILS_FAIL,
  CLIENTE_DETAILS_REQUEST,
  CLIENTE_DETAILS_SUCCESS,
  CLIENTE_LIST_FAIL,
  CLIENTE_LIST_REQUEST,
  CLIENTE_LIST_SUCCESS,
} from "../constants/clienteConstants";

export const clienteListReducer = (state = { clientes: [] }, action) => {
  switch (action.type) {
    case CLIENTE_LIST_REQUEST:
      return { loading: true, clientes: [] };
    case CLIENTE_LIST_SUCCESS:
      return { loading: false, clientes: action.payload };
    case CLIENTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const clienteDetailsReducer = (
  state = { cliente: { vendedor: {}, daysVisit: [], daysDelivery: [] } },
  action
) => {
  switch (action.type) {
    case CLIENTE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CLIENTE_DETAILS_SUCCESS:
      return { loading: false, cliente: action.payload };
    case CLIENTE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
