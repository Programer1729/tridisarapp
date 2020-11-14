import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Loader from "../components/Loader";
import MenuSide from "../components/MenuSide";
import Message from "../components/Message";

function ProfileScreen({ history }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [history, userInfo]);

  const submitHandler = () => {};

  return (
    <>
      <Header />
      <Row>
        <Col md={2}>
          <MenuSide />
        </Col>
        <Col md={10}>
          <Container>
            <h1>Perfil de usuario</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' as={Row}>
                  <Form.Label column md={2}>
                    Nombre
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      type='name'
                      placeholder='Enter name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group controlId='name' as={Row}>
                  <Form.Label column md={2}>
                    Correo Electronico
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      type='name'
                      placeholder='Enter name'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Col>
                </Form.Group>
              </Form>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default ProfileScreen;
