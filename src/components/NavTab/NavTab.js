import React from "react";

function NavTab() {
  function scrollToSection(evt) {
    const elementToScroll = evt.target.id;
    document.querySelector(`.${elementToScroll}`).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  return (
    <nav className="navtab">
      <p
        href="#"
        id="about-project"
        className="link navtab__link"
        onClick={scrollToSection}
      >
        О проекте
      </p>
      <p
        href="#"
        id="techs"
        className="link navtab__link"
        onClick={scrollToSection}
      >
        Технологии
      </p>
      <p
        href="#"
        id="about-me"
        className="link navtab__link"
        onClick={scrollToSection}
      >
        Студент
      </p>
    </nav>
  );
}

export default NavTab;
