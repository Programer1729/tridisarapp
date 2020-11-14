import React, { useEffect } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import MenuSide from "../../components/MenuSide";
import { listarVendedores } from "../../actions/vendedorActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

const VendedorScreen = () => {
  const dispatch = useDispatch();

  const listVendedores = useSelector((state) => state.listVendedores);
  const { loading, error, vendedores } = listVendedores;

  useEffect(() => {
    dispatch(listarVendedores());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <MenuSide />
        </Col>
        <Col md={7}>
          <Container>
            <h1>Vendedores</h1>
            {error ? (
              <Message variant='danger'>{error}</Message>
            ) : loading ? (
              <Loader />
            ) : (
              <ListGroup variant='flush'>
                {vendedores &&
                  vendedores.map((vendedor) => (
                    <Link
                      to={`/admin/vendedores/${vendedor._id}`}
                      key={vendedor._id}
                    >
                      <ListGroup.Item>
                        {vendedor.idNumber} - {vendedor.name} - {vendedor.email}
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

export default VendedorScreen;
