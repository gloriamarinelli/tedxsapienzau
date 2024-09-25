import React from "react";

export default function PartnerCardCommunity({ imgSrc, text,  link }) {
  return (
    <>
      <div
        className="col-lg-3 mb-4 d-flex justify-content-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="container mb-5">
          <div className="card-proC">
            <a className="butC" href={link} target="_blank" rel="noreferrer">
              <div className="card-projectsC">
                <div className="overlayC">
                  <p>
                    <strong>{text}</strong>
                  </p>
                </div>
                <img src={`/images/partners23/${imgSrc}`} alt="TEDx Sponsor" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
