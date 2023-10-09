import React from "react";
import { Link } from "react-router-dom";

export default function NewsBox({ title, imgSrc, linkTo }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(50, 50, 50, 0.05)",
        width: "95%",
        height: "150px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        borderRadius: "2px",
      }}
    >
      <a
        href={linkTo}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "black", maxWidth: "70%" }}
      >
        <h1 style={{ fontSize: "20px", textAlign: "center", width: "90%" }}>
          {title}
        </h1>
      </a>

      <img width="30%" src={imgSrc} alt="" />
    </div>
  );
}
