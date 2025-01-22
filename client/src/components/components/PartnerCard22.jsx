import React from "react";

export default function PartnerCard22({ imgSrc }) {
  return (
    <div className="col-lg-4 col-sm-6 mb-5 mt-5 d-flex justify-content-center">
      <div
        className="portfolio-item"
        style={{
          aspectRatio: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "10px"
        }}
      >
        <img
          className="img-fluid"
          src={imgSrc}
          alt="TEDx Sponsor"
          style={{
            width: "150px",
            padding: "0 10px"
          }}
        />
      </div>
    </div>
  );
}
