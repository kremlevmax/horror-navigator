import ListMovieCard from "../MovieCard/ListMovieCard";
import { useContext } from "react";
import FavoriteMovieListContext from "../store/favorite-movie-list-context";
import styles from "./MovieList.module.css";

const Watchlist = () => {
  const favoriteMovieListContext = useContext(FavoriteMovieListContext);

  return favoriteMovieListContext.watchlist.map((item, index) => {
    const onClickHandler = (event) => {
      event.preventDefault();
      favoriteMovieListContext.removeFromWatchlist(item.name);
    };

    return (
      <ListMovieCard
        key={index}
        buttonName='Remove From Favorite'
        onClickHandler={onClickHandler}
      >
        <img src={item.poster} alt={item.name} className={styles.poster} />
        {item.name}
      </ListMovieCard>
    );
  });
};

export default Watchlist;
