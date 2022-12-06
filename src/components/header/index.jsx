import "./Header.scss";
import logo from "assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import BurgerMenu from "./components/burgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <a href="https://lk.julia-spirina.ru/">
          <button className="header__button">Вход</button>
        </a>
      </nav>
      <div className="burger__logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="burger">
        <MenuIcon className="burger__icon" />
      </button>
      <a href="https://lk.julia-spirina.ru/" className="login">
        <button className="header__button">Вход</button>
      </a>
      <BurgerMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
