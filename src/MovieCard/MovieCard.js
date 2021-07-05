import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <div className={styles.card}>
      {props.children}
      <button onClick={props.onClickFavoriteHandler}>
        {props.favoriteButtonName}
      </button>
      <button onClick={props.onClickWatchlistHandler}>
        {props.watchlistButtonName}
      </button>
    </div>
  );
};
export default MovieCard;
