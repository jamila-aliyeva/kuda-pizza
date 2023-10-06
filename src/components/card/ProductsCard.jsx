import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";

const ProductsCard = ({ image, name, description, id, price, filter }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { addToShop, cart } = useContext(ProductContext);
  let productInCart = cart.find((pr) => pr.id == id);

  return (
    <div className="product-card">
      <Link to={`/cart/${id}`}>
        <LazyLoadImage
          className="product-img"
          src={image}
          alt=""
          effect="blur"
        />
      </Link>

      <div className="products-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <h5 className="product-filter">{filter}</h5>
        <div className="product-card-footer">
          {/* <button
            className="btn btn-warning rounded-circle p-2 mx-3"
            onClick={() => addFav(id)}>
            {fav ? <span>❤️️️️️️️</span> : <span>🤍</span>}
          </button> */}
          {productInCart ? (
            <>
              <button style={{ background: "#ff1010" }}>выбрано</button>{" "}
            </>
          ) : (
            <button onClick={() => addToShop(id)}>Выбрать</button>
          )}

          <h4>{price} ₽</h4>
        </div>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  price: PropTypes.number,
};

export default ProductsCard;
