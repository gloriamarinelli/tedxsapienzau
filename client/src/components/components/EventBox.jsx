import React, { useState } from "react";
import global from "../../resources/global.json";

export default function EventBox({
  date,
  title,
  description,
  photo,
  windowSize,
  linkTo,
}) {
  const boxHeight = 600;

  return (
    <div
      onClick={() => {
        window.location.href = linkTo;
      }}
      className="bento-box event-box"
      style={{
        width: "%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),url(${photo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: windowSize > global.UTILS.MOBILE_WIDTH ? boxHeight : 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        cursor: "pointer",
      }}
    >
      <h2>{date}</h2>
      <a style={{ textDecoration: "none", color: "#fff" }} href={linkTo}>
        <h1
          style={{
            fontWeight: 700,
          }}
        >
          {title}
        </h1>
      </a>
      {windowSize > global.UTILS.MOBILE_WIDTH ? (
        <p style={{ maxWidth: "50%", fontWeight: 600 }}>{description}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
