import React from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import styles from "../../styles/About.module.css";

export default function About() {
  return (
    <Layout title={"About"}>
      <Navbar />
      <section className={styles.wrap}>
        <h1>About Page</h1>
        <Link to={"/about/detail"}>Show detail :</Link>
        {/* detail di sini */}
        <Outlet />
      </section>
    </Layout>
  );
}
