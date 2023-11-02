import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import { Article } from "./Key";
import Send from "./Send";

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
  const [showSendModal, setShowSendModal] = useState(false);

  const handleCloseSendModal = () => {
    setShowSendModal(false);
  };

  const handleCloseCartModal = () => {
    setShowSendModal(true);
    closeModal();
  };

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCartItems = [...cartItems];
    const newQuantity = parseInt(event.target.value);

    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updatedCartItems[index].quantity = newQuantity;
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
    <div>
      <Modal show={showModal} onHide={closeModal} dialogClassName="custom-modal-width modal-md modal-lg modal-xl">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}> <strong>Carrito de Compras</strong></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="table-responsive">
            <Table striped hover className="responsive-table">
              <thead>
                <tr style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                  <th className="text-center">Código</th>
                  <th className="text-center">Imagen</th>
                  <th className="producto col-md-8">Producto</th>
                  <th className="cantidad col-md-2 text-center">Cantidad</th>
                  <th className="text-center">Precio</th>
                  <th className=" text-center">Total</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="align-middle text-end text-center">{item.id}</td>
                    <td style={{
                      position: "relative",
                      verticalAlign: "middle",
                      width: "100px",
                      height: "100px"
                    }}>
                      <div style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)"
                      }}>
                        <img className="img-fluid image-hover border rounded img-thumbnail"
                          src={item.image}
                          alt={item.name || "Nombre no disponible"}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }} />
                      </div>
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle text-end">
                      <div className="product-quantity-input">
                        <div className="input-group mb-3">
                          <button
                            className="btn btn btn-outline-secondary btn-sm"
                            type="button"
                            onClick={() => handleDecrementQuantity(index)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="form-control text-center"
                            value={item.quantity}
                            onChange={(e) => handleInputChange(e, index)}
                            id={`quantity-${item.id}`}
                          />
                          <button
                            className="btn btn btn-outline-secondary btn-sm"
                            type="button"
                            onClick={() => handleIncrementQuantity(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle text-center" style={{
                      width: "100%",
                      height: "100%",
                    }}>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td className="align-middle text-end" style={{
                      width: "100%",
                      height: "100%",
                    }}>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td className="align-middle text-center">
                      <button
                        className="btn border-0"
                        onClick={() => handleRemoveFromCart(index)}
                        style={{ fontSize: '20px' }}
                      >
                        <i className="bi bi-trash"></i> <img
                          src="https://firebasestorage.googleapis.com/v0/b/mundoaventura-723d7.appspot.com/o/src_img%2Ficon%2Fbotonx.png?alt=media&token=2647e2dd-dd07-4b0a-a18a-64abb2963d98"
                          style={{ width: '35px', height: 'auto' }}
                          alt="Eliminar"
                          className="hover-effect"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot >
                <tr>
                  <td colSpan={5}></td>
                  <td colSpan={2} className="col-2" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                    <div className="d-flex justify-content-between">
                      <span><strong>Total: ${calculateTotal().toFixed(2)}</strong></span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {cartItems.length > 0 && (
            <button className="btn btn-danger text-white ms-auto" onClick={handleEmptyCart} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
              Vaciar Carrito
            </button>
          )}

          {cartItems.length > 0 && (
            <Button variant="primary" onClick={handleCloseCartModal} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontStyle: 'italic' }}>
              Realizar Compra
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Send
        showModal={showSendModal}
        closeModal={handleCloseSendModal}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Carrito;