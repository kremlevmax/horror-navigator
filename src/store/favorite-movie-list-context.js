import React from "react";

const FavoriteMovieListContext = React.createContext({
  favoriteMoviesList: [],
  addToFavoriteMoviesList: (movie) => {},
  removeFromFavoriteMoviesList: (movie) => {},
  addToWatchList: (movie) => {},
  removeFromWatchlist: (movie) => {},
});

export default FavoriteMovieListContext;
