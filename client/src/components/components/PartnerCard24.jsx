import React, { useState } from "react";

export default function PartnerCard24({ name, css_name, imgName, descr }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated((prev) => !prev);
  };

  return (
    <div id={`id_${css_name}`} className="card-main-container">
      <div className={`card-inner-container ${isRotated ? "rotate" : ""}`}>
        <div className="card-front" onClick={handleClick}>
          <img
            src={`/images/partners24/cards/${imgName}`}
            alt="TEDx Sponsor"
            style={{
              width: "100%",
              height: "175px",
              objectFit: "contain",
              padding: "0px 5px",
              borderRadius: "10%",
            }}
          />
        </div>
        <div className="card-back" onClick={handleClick}>
          {descr}
        </div>
      </div>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</div>
    </div>
  );
}
