import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ movies, page, handleSearch }) {
  return (
    <section className="movies">
      <SearchForm movies={movies} handleSearch={handleSearch} />
      <MoviesCardList movies={movies} page={page} />
    </section>
  );
}

export default Movies;
