import React from "react";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__heading">Технологии</h2>
      <h3 className="techs__subheading">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__container">
        <div className="techs__item">HTML</div>
        <div className="techs__item">CSS</div>
        <div className="techs__item">JS</div>
        <div className="techs__item">React</div>
        <div className="techs__item">Git</div>
        <div className="techs__item">Express.js</div>
        <div className="techs__item">mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
