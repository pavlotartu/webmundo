// Amount.tsx
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
      setQuantity(1);
    }
  };

  return (
    <div className="product-quantity-input">
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          type="text"
          className="form-control text-center"
          value={quantity}
          readOnly
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
        disabled={selectedProductId === undefined}
      >
        Agregar
      </button>
    </div>
  );
};

export default Amount;
