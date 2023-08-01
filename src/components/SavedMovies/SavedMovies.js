import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies, page, handleSearch }) {
  return (
    <section className="movies">
      <SearchForm movies={savedMovies} handleSearch={handleSearch} />
      <MoviesCardList movies={savedMovies} page={page} />
    </section>
  );
}

export default SavedMovies;
