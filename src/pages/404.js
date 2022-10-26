import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";

export default function PageNotFound() {
  return (
    <Layout title={"404"}>
      <section className={styles.error}>
        <h1>404 | PageNotFound</h1>
      </section>
    </Layout>
  );
}
