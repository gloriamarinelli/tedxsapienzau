import React from "react";

export default function PartnerCard24({ title, imgName, text }) {
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
          <div className="card-back">{text}</div>
        </div>
        <div style={{ fontWeight: "bold" }}>{title}</div>
      </div>
    </>
  );
}
