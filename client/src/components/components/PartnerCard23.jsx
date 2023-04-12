import React from "react";

export default function PartnerCard23({ imgSrc, text, sponsorType }) {
  return (
    <>
      <div
        className="col-lg-3 col-md-4 col-sm-12 mb-4 d-flex justify-content-center"
        style={{
          aspectRatio: 1,
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="container mb-5">
          <div className="card-pro">
            <div className="card-projects">
              <input type="checkbox" className="btn1" />
              <div className="overlay">
                <p>
                  <strong>{text}</strong>
                </p>
              </div>
              <img src={imgSrc} alt="TEDx Sponsor" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
