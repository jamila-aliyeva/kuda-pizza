import { useContext } from "react";
import PropTypes from "prop-types";

import { ProductContext } from "../../context/ProductContext";

const ButtonGroup = ({ id, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  return (
    <div
      className="counter"
      style={{
        padding: "8px",
        borderRadius: "6px",
        background: "var(--Light-primary, #FFEEE2)",
      }}>
      <button
        onClick={() => increaseQuantity(id)}
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          color: "#FF7010",
        }}>
        +
      </button>
      <span>{quantity} 0</span>
      <button
        onClick={() => decreaseQuantity(id)}
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
          color: "#FF7010",
        }}>
        -
      </button>
    </div>
  );
};

ButtonGroup.propTypes = {
  id: PropTypes.number,
  quantity: PropTypes.number,
};

export default ButtonGroup;
