import FavoriteMovieListContext from "./favorite-movie-list-context";
import { useReducer } from "react";

const defaultState = {
  favoriteMoviesList: [],
  addedToFavorite: false,
};

const movieListReducer = (state, action) => {
  let updatedFavoriteList;

  switch (action.type) {
    case "ADD":
      let ifItemIsAlreadyAdded = state.favoriteMoviesList.findIndex(
        (item) => item.name === action.item.name
      );
      if (!ifItemIsAlreadyAdded) {
        updatedFavoriteList = state.favoriteMoviesList;
      } else {
        updatedFavoriteList = state.favoriteMoviesList.concat(action.item);
      }
      break;
    case "DELETE":
      updatedFavoriteList = state.favoriteMoviesList.filter(
        (item) => item.name !== action.name
      );
      break;
    default:
      updatedFavoriteList = state.favoriteMoviesList;
  }
  return {
    favoriteMoviesList: updatedFavoriteList,
  };
};

const FavoriteMovieListContextProvider = (props) => {
  const [movieListState, dispatchMoviListAction] = useReducer(
    movieListReducer,
    defaultState
  );

  const addMovieToFavoriteListHandler = (item) => {
    dispatchMoviListAction({ type: "ADD", item: item });
  };
  const removeMovieFromFavoriteLiistHandler = (name) => {
    dispatchMoviListAction({ type: "DELETE", name: name });
  };

  const favoriteMovieListContext = {
    favoriteMoviesList: movieListState.favoriteMoviesList,
    addToFavoriteMoviesList: addMovieToFavoriteListHandler,
    removeFromFavoriteMoviesList: removeMovieFromFavoriteLiistHandler,
  };

  return (
    <FavoriteMovieListContext.Provider value={favoriteMovieListContext}>
      {props.children}
    </FavoriteMovieListContext.Provider>
  );
};

export default FavoriteMovieListContextProvider;
