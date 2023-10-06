import "./index.scss";
import { Fragment, useContext } from "react";
// import HomePage from "../../pages/HomePage";

// for imgs
import shopping from "../../assets/images/header-img/shopping-bag.svg";
import headerLogo from "../../assets/images/header-img/header-logo.svg";
import contact from "../../assets/images/header-img/contact.svg";
import { ProductContext } from "../../context/ProductContext";
import { LanguageContext } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { langType, lang, changeLang } = useContext(LanguageContext);
  const { cart } = useContext(ProductContext);

  console.log(cart.length);

  // const { cart } = useContext(ProductContext) || { cart: [] };
  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="header-wrapper">
            <div className="header-aside">
              <div className="header-location">
                {/* <img src={location} alt="" /> */}
                <select value={langType} onChange={changeLang}>
                  <option value="ru">Ru</option>
                  <option value="uz">Uz</option>
                </select>
              </div>
              <h4>
                <a href="#">{lang.ПpoвepитьAдpec}</a>
              </h4>
              <a href="#">
                {lang.CpeднeeBpeмяDocaвки}: <span>00:24:19</span>
              </a>
            </div>
            <div className="header-bside">
              <h4>Время работы: с 11:00 до 23:00</h4>
              <div className="contact">
                <img src={contact} alt="" />
                <a href="#">{lang.BoйтиBaккayнт}</a>
              </div>
            </div>
          </div>
          <div className="header-counter">
            <div className="header-shop-img">
              <a href="/">
                <img src={headerLogo} alt="" />
              </a>
            </div>
            <a href="/korzinka">
              <div className="header-shop">
                <img src={shopping} alt="" />
                <Link to="/korzinka">
                  {" "}
                  <h5 style={{ color: "#fff" }}>({cart.length})</h5>
                </Link>
              </div>
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
