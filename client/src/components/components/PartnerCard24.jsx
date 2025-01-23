import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";

export default function PartnerCard24({ name, imgName, descr }) {
  const [windowSize] = useOutletContext(); // window's size variable
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    // Initialize rotation state based on initial window size
    setIsRotated(windowSize <= global.UTILS.TABLET_WIDTH);
  }, [windowSize]);

  const handleMobileClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <>
      <div className="card-main-container">
        <div
          className={`card-inner-container ${
            isRotated ? "" : "mobile-rotated"
          }`}
          onClick={handleMobileClick}
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
    </>
  );
}
