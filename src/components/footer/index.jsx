import "./Footer.scss";
import pay from "assets/pay.png";
import EastIcon from "@mui/icons-material/East";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__item">
          <p className="footer__item__header">ООО "ПСК-КРАН"</p>
          <p className="footer__item__link">ИНН: 1655412920</p>
          <p className="footer__item__link">КПП: 165501001</p>
          <p className="footer__item__link">info@roilead.ru</p>
        </div>
        <div className="footer__item">
          <p className="footer__item__header">Информация</p>
          <a
            href="https://julia-spirina.ru/privacy.php"
            className="footer__item__link footer__item__link__hover"
          >
            <EastIcon className="footer__item__link__arrow" />
            Политика конфиденциальности
          </a>
          <a
            href="https://julia-spirina.ru/offerta.php"
            className="footer__item__link footer__item__link__hover"
          >
            <EastIcon className="footer__item__link__arrow" />
            Публичная оферта
          </a>
          <a
            href="https://julia-spirina.ru/terms.php"
            className="footer__item__link footer__item__link__hover"
          >
            <EastIcon className="footer__item__link__arrow" />
            Условия использования
          </a>
          <a
            href="https://julia-spirina.ru/tariffs.php"
            className="footer__item__link footer__item__link__hover"
          >
            <EastIcon className="footer__item__link__arrow" />
            Тарифы
          </a>
        </div>
        <div className="footer__item__end">
          <p className="footer__item__header">Мы принимаем к оплате</p>
          <img src={pay} alt="noPhoto" />
          <p className="footer__item__link">Все платежи защищены</p>
        </div>
      </div>
      <p className="footer__end">2022. © - Нумеролог Юлия Спирина</p>
    </footer>
  );
};

export default Footer;
