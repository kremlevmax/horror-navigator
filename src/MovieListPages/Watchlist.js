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
      <div className={styles["main-area"]}>
        <ListMovieCard
          key={index}
          buttonType='watchlist'
          onClickHandler={onClickHandler}
        >
          <img src={item.poster} alt={item.name} className={styles.poster} />
          {item.name}
        </ListMovieCard>
      </div>
    );
  });
};

export default Watchlist;
