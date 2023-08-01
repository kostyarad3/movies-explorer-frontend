import React from "react";

function MoviesCard({ movie, page }) {
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  function handleSaveFilm() {
    setIsButtonActive(!isButtonActive);
  }

  const minutes = movie.duration % 60;
  const hours = (movie.duration - minutes) / 60;
  const filmDuration = `${hours}ч ${minutes}м`;

  return (
    <>
      <p className="movie__name">{movie.nameRU}</p>
      <p className="movie__duration">{filmDuration}</p>
      {page === "movies" ? (
        <button
          className={`button movie__button ${
            isButtonActive ? "movie__button_active" : ""
          }`}
          onClick={handleSaveFilm}
          type="button"
          aria-label="Сохранить в рекомендации"
        ></button>
      ) : (
        <button
          className="button saved-movie__button"
        ></button>
      )}
      <img className="movie__image" alt="Картинка фильма" src={movie.image} />
    </>
  );
}

export default MoviesCard;
