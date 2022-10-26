import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <Layout title={"Home"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1 className={styles.head}>Home</h1>
      </section>
    </Layout>
  );
}
