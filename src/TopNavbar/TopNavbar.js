import NavButton from "../NavButton/NavButton";

import * as MDIcons from "react-icons/md";

import styles from "../TopNavbar/TopNavbar.module.css";

const TopNavbar = (props) => {
  return (
    <ul className={styles["top-navbar"]}>
      <NavButton name='Browse' icon={<MDIcons.MdSearch />} />
      <NavButton name='Favorite' icon={<MDIcons.MdFavorite />} />
      <NavButton name='Watchlist' icon={<MDIcons.MdLocalMovies />} />
    </ul>
  );
};

export default TopNavbar;
