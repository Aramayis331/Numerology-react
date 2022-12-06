import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./BurgerMenu.scss";

const BurgerMenu = ({ isOpen }) => {
  return (
    <Drawer anchor="right" open={isOpen}>
      <div className="menuBurger">
        <div className="menuBurger__nav">
          <div className="menuBurger__nav__close">
            <CloseIcon className="menuBurger__nav__close__icon" />
          </div>
        </div>
        <a href="https://lk.julia-spirina.ru/" className="login">
          <button className="header__button">Вход</button>
        </a>
      </div>
    </Drawer>
  );
};

export default BurgerMenu;
