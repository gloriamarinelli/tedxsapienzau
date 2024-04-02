import React from "react";

export default function PartnerCard24({
  title,
  imgSrc,
  text,
  sponsorType,
  link,
}) {
  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <h2
          style={{
            fontFamily: "GothamBold",
            fontSize: "2em",
          }}
        >
          {title}
        </h2>

        <div className="container mb-5">
          <div className="card-pro">
            <div className="card-projects card-projects-24">
              <input type="checkbox" className="btn1 btn1-24" />
              <a className="but" href={link} target="_blank" rel="noreferrer">
                <div>
                  <img
                    src={`/images/partners24/${imgSrc}`}
                    alt="TEDx Sponsor"
                  />
                </div>
              </a>
              <div className="overlay overlay-24">
                <p style={{ textAlign: "justify", paddingRight: "15px" }}>
                  <strong>{text}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
