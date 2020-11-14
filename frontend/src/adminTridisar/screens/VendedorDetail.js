import React, { useEffect } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import MenuSide from "../../components/MenuSide";
import { listVendedorDetail } from "../../actions/vendedorActions";
import { LinkContainer } from "react-router-bootstrap";

const VendedorDetail = ({ match }) => {
  const dispatch = useDispatch();

  const vendedorDetail = useSelector((state) => state.vendedorDetail);
  const { loading, error, vendedor } = vendedorDetail;

  useEffect(() => {
    dispatch(listVendedorDetail(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <MenuSide />
        </Col>
        <Col md={7}>
          <Container>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <>
                <h1>{vendedor.name}</h1>
                <Form>
                  <Form.Group as={Row} controlId='formHorizontalEmail'>
                    <Form.Label column sm={2}>
                      Numero de identificacion
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type='text'
                        placeholder={vendedor.idNumber}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Nombre
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='text' placeholder={vendedor.name} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Email
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='email' placeholder={vendedor.email} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Dirección de residencia
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type='text'
                        placeholder={vendedor.addressResidence}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Correo electronico
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='text' placeholder={vendedor.email} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type='submit'>Sign in</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </>
            )}
          </Container>
        </Col>
        <Col md={3}>
          <h3>Clientes </h3>
          {vendedor.clientes ? (
            vendedor.clientes.map((cliente) => (
              <ListGroup className='my-3' key={cliente._id}>
                <LinkContainer to={`/admin/clientes/${cliente.cliente}`}>
                  <ListGroup.Item action variant='dark'>
                    {cliente.businessName} - {cliente.name}
                  </ListGroup.Item>
                </LinkContainer>
              </ListGroup>
            ))
          ) : (
            <Message>No Cuenta con clientes</Message>
          )}
        </Col>
      </Row>
    </>
  );
};

export default VendedorDetail;
