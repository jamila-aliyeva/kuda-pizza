import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "swiper/css";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./index.css";

import ProductContextProvider from "./context/ProductContext.jsx";
import LanguageContextProvider from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
