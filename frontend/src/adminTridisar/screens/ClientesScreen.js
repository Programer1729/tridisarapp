import React, { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import MenuSide from "../../components/MenuSide";
import { listarClientes } from "../../actions/clienteActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const ClientesScreen = () => {
  const dispatch = useDispatch();

  const listClientes = useSelector((state) => state.listClientes);
  const { loading, error, clientes } = listClientes;

  useEffect(() => {
    dispatch(listarClientes());
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
            <h1>Clientes</h1>
            {error ? (
              <Message variant='danger'>{error}</Message>
            ) : loading ? (
              <Loader />
            ) : (
              <ListGroup variant='flush'>
                {clientes &&
                  clientes.map((cliente) => (
                    <Link
                      to={`/admin/clientes/${cliente._id}`}
                      key={cliente._id}
                    >
                      <ListGroup.Item>
                        {cliente.businessName} - {cliente.businessAddress} -{" "}
                        {cliente.name}
                      </ListGroup.Item>
                    </Link>
                  ))}
              </ListGroup>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default ClientesScreen;
