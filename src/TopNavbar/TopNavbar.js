import { useContext } from "react";

import NavButton from "../NavButton/NavButton";
import FavoriteMovieListContext from "../store/favorite-movie-list-context";
import * as MDIcons from "react-icons/md";

import styles from "../TopNavbar/TopNavbar.module.css";

const TopNavbar = (props) => {
  const favoriteMovieListContext = useContext(FavoriteMovieListContext);
  console.log(favoriteMovieListContext.favoriteMoviesList);

  return (
    <ul className={styles["top-navbar"]}>
      <NavButton name='Browse' icon={<MDIcons.MdSearch />} />
      <NavButton
        name='Favorite'
        icon={<MDIcons.MdFavorite />}
        total={favoriteMovieListContext.favoriteMoviesList.length}
      />
      <NavButton
        name='Watchlist'
        icon={<MDIcons.MdLocalMovies />}
        total={favoriteMovieListContext.favoriteMoviesList.length}
      />
    </ul>
  );
};

export default TopNavbar;
