import React from "react";
import Search from "./SearchForm";
import Logo from "./Logo";
import HeaderCart from "./HeaderCart";


//Описывает пользовательский интерфейс заголовка и поиска
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__row">
        <Logo className="header__logo" />
        <HeaderCart />
      </div>
      <Search />
    </header>
  );
};

export default Header;
