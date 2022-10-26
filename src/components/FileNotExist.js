import React from "react";
import styles from "../styles/404.module.css";

export default function FileNotExist({ children }) {
  return (
    <section className={styles.error}>
      <h1>{children}</h1>
    </section>
  );
}
