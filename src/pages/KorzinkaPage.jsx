import { Fragment, useContext } from "react";

import { categories } from "../components/data/categories";
import CategoryCard from "../components/card/CategoryCard";
import { products } from "../components/data/products";
import ProductsCard from "../components/card/ProductsCard";

import "./KorzinkaPage.scss";
import { ProductContext } from "../context/ProductContext";
import KorzinkaCard from "../components/card/KorzinkaCard";

const KorzinkaPage = () => {
  const { cart, totalPrice } = useContext(ProductContext);
  return (
    <section>
      <div className="container">
        <div>
          <h2>Ваш заказ</h2>
          {cart.map((pr) => (
            <KorzinkaCard key={pr.id} {...pr} />
          ))}
        </div>
        <div className="sending">
          <div>
            <input type="text" placeholder="Промокод" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none">
                <path
                  d="M16.6875 6.46641L2.60474 0.709923C2.01145 0.467386 1.34119 0.574079 0.855567 0.988227C0.369941 1.40244 0.166828 2.04066 0.325555 2.65378L1.57905 7.49621H7.7163C7.99871 7.49621 8.2277 7.72175 8.2277 7.99999C8.2277 8.27819 7.99874 8.50377 7.7163 8.50377H1.57905L0.325555 13.3462C0.166828 13.9593 0.369907 14.5975 0.855567 15.0117C1.34218 15.4267 2.01251 15.5321 2.60477 15.29L16.6875 9.53356C17.3287 9.27148 17.727 8.68384 17.727 7.99999C17.727 7.31613 17.3287 6.72846 16.6875 6.46641Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <h4>Итого: {totalPrice} ₽</h4>
        </div>
        <div>
          <h2>Добавить к заказу?</h2>
          <div className="category-row">
            {categories.map((el, i) => (
              <Fragment key={i}>
                <CategoryCard {...el} />
                <div className="category-card-wrap">
                  {products
                    .filter((pr) => pr.category === el.name)
                    .map((product, i) => (
                      <ProductsCard {...product} key={i} />
                    ))}{" "}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <h2>О вас</h2>
        <div className="form-wrapper">
          <div className="form-inputs">
            <label>Имя*</label>
            <input type="text" placeholder="Алексей" />
          </div>
          <div className="form-inputs">
            <label htmlFor="">Номер телефона*</label>
            <input type="tel" placeholder="+7" />
          </div>
          <div className="form-inputs">
            <label htmlFor="">Почта</label>
            <input type="tel" placeholder="mail@gmail.com" />
          </div>
        </div>
        <div className="form-top">
          <h2>Доставка</h2>
          <div className="form-btns">
            <button>Доставка</button>
            <button>Самовывоз</button>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form-inputs">
            <label htmlFor="">Dom</label>
            <input type="text" placeholder="a" />
          </div>
          <div className="form-inputs">
            <label htmlFor="">Poyezd</label>
            <input type="text" placeholder="1" />
          </div>
          <div className="form-inputs">
            <label htmlFor="">Etaj</label>
            <input type="text" placeholder="2" />
          </div>
          <div className="form-inputs">
            <label htmlFor="">Kvartira</label>
            <input type="text" placeholder="3" />
          </div>
          <div className="form-inputs">
            <label htmlFor="">Domofo</label>
            <input type="text" placeholder="000" />
          </div>
        </div>
        <div>
          <h2>Комментарий</h2>
          <textarea
            cols={120}
            rows={10}
            placeholder="Есть уточнения?"></textarea>
        </div>
      </div>
    </section>
  );
};

export default KorzinkaPage;
