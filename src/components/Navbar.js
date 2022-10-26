import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <img width={40} src={"/logo192.png"} alt="Brand" />
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/post"}>Post</Link>
        </nav>
      </div>
    </header>
  );
}
