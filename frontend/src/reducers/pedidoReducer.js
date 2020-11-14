import {
  PEDIDO_DETAILS_FAIL,
  PEDIDO_DETAILS_REQUEST,
  PEDIDO_DETAILS_SUCCESS,
  PEDIDO_LIST_FAIL,
  PEDIDO_LIST_REQUEST,
  PEDIDO_LIST_SUCCESS,
} from "../constants/pedidoConstants";

export const pedidosListReducer = (state = { pedidos: [] }, action) => {
  switch (action.type) {
    case PEDIDO_LIST_REQUEST:
      return { loading: true, pedidos: [] };
    case PEDIDO_LIST_SUCCESS:
      return { loading: false, pedidos: action.payload };
    case PEDIDO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pedidoDetailsReducer = (
  state = { pedido: { cliente: {}, vendedor: {}, orderItems: [] } },
  action
) => {
  switch (action.type) {
    case PEDIDO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PEDIDO_DETAILS_SUCCESS:
      return { loading: false, pedido: action.payload };
    case PEDIDO_DETAILS_FAIL:
      return { loading: false, pedido: action.payload };
    default:
      return state;
  }
};
