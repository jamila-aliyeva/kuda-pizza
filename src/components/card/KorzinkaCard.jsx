import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ButtonGroup from "../shares/ButtonGroup";

const KorzinkaCard = ({ id, image, name, price, description, quantity }) => {
  return (
    <div
      className="korzinka-card"
      style={{
        marginBottom: "20px",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px",
        border: "1px solid #F0F0F0",
        background: "var(--White, #FFF)",
      }}>
      <Link to={`/cart/${id}`}>
        <LazyLoadImage
          className="product-img"
          src={image}
          alt=""
          effect="blur"
        />
      </Link>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div
        className="korzinka-card-end"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ButtonGroup />
        <h4>{price} ₽</h4>
      </div>
    </div>
  );
};

KorzinkaCard.prototype = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
};

export default KorzinkaCard;
