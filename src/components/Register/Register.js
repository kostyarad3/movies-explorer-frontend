import React from "react";
import headerLogo from "../../images/logo-header.svg";
import { Link } from "react-router-dom";
import useValidateForm from "../../hooks/useValidateForm";

function Register({ handleRegistration, RegisterErrorText }) {
  const { inputValues, inputErrors, isFormValid, handleInputChange } = useValidateForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email, password } = inputValues;
    handleRegistration(name, email, password);
  }

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <Link to="/" className="link auth__image">
          <img alt="Логотип шапки" src={headerLogo} />
        </Link>
        <h3 className="register-form__title">Добро пожаловать!</h3>
        <p className="register-form__input-name">Имя</p>
        <input
          type="name"
          className="register-form__input"
          name="name"
          id="name"
          required
          minLength="2"
          maxLength="40"
          value={inputValues?.name || ""}
          onChange={handleInputChange}
        />
        <span className="register-form__input-error">
          {inputErrors?.name && "Неправильно введено имя."}
        </span>
        <p className="register-form__input-name">E-mail</p>
        <input
          type="email"
          className="register-form__input"
          name="email"
          id="email"
          required
          minLength="3"
          maxLength="40"
          value={inputValues?.email || ""}
          onChange={handleInputChange}
        />
        <span className="register-form__input-error">
          {inputErrors?.email && "Введите адрес электронной почты."}
        </span>
        <p className="register-form__input-name">Пароль</p>
        <input
          type="password"
          className="register-form__input"
          name="password"
          id="password"
          required
          minLength="6"
          maxLength="40"
          value={inputValues?.password || ""}
          onChange={handleInputChange}
        />
        <span className="register-form__input-error">
          {inputErrors?.password && "Что-то пошло не так..."}
        </span>
        <span className="register-form__error">
          {RegisterErrorText}
        </span>
        <button
          type="submit"
          aria-label="Зарегестрироваться"
          disabled={!isFormValid}
          className={`button register-form__button ${
            !isFormValid && "register-form__button_inactive"
          }`}
        >
          Зарегестрироваться
        </button>
        <p className="register-form__text">
          Уже зарегестрированы?&nbsp;
          <Link to="/sign-in" className="link register-form__link">
            Войти
          </Link>
        </p>
      </form>
    </>
  );
}
export default Register;
