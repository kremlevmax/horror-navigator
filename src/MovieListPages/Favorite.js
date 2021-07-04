import MovieCard from "../MovieCard/MovieCard";
import FavoriteMovieListContext from "../store/favorite-movie-list-context";

import styles from "./MovieList.module.css";

import { useContext } from "react";

const Favorite = () => {
  const favoriteMovieListContext = useContext(FavoriteMovieListContext);
  return favoriteMovieListContext.favoriteMoviesList.map((item, index) => {
    return (
      <MovieCard key={index}>
        <img src={item.poster} alt={item.name} className={styles.poster} />
        {item.name}
      </MovieCard>
    );
  });
};
export default Favorite;
