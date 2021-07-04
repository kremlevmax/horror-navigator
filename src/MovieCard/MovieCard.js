import styles from "./MovieCard.module.css";
import { useState } from "react";

const MovieCard = (props) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const onClickHandler = (event) => {
    props.onClickHandler(event);
    setIsItemAdded(true);
  };

  return (
    <div className={styles.card}>
      {props.children}
      {!isItemAdded && (
        <button onClick={onClickHandler}>{props.buttonName}</button>
      )}
    </div>
  );
};
export default MovieCard;
