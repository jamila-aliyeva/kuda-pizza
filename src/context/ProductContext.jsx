import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../components/data/products";
import { CART } from "../constants";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(CART)) || []
  );

  const controlQuantity = (id, sign) => {
    let res = cart.map((pr) => {
      if (pr.id === id) {
        sign === "+" ? pr.quantity++ : pr.quantity--;
      }
      return pr;
    });
    return res;
  };

  const addToShop = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInCard = cart.find((pr) => pr.id === id);

    let newCart;
    if (productInCard) {
      newCart = cart.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      });
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    localStorage(CART, JSON.stringify(newCart));
  };
  // console.log(cart);

  const increaseQuantity = (id) => {
    const newCart = controlQuantity(id, "+");
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  const decreaseQuantity = (id) => {
    let newCart;
    let productInCart = cart.find((pr) => pr.id === id);
    if (productInCart.quantity > 1) {
      newCart = controlQuantity(id, "-");
    } else {
      newCart = cart.filter((pr) => pr.id !== id);
    }
    setCart(newCart);
    localStorage.setItem(CART, JSON.stringify(newCart));
  };

  let totalPrice = cart.reduce((acc, pr) => acc + pr.price * pr.quantity, 0);

  const state = {
    cart,
    addToShop,
    decreaseQuantity,
    increaseQuantity,
    totalPrice,
  };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

ProductContextProvider.prototype = {
  children: PropTypes.node,
};

export default ProductContextProvider;
