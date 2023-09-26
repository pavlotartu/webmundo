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
    const cantidadesGuardadas = localStorage.getItem(
      "cantidadesArticulosCarrito"
    );
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
    const cantidades: { [key: number]: number } = {};
    updatedCartItems.forEach((item) => {
      cantidades[item.id] = item.quantity;
    });
    localStorage.setItem(
      "cantidadesArticulosCarrito",
      JSON.stringify(cantidades)
    );
  };

  return (
    <Modal show={showModal} onHide={closeModal} dialogClassName="modal-lg">
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
        <button className="btn btn-danger ms-auto" onClick={handleEmptyCart}>
        🗑️ Vaciar Carrito
        </button>
      </Modal.Header>

      <Modal.Body>
        <div className="table-responsive">
          <Table striped hover className="responsive-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Imagen</th>
                <th className="col-md-4">Producto</th>
                <th className="col-md-2 text-center">Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="align-middle text-end">{item.id}</td>
                  <td style={{
                    position: "relative",
                    verticalAlign: "middle",
                    height: "100px"
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)"
                    }}>
                      <img
                        src={item.image}
                        alt={item.name || "Nombre no disponible"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </td>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle text-end">
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
                  <td className="align-middle text-end">${item.price}</td>
                  <td className="align-middle text-end">${item.price * (item.quantity || 1)}</td>
                  <td className="align-middle text-center">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemoveFromCart(index)}
                      style={{ fontSize: '20px' }}
                    >
                      <i className="bi bi-trash"></i> 🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}></td>
                <td className="col-2">
                  <div className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </td>
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
