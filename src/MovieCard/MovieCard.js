import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};
export default MovieCard;
