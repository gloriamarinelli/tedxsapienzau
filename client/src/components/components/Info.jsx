import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Info({ x, y, name, team, linkedin}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }} // Add relative positioning to parent div

    >
      <a
        href={"link"}
        target="_blank"
        rel="noreferrer"
        className="nav-link"
        style={{
          position: "absolute",
          top: y,
          left: x,
          textDecoration: "none",
          color: "white",
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </a>
      {hovered && ( // Render the box only when hovered
        <div
          style={{
            position: "absolute",
            top: y - 80,
            left: x - 30,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            zIndex: "1000", // Ensure the box appears above other content
          }}
        >
        <h3 style={{ margin: "0" }}>{name}</h3>
        <p style={{ margin: "0" }}>{team}</p>
        </div>
      )}
    </div>
  );
}

export default Info;
