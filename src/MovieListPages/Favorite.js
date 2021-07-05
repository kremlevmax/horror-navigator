import ListMovieCard from "../MovieCard/ListMovieCard";
import FavoriteMovieListContext from "../store/favorite-movie-list-context";

import styles from "./MovieList.module.css";

import { useContext } from "react";

const Favorite = () => {
  const favoriteMovieListContext = useContext(FavoriteMovieListContext);

  return favoriteMovieListContext.favoriteMoviesList.map((item, index) => {
    const onClickHandler = (event) => {
      event.preventDefault();
      favoriteMovieListContext.removeFromFavoriteMoviesList(item.name);
    };

    return (
      <div className={styles["main-area"]}>
        <ListMovieCard
          key={index}
          buttonType='favorite'
          onClickHandler={onClickHandler}
        >
          <img src={item.poster} alt={item.name} className={styles.poster} />
          {item.name}
        </ListMovieCard>
      </div>
    );
  });
};
export default Favorite;
