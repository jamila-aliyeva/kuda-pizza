import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import FooterLogo from "../../assets/images/header-img/header-logo.svg";
import "./Footer.scss";

// for img

import Phone from "../../assets/images/header-img/call.svg";
import Location from "../../assets/images/header-img/location.svg";
import Facebook from "../../assets/images/header-img/location.svg";
import Instagram from "../../assets/images/header-img/instagram.svg";

const Footer = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div>
            <a href="#">
              <img src={FooterLogo} alt="" />
            </a>
          </div>

          <div className="footer-contact">
            <h4>{lang.Помощь}</h4>
            <div>
              {/* <img src={Phone} alt="" /> */}
              <a href="#">{lang.Ресторан}</a>
            </div>
            <div>
              {/* <img src={Location} alt="" /> */}
              <a href="#">{lang.Контакты}</a>
            </div>
            <div className="social">
              <div className="footer-contact">
                {/* <img src={Facebook} alt="" /> */}
                <a href="#">{lang.Поддержка}</a>
              </div>
              <div className="footer-contact">
                {/* <img src={Instagram} alt="" /> */}
                <a href="#">{lang.YcлoвияGapaнтии}</a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Контакты</h4>
            <div className="footer-inner">
              <img src={Phone} alt="" />
              <a href="#">+7 (926) 223-10-11</a>
            </div>
            <div className="footer-inner">
              <img src={Location} alt="" />
              <a href="#">Москва, ул. Юных Ленинцев, д.99</a>
            </div>
            <div className="social">
              <div className="footer-contact">
                <img src={Facebook} alt="" />
                <a href="#">Facebook</a>
              </div>
              <div className="footer-contact">
                <img src={Instagram} alt="" />
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
