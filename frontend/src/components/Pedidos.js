import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pedidos = ({ pedidos, variant }) => {
  return (
    <div>
      <ListGroup variant='flush'>
        {pedidos &&
          pedidos.map((pedido) => (
            <Link to={`/admin/pedidos/${pedido._id}`} key={pedido._id}>
              <ListGroup.Item variant={variant}>
                {pedido.createdAt} - {pedido.cliente.name} -{" "}
                {pedido.vendedor.name}
              </ListGroup.Item>
            </Link>
          ))}
      </ListGroup>
    </div>
  );
};

export default Pedidos;
