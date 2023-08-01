import React from "react";
import headerLogo from "../../images/logo-header.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import useWindowWidth from '../../hooks/useWindowWidth'

function Header({ loggedIn }) {

  const windowWidth = useWindowWidth();
  const [isNavigationOpen, setisNavigationOpen] = React.useState(false);

  function handleNavigationOpen() {
    setisNavigationOpen(!isNavigationOpen);
  }

  return loggedIn && (windowWidth < 900) ? (
    <>
      <Navigation
        isNavigationOpen={isNavigationOpen}
        handleNavigationOpen={handleNavigationOpen}
      />
      <header className="header">
        <Link to="/" className="link">
          <img className="header__logo" alt="Логотип шапки" src={headerLogo} />
        </Link>
        <div className="button navigation-menu" onClick={handleNavigationOpen}>
          <span className="navigation-menu__item"></span>
          <span className="navigation-menu__item"></span>
          <span className="navigation-menu__item"></span>
        </div>
      </header>
    </>
  ) : loggedIn && (windowWidth > 900) ? (
    <header className="header">
      <Link to="/" className="link">
        <img className="header__logo" alt="Логотип шапки" src={headerLogo} />
      </Link>
      <div className="header__films">
        <Link to="/movies" replace className="link header__film">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="link header__film">
          Сохраненные фильмы
        </Link>
      </div>
      <Link to="/profile" className="button header__profile-button">
        Аккаунт
      </Link>
    </header>
  ) : (
    <header className="header">
      <Link to="/" className="link">
        <img className="header__logo" alt="Логотип шапки" src={headerLogo} />
      </Link>
      <div className="header__buttons">
        <Link to="/sign-up" className="button header__button">
          Регистрация
        </Link>
        <Link to="/sign-in" className="button header__button">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
