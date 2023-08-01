import React from "react";
import headerLogo from "../../images/logo-header.svg";
import { Link } from "react-router-dom";
import useValidateForm from "../../hooks/useValidateForm";

function Login({ handleLogin, LoginErrorText }) {
  const { inputValues, inputErrors, isFormValid, handleInputChange } = useValidateForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = inputValues;
    handleLogin(email, password);
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <Link to="/" className="link auth__image">
          <img alt="Логотип шапки" src={headerLogo} />
        </Link>
        <h3 className="login-form__title">Рады видеть!</h3>
        <p className="login-form__input-name">E-mail</p>
        <input
          type="email"
          className="login-form__input"
          name="email"
          id="email"
          required
          minLength="3"
          maxLength="40"
          value={inputValues?.email || ""}
          onChange={handleInputChange}
        />
        <span className="login-form__input-error">
          {inputErrors?.email && "Введите адрес электронной почты."}
        </span>
        <p className="login-form__input-name">Пароль</p>
        <input
          type="password"
          className="login-form__input"
          name="password"
          id="password"
          required
          minLength="6"
          maxLength="40"
          value={inputValues?.password || ""}
          onChange={handleInputChange}
        />
        <span className="login-form__input-error">
          {inputErrors?.password && "Что-то пошло не так..."}
        </span>
        <span className="login-form__error">
          {/* УБРАТЬ ТЕКСТ ПОСЛЕ ВСТАВКИ ОШИБКИ С APP.JS */}
          {LoginErrorText || "Вы ввели неправильный логин или пароль."}
        </span>
        <button
          type="submit"
          aria-label="Войти"
          disabled={!isFormValid}
          className={`button login-form__button ${
            !isFormValid && "login-form__button_inactive"
          }`}
        >
          Войти
        </button>
        <p className="login-form__text">
          Еще не зарегестрированы?&nbsp;
          <Link to="/sign-up" className="link login-form__link">
            Регистрация
          </Link>
        </p>
      </form>
    </>
  );
}
export default Login;
