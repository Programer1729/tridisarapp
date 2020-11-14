import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const MenuSide = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {userInfo && userInfo.isAdmin && (
        <ListGroup>
          <LinkContainer to='/admin/home'>
            <ListGroup.Item action variant='dark'>
              Home
            </ListGroup.Item>
          </LinkContainer>
          <LinkContainer to='/admin/clientes'>
            <ListGroup.Item action variant='dark'>
              Clientes
            </ListGroup.Item>
          </LinkContainer>
          <LinkContainer to='/admin/pedidos'>
            <ListGroup.Item action variant='dark'>
              Pedidos
            </ListGroup.Item>
          </LinkContainer>
          <LinkContainer to='/admin/vendedores'>
            <ListGroup.Item action variant='dark'>
              Vendedores
            </ListGroup.Item>
          </LinkContainer>
          <LinkContainer to='/admin/productos'>
            <ListGroup.Item action variant='dark'>
              Productos
            </ListGroup.Item>
          </LinkContainer>
        </ListGroup>
      )}
    </>
  );
};

export default MenuSide;
