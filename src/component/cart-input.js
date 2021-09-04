import React, { useEffect, useState } from "react";

export default function CartInput(props) {
  const { submit, qty } = props;
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(qty || 0);
  }, [qty]);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value > 0) setValue(value - 1);
  };
  const handleChange = (e) => {
    setValue(parseInt(e.target.value, 10));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(value);
  };
  return (
    <div id="cart-input">
      <p>Quantity:</p>
      <form id="quantity-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <button
            type="button"
            id="dec-button"
            name="decrement"
            onClick={handleDecrement}
          >
            &#8722;
          </button>
          <input
            type="number"
            value={value}
            name="quantity"
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="inc-button"
            name="increment"
            onClick={handleIncrement}
          >
            &#43;
          </button>
        </div>
        <button type="submit" id="submit-button">
          {qty > 0 ? "Update" : "Add to cart"}
        </button>
      </form>
    </div>
  );
}
