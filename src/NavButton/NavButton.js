import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";
import * as MDIcons from "react-icons/md";

const NavButton = (props) => {
  return (
    <li className={styles.button}>
      <Link to={props.name.toLowerCase()} className={styles["button-name"]}>
        {props.name.toUpperCase()}
      </Link>
    </li>
  );
};
export default NavButton;
