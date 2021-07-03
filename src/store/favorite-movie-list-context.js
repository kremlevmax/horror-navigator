import React from "react";

const FavoriteMovieListContext = React.createContext({
  listToDisplay: [],
  favoriteMoviesList: [],
  addToFavoriteMoviesList: (movie) => {},
  removeFromFavoriteMoviesList: (id) => {},
});

export default FavoriteMovieListContext;
