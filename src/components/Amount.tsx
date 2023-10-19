import React, { useState } from "react";
import { Article } from "./Key";

interface AmountProps {
  selectedProductId: number;
  cartItems: Article[];
  setCartItems: (cartItems: Article[]) => void;
  articles: Article[];
}

const Amount: React.FC<AmountProps> = ({ selectedProductId, cartItems, setCartItems, articles }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const selectedItem = articles.find((article) => article.id === selectedProductId);
    if (selectedItem) {
      const existingItemIndex = cartItems.findIndex((item) => item.id === selectedProductId);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        setCartItems(updatedCartItems);

        const storedData = localStorage.getItem("cantidadesArticulosCarrito");
        const cantidadesArticulosCarrito = storedData ? JSON.parse(storedData) : {};

        cantidadesArticulosCarrito[selectedProductId] = updatedCartItems[existingItemIndex].quantity;
        localStorage.setItem("cantidadesArticulosCarrito", JSON.stringify(cantidadesArticulosCarrito));
      } else {
        setCartItems([...cartItems, { ...selectedItem, quantity: quantity }]);
        
        const storedData = localStorage.getItem("cantidadesArticulosCarrito");
        const cantidadesArticulosCarrito = storedData ? JSON.parse(storedData) : {};

        cantidadesArticulosCarrito[selectedProductId] = quantity;
        localStorage.setItem("cantidadesArticulosCarrito", JSON.stringify(cantidadesArticulosCarrito));
      }
    }
  };

  return (
    <div className="product-quantity-input">
      <div className="input-group m-2">
        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="form-control text-center p-2"
          value={quantity}
          onChange={handleInputChange}
          id={`quantity-input-${selectedProductId}`}
          name={`quantity-input-${selectedProductId}`}
        />
        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-sm m-auto border-0"
        onClick={handleAddToCart}
        disabled={selectedProductId === undefined}
      >
        <img
          src="../src/assets/img/icon/agregar.png" 
          style={{ width: '30px', height: 'auto' }}
          alt="Agregar al carrito"
          className="hover-effect"
        />
      </button>
    </div>
  );
};

export default Amount;
