import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { listClienteDetail } from "../../actions/clienteActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DayVisist from "../../components/DayVisist";
import MenuSide from "../../components/MenuSide";

const ClienteDetail = ({ match }) => {
  const dispatch = useDispatch();

  const clienteDetail = useSelector((state) => state.clienteDetail);
  const { loading, error, cliente } = clienteDetail;

  useEffect(() => {
    dispatch(listClienteDetail(match.params.id));
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
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <>
                <h1>{cliente.businessName}</h1>
                <Form>
                  <Form.Group as={Row} controlId='formHorizontalEmail'>
                    <Form.Label column sm={2}>
                      name
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='text' placeholder={cliente.name} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Nombre del negocio
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type='text'
                        placeholder={cliente.businessName}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Dirección del negocio
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type='text'
                        placeholder={cliente.businessAddress}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Telefono
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='text' placeholder={cliente.phone} />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
                      Correo electronico
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='text' placeholder={cliente.email} />
                    </Col>
                  </Form.Group>
                  {cliente.vendedor && (
                    <Form.Group as={Row} controlId='formHorizontalPassword'>
                      <Form.Label column sm={2}>
                        Vendedor
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control
                          type='text'
                          placeholder={cliente.vendedor.name}
                        />
                      </Col>
                    </Form.Group>
                  )}
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      Dias de visita
                    </Form.Label>
                    <div sm={10}>
                      <DayVisist days={cliente.daysVisit} />
                    </div>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      Dias de entrega
                    </Form.Label>

                    <div sm={10}>
                      <DayVisist days={cliente.daysDelivery} />
                    </div>
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
      </Row>
    </>
  );
};

export default ClienteDetail;
