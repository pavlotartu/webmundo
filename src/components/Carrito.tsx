import React, { useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { Article } from "./Key";

interface CarritoProps {
  cartItems: Article[];
  showModal: boolean;
  closeModal: () => void;
  emptyCart: () => void;
  setCartItems: (items: Article[]) => void;
}

const Carrito: React.FC<CarritoProps> = ({
  cartItems,
  showModal,
  closeModal,
  emptyCart,
  setCartItems,
}) => {

  useEffect(() => {
    const cantidadesGuardadas = localStorage.getItem("cantidadesArticulosCarrito");
    if (cantidadesGuardadas) {
      const cantidadesParseadas = JSON.parse(cantidadesGuardadas);
      const carritoActualizado = cartItems.map((item) => ({
        ...item,
        quantity: cantidadesParseadas[item.id] || item.quantity || 1,
      }));
      setCartItems(carritoActualizado);
    }
  }, []);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * (item.quantity || 1);
    });
    return total;
  };

  const handleEmptyCart = () => {
    emptyCart();
    localStorage.removeItem("cantidadesArticulosCarrito");
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  const handleIncrementQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  const handleDecrementQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  const handleRemoveFromCart = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
    localStorage.removeItem("cartItems");
  };

  const updateLocalStorage = (updatedCartItems: Article[]) => {
    const cantidades = updatedCartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    localStorage.setItem("cantidadesArticulosCarrito", JSON.stringify(cantidades));
  };

  return (
    <Modal show={showModal} onHide={closeModal} dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
        <button className="btn btn-danger" onClick={handleEmptyCart}>
          Vaciar Carrito
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive">
          <Table striped bordered hover className="responsive-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Imagen</th>
                <th className="col-md-4">Producto</th>
                <th className="col-md-2">Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name || "Nombre no disponible"}
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <div className="product-quantity-input">
                      <div className="input-group mb-3">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => handleDecrementQuantity(index)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={item.quantity}
                          readOnly
                          id={`quantity-${item.id}`}
                        />

                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={() => handleIncrementQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>${item.price * (item.quantity || 1)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      <i className="bi bi-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}></td>
                <td>Total: ${calculateTotal()}</td>
              </tr>
            </tfoot>
          </Table>
        </div>
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