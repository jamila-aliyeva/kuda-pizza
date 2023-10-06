import { Fragment, useEffect, useState } from "react";
// import { LanguageContext } from "../context/LanguageContext";
import { categories } from "../components/data/categories";
import CategoryCard from "../components/card/CategoryCard";
import { products } from "../components/data/products";
import ProductsCard from "../components/card/ProductsCard";

import "./HomePage.scss";
import { Link } from "react-router-dom";
// import LanguageContextProvider from "../context/LanguageContext";

const HomePage = () => {
  const [catFixed, setCatFixed] = useState(false);

  // const state = useState(LanguageContextProvider);
  // console.log(state);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 200) {
        setCatFixed(true);
      } else {
        setCatFixed(false);
      }
    });
  }, []);
  return (
    <Fragment>
      <div className="container">
        <div
          className={`category-wrap active ${
            catFixed ? "category-wrap-fixed" : null
          }`}>
          <div className="category-wrap-inner">
            {categories.map((el, i) => (
              <Link to={``} key={i} className="cardchalar">
                <CategoryCard {...el} key={i} />
              </Link>
            ))}
          </div>
        </div>
        <div className="category-row">
          {categories.map((el, i) => (
            <Fragment key={i}>
              <CategoryCard {...el} />
              <div className="category-card-wrap">
                {products
                  .filter((pr) => pr.category === el.name)
                  .map((product, i) => (
                    <ProductsCard {...product} key={i} />
                  ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
