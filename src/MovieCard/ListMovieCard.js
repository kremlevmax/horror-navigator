import styles from "./MovieCard.module.css";
import * as MDIcons from "react-icons/md";

const ListMovieCard = (props) => {
  const onClickHandler = (event) => {
    props.onClickHandler(event);
  };

  return (
    <div className={styles.card}>
      {props.children}
      {props.buttonType === "watchlist" ? (
        <MDIcons.MdLocalMovies
          onClick={onClickHandler}
          className={styles["active-icon"]}
        />
      ) : (
        <MDIcons.MdFavorite
          onClick={onClickHandler}
          className={styles["active-icon"]}
        />
      )}
    </div>
  );
};
export default ListMovieCard;
