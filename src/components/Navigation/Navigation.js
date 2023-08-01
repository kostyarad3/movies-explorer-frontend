import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isNavigationOpen, handleNavigationOpen }) {

  return (
    <div
      className={`navigation ${isNavigationOpen ? "navigation_opened" : ""}`}
    >
      <div className="navigation__container">
        <Link to="/" className="link navigation__link" onClick={handleNavigationOpen}>
          Главная
        </Link>
        <Link to="/movies" className="link navigation__link" onClick={handleNavigationOpen}>
          Фильмы
        </Link>
        <Link to="/saved-movies" className="link navigation__link" onClick={handleNavigationOpen}>
          Сохраненные фильмы
        </Link>
        <Link to="/profile" className="button navigation__button" onClick={handleNavigationOpen}>
          Аккаунт
        </Link>
        <button
          onClick={handleNavigationOpen}
          className="button button_type_close"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </div>
  );
}

export default Navigation;
