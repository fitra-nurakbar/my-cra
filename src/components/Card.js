import React from "react";
import styles from "../styles/Card.module.css";

export default function Card(props) {
  const { title, body, button } = props;

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
      {button}
    </div>
  );
}
