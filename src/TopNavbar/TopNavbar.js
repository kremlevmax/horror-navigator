import NavButton from "../NavButton/NavButton";

import styles from "../TopNavbar/TopNavbar.module.css";

const TopNavbar = (props) => {
  return (
    <ul className={styles["top-navbar"]}>
      <NavButton name='Browse' />
      <NavButton name='Favorite' />
      <NavButton name='Watchlist' />
    </ul>
  );
};

export default TopNavbar;
