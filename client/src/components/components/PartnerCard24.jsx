import React, { useState } from "react";

export default function PartnerCard24({ name, imgName, descr }) {
  const [isTransformed, setIsTransformed] = useState(false);

  const handleClick = () => {
    setIsTransformed((prev) => !prev);
  };

  return (
    <div className="card-main-container">
      <div
        className={`card-inner-container ${isTransformed ? "transformed" : ""}`}
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
      </div>
      <div className="sponsor_name">{name}</div>
    </div>
  );
}
