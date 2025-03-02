import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function PartnerCard24({ name, imgName, descr, wb_link, div_id }) {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 5000);
  };

  return (
    <div id={`${div_id}`} className="card-main-container">
      <motion.div
        className="card-inner-container"
        animate={{ rotateY: isRotating ? 180 * 1 : 0 }}
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.4, ease: "linear" }}
        onClick={handleClick}
      >
        <div className="card-front">
          <img
            className="sponsor_logo"
            src={`/images/partners24/cards/${imgName}`}
            alt="TEDx Sponsor"
          />
        </div>
        <div className="card-back">{descr}</div>
      </motion.div>
      <div className="sponsor_name">
        <a
          href={wb_link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={wb_link === "" ? (e) => e.preventDefault() : null}
          style={{
            color: "eb0028",
            textDecoration: "none",
          }}
        >
          <h5 style={{ color: "white" }}>
            {name}{" "}
            <FontAwesomeIcon
              size="xs"
              icon={faLink}
              style={{ color: "#eb0028" }}
            />
          </h5>
        </a>
      </div>
    </div>
  );
}
