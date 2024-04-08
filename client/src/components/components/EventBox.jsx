import React, { useState } from "react";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";

export default function EventBox({
  date,
  title,
  description,
  photo,
  windowSize,
  linkTo,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const boxHeight = 600;

  return (
    <div
      className="bento-box"
      style={{
        width: "%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(${photo})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: windowSize > global.UTILS.MOBILE_WIDTH ? boxHeight : 400,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>{date}</h2>
      <Link style={{ textDecoration: "none", color: "#fff" }} to={linkTo}>
        <h1
          style={{
            fontWeight: 700,
          }}
        >
          {title}
        </h1>
      </Link>
      {windowSize > global.UTILS.MOBILE_WIDTH ? (
        <p style={{ maxWidth: "50%", fontWeight: 600 }}>{description}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
