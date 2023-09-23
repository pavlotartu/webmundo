import React from "react";
import { Modal, Table } from "react-bootstrap";

const Carrito: React.FC<CarritoProps> = ({ cartItems, showModal, closeModal }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * (item.quantity || 1);
    });
    return total;
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Su carrito está vacío.</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Código</th>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th> {/* Nueva columna Total */}
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name ?? "Nombre no disponible"}
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * (item.quantity || 1)}</td> 
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}></td>
                <td>Total: ${calculateTotal()}</td>
              </tr>
            </tfoot>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={closeModal}>
          Cerrar
        </button>
        {cartItems.length > 0 && (
          <button className="btn btn-primary">Realizar Compra</button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default Carrito;
