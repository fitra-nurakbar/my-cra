import React from "react";
import { Link } from "react-router-dom";

export default function AboutDetail() {
  return (
    <Link to={"https://www.instagram.com/fit.tra_/"}>
      <h2>Fitra Nurakbar</h2>
      <div>
        <img
          src="/assets/photo-profile.jpg"
          alt="this is my profile"
          loading="lazy"
        />
        <p>Software Enginer</p>
      </div>
    </Link>
  );
}
