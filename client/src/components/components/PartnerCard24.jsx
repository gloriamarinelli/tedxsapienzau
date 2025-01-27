import React, { useState } from "react";

export default function PartnerCard24({ name, css_name, imgName, descr }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleMobileClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="card-main-container" onClick={handleMobileClick}>
      <div
        id={`id_${isRotated ? "back_" : ""}${css_name}`}
        className="card-inner-container"
      >
        <div className="card-front">
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
        <div className="card-back">{descr}</div>
      </div>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>{name}</div>
    </div>
  );
}
