import "./Footer.scss";
import logo from "assets/logo.png";
import sectionOneArrow from "assets/sectionOneArrow.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__bottom">
        <p className="footer__bottom__text">
          2022. Копирайты - Нумеролог Юлия Спирина
        </p>
        <p className="footer__bottom__text">
          Политика обработки персональных данных
        </p>
      </div>
    </footer>
  );
};

export default Footer;
