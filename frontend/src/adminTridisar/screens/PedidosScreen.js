import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import MenuSide from "../../components/MenuSide";
import { listarPedidos } from "../../actions/pedidoActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Pedidos from "../../components/Pedidos";

const PedidosScreen = () => {
  const dispatch = useDispatch();

  const listPedidos = useSelector((state) => state.listPedidos);
  const { loading, error, pedidos } = listPedidos;

  const pendientes = pedidos.filter(
    (pedido) => pedido.isDelivered === false && pedido.isRejected === false
  );
  const entregados = pedidos.filter((pedido) => pedido.isDelivered === true);
  const rechazados = pedidos.filter((pedido) => pedido.isRejected === true);

  useEffect(() => {
    dispatch(listarPedidos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <MenuSide />
        </Col>
        <Col md={10}>
          <Container>
            <h1>Pedidos</h1>
            {error ? (
              <Message variant='danger'>{error}</Message>
            ) : loading ? (
              <Loader />
            ) : (
              <>
                <Row>
                  <Col md={4}>
                    <h1>Pendientes</h1>
                    {pendientes && (
                      <Pedidos pedidos={pendientes} variant='warning' />
                    )}
                  </Col>
                  <Col md={4}>
                    <h1>Entregados</h1>
                    {entregados && (
                      <Pedidos pedidos={entregados} variant='success' />
                    )}
                  </Col>
                  <Col md={4}>
                    <h1>Rechazados</h1>
                    {rechazados && (
                      <Pedidos pedidos={rechazados} variant='danger' />
                    )}
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default PedidosScreen;
