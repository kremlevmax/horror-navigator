import React from "react";

const FavoriteMovieListContext = React.createContext({
  favoriteMoviesList: [],
  addedtoFavorite: false,
  addToFavoriteMoviesList: (movie) => {},
  removeFromFavoriteMoviesList: (id) => {},
});

export default FavoriteMovieListContext;
