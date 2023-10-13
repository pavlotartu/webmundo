import React, { useState } from "react";

interface AmountProps {
  onAddToCart: (selectedProductId: number, quantity: number) => void;
  selectedProductId: number;
}

const Amount: React.FC<AmountProps> = ({ onAddToCart, selectedProductId }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedProductId !== undefined) {
      onAddToCart(selectedProductId, quantity);
    }
  };

  return (

    <div className="product-quantity-input">
      <div className="input-group m-2">
        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
          onClick={handleDecrement}>
          -
        </button>
        <input
          type="text"
          className="form-control text-center p-2"
          value={quantity}
          readOnly
          id={`quantity-input-${selectedProductId}`}
          name={`quantity-input-${selectedProductId}`}/>

        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
          onClick={handleIncrement}>
          +
        </button>
      </div>
      <button
        className="btn btn-sm m-auto border-0 "
        onClick={handleAddToCart}
        disabled={selectedProductId === undefined}
      >
        <img
          src="../src/assets/img/icon/agregar.png"
          style={{ width: '30px', height: 'auto' }}
          alt="Tienda"
          className="hover-effect"
        />
      </button>
    </div>
  );
};

export default Amount;