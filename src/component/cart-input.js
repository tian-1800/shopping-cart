import React from "react";

export default function CartInput() {
    const handleBlur = () => {

    }
    const handleSubmit = () => {
        
    }
  return (
    <div className="cart-input">
      <p>Quantity:</p>
      <form id="quantity-form" onSubmit={handleSubmit}>
        <div>
          <button type="button" className="inc-dec-item" name="decrement">
            &#8722;
          </button>
          <input type="number" defaultValue="0" name="quantity" onBlur={handleBlur}/>
          <button type="button" className="inc-dec-item" name="increment">
            &#43;
          </button>
        </div>
        <button type="submit" id="submit-button">
          Add to cart
        </button>
      </form>
    </div>
  );
}
