import styles from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <li className={styles.button}>
      <span className={styles["button-name"]}>{props.name}</span>
    </li>
  );
};
export default NavButton;
