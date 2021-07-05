import styles from "./MovieCard.module.css";
import * as MDIcons from "react-icons/md";
import { useState } from "react";

const MovieCard = (props) => {
  const [favoriteButtonIsClicked, setFavoriteButtonIsClicked] = useState(false);
  const [watchlistButtonIsClicked, setWatchlistButtonIsClicked] = useState(
    false
  );

  const onClickFavoriteHandler = (event) => {
    props.onClickFavoriteHandler(event);
    setFavoriteButtonIsClicked(!favoriteButtonIsClicked);
  };
  const onClickWatchlistHandler = (event) => {
    props.onClickWatchlistHandler(event);
    setWatchlistButtonIsClicked(!watchlistButtonIsClicked);
  };

  return (
    <div className={styles.card}>
      {props.children}
      <div className={styles.icons}>
        <MDIcons.MdFavorite
          onClick={onClickFavoriteHandler}
          alt='Add to Favorite'
          className={`${favoriteButtonIsClicked && styles["active-icon"]}`}
        />
        <MDIcons.MdLocalMovies
          onClick={onClickWatchlistHandler}
          className={`${watchlistButtonIsClicked && styles["active-icon"]}`}
        />
      </div>
    </div>
  );
};
export default MovieCard;
