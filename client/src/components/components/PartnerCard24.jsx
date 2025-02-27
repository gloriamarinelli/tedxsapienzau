import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerCard24({ name, imgName, descr, wb_link }) {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 5000);
  };

  return (
    <div className="card-main-container">
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
            color: wb_link === "" ? "white" : "grey",
            textDecoration: wb_link === "" ? "none" : "underline",
          }}
        >
          {name}
        </a>
      </div>
    </div>
  );
}
