import FavoriteMovieListContext from "./favorite-movie-list-context";
import { useReducer } from "react";

const defaultState = {
  watchlist: [],
  favoriteMoviesList: [],
  addedToFavorite: false,
  addedToWatchlist: false,
};

const movieListReducer = (state, action) => {
  let updatedFavoriteList;
  let updatedWatchlist;
  let updatedMovieEntry;

  switch (action.type) {
    case "ADD_TO_FAVORITE":
      let ifItemIsAlreadyAdded = state.favoriteMoviesList.findIndex(
        (movie) => movie.name === action.movie.name
      );
      if (!ifItemIsAlreadyAdded) {
        updatedFavoriteList = state.favoriteMoviesList;
      } else {
        updatedMovieEntry = { ...action.movie, favoriteStatus: true };
        updatedFavoriteList = state.favoriteMoviesList.concat(
          updatedMovieEntry
        );
      }
      break;
    case "DELETE_FROM_FAVORITE":
      updatedFavoriteList = state.favoriteMoviesList.filter(
        (movie) => movie.name !== action.name
      );
      break;
    case "ADD_TO_WATCHLIST":
      ifItemIsAlreadyAdded = state.watchlist.findIndex(
        (movie) => movie.name === action.movie.name
      );
      if (!ifItemIsAlreadyAdded) {
        updatedWatchlist = state.watchlist;
      } else {
        updatedMovieEntry = { ...action.movie, watchlistStatus: true };
        updatedWatchlist = state.watchlist.concat(updatedMovieEntry);
      }
      break;

    default:
      updatedFavoriteList = state.favoriteMoviesList;
      updatedWatchlist = state.watchlist;
  }
  return {
    favoriteMoviesList: updatedFavoriteList,
    watchlist: updatedWatchlist,
  };
};

const FavoriteMovieListContextProvider = (props) => {
  const [movieListState, dispatchMoviListAction] = useReducer(
    movieListReducer,
    defaultState
  );

  const addMovieToFavoriteListHandler = (movie) => {
    dispatchMoviListAction({ type: "ADD_TO_FAVORITE", movie: movie });
  };
  const removeMovieFromFavoriteLiistHandler = (name) => {
    dispatchMoviListAction({ type: "DELETE_FROM_FAVORITE", name: name });
  };
  const addToWatchListHandler = (movie) => {
    dispatchMoviListAction({ type: "ADD_TO_WATCHLIST", movie: movie });
  };
  const removeFromWatchlistHandler = (name) => {
    dispatchMoviListAction({ type: "REMOVE_FROM_WATCHLIST", name: name });
  };

  const favoriteMovieListContext = {
    favoriteMoviesList: movieListState.favoriteMoviesList,
    watchlist: movieListState.favoriteMoviesList,
    addToFavoriteMoviesList: addMovieToFavoriteListHandler,
    removeFromFavoriteMoviesList: removeMovieFromFavoriteLiistHandler,
    addToWatchlist: addToWatchListHandler,
    removeFromWatchlist: removeFromWatchlistHandler,
  };

  return (
    <FavoriteMovieListContext.Provider value={favoriteMovieListContext}>
      {props.children}
    </FavoriteMovieListContext.Provider>
  );
};

export default FavoriteMovieListContextProvider;
