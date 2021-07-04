import styles from "./MovieCard.module.css";
import { useState } from "react";

const ListMovieCard = (props) => {
  const onClickHandler = (event) => {
    props.onClickHandler(event);
  };

  return (
    <div className={styles.card}>
      {props.children}
      <button onClick={onClickHandler}>{props.buttonName}</button>
    </div>
  );
};
export default ListMovieCard;
