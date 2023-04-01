import React from "react";

export default function PartnerCard({ title, imgSrc, sponsorType }) {
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
        }}
      >
        
          <img
            className="img-fluid"
            src={imgSrc}
            alt="TedxSponsor"
            style={{
              maxWidth:
                sponsorType === "institutional" || sponsorType === "main"
                  ? "150px"
                  : "100px",
            }}
          />
        
      </div>
    </div>
  );
}
