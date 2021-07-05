import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <li className={styles.button}>
      <Link to={props.name.toLowerCase()} className={styles["button-name"]}>
        {props.name.toUpperCase()}{" "}
        <span className={styles.total}>{props.total}</span>
      </Link>
    </li>
  );
};
export default NavButton;
