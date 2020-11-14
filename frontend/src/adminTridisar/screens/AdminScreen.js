import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../components/Header";
import MenuSide from "../../components/MenuSide";

const AdminScreen = () => {
  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <MenuSide />
        </Col>
        <Col md={10}>
          <Container>
            <h1>Welcome Admin Tridisar</h1>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default AdminScreen;
