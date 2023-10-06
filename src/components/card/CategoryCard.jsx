import PropTypes from "prop-types";
import "./CategoryCard.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

const CategoryCard = ({ name, image }) => {
  return (
    <div className="category-card">
      <LazyLoadImage
        className="category-img"
        src={image}
        alt=""
        effect="blur"
      />
      <h3>{name}</h3>
    </div>
  );
};
CategoryCard.prototype = {
  name: PropTypes.string,
  img: PropTypes.string,
};
export default CategoryCard;
