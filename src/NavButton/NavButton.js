import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <li className={styles.button}>
      <Link to={props.name.toLowerCase()} className={styles["button-name"]}>
        {props.name.toUpperCase()} {props.total}
      </Link>
    </li>
  );
};
export default NavButton;
