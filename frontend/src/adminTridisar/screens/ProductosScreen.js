import React, { useEffect } from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import MenuSide from "../../components/MenuSide";
import { listProducts } from "../../actions/productActions";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import Product from "../../components/Product";

const ProductosScreen = () => {
  const dispatch = useDispatch();

  const listProductos = useSelector((state) => state.listProductos);
  const { loading, error, products } = listProductos;

  useEffect(() => {
    dispatch(listProducts());
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
            <h1>Productos</h1>
            {error ? (
              <Message variant='danger'>{error}</Message>
            ) : loading ? (
              <Loader />
            ) : (
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default ProductosScreen;
