import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-logo"]}>
        <img
          className={styles["header-logo-image"]}
          src='/images/logo.png'
          alt='Horror Navigator logo'
        />
      </div>
    </div>
  );
};

export default Header;
