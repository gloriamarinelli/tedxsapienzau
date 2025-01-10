import React from "react";

export default function PartnerCard24({ name, imgName, descr }) {
  return (
    <>
      <div className="card-main-container">
        <div className="card-inner-container">
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
        <div style={{ fontWeight: "bold" }}>{name}</div>
      </div>
    </>
  );
}
