import React from "react";

const FavoriteMovieListContext = React.createContext({
  favoriteMoviesList: [],
  watchlist: [],
  addToFavoriteMoviesList: (movie) => {},
  removeFromFavoriteMoviesList: (name) => {},
  addToWatchList: (movie) => {},
  removeFromWatchlist: (name) => {},
});

export default FavoriteMovieListContext;
