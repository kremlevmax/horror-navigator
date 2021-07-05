import { useContext } from "react";

import NavButton from "../NavButton/NavButton";
import FavoriteMovieListContext from "../store/favorite-movie-list-context";
import * as MDIcons from "react-icons/md";

import styles from "../TopNavbar/TopNavbar.module.css";

const TopNavbar = () => {
  const favoriteMovieListContext = useContext(FavoriteMovieListContext);

  return (
    <ul className={styles["top-navbar"]}>
      <NavButton name='Browse' icon={<MDIcons.MdSearch />} />
      <NavButton
        name='Favorite'
        total={favoriteMovieListContext.favoriteMoviesList.length}
      />
      <NavButton
        name='Watchlist'
        total={favoriteMovieListContext.watchlist.length}
      />
    </ul>
  );
};

export default TopNavbar;
