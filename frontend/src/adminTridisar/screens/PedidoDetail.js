import React, { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { listPedidoDetail } from "../../actions/pedidoActions";
import Message from "../../components/Message";
import MenuSide from "../../components/MenuSide";

const PedidoDetail = ({ match }) => {
  const dispatch = useDispatch();

  const pedidoDetail = useSelector((state) => state.pedidoDetail);
  const { pedido } = pedidoDetail;

  useEffect(() => {
    dispatch(listPedidoDetail(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <MenuSide />
        </Col>
        <Col md={10}>
          <Container>
            <h1>Pedido #{pedido._id}</h1>
            <Row>
              <Col md={7}>
                <p>
                  <strong>Cliente: </strong> {pedido.cliente.name}
                </p>
                <p>
                  <strong>Negocio: </strong> {pedido.cliente.businessName}
                </p>
                <p>
                  <strong>Vendedor: </strong> {pedido.vendedor.name}
                </p>
                <p>
                  <strong>Fecha toma de pedido: </strong> {pedido.createdAt}
                </p>
                {pedido.isDelivered ? (
                  <>
                    <Message variant='success'>
                      Entregado en {pedido.addressDelivery}
                    </Message>
                    <p>
                      <strong>Fecha de pago: </strong> {pedido.paidAt}
                    </p>
                    <p>
                      <strong>Fecha de entrega: </strong> {pedido.paidAt}
                    </p>
                  </>
                ) : pedido.isRejected ? (
                  <>
                    <Message variant='danger'>Pedido Rechazado</Message>
                    <p>
                      <strong>Motivo: </strong> {pedido.rejected.name}
                    </p>
                    <p>
                      <strong>Anotación: </strong> {pedido.rejected.annotation}
                    </p>
                  </>
                ) : (
                  <Message>No ha sido entregado</Message>
                )}
              </Col>
              <Col md={5}>
                <h2>Lista de items</h2>
                <ListGroup variant='flush'>
                  {pedido.orderItems.length === 0 ? (
                    <Message>No hay items</Message>
                  ) : (
                    pedido.orderItems.map((item) => (
                      <ListGroup.Item key={item.producto}>
                        <Row>
                          <Col md={8}>{item.name}</Col>
                          <Col md={4}>{item.qty}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))
                  )}
                  <h3>${pedido.totalPrice}</h3>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default PedidoDetail;
