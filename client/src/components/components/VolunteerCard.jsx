import React from "react";

export default function VolunteerCard({
  id,
  nome,
  gruppo,
  ruolo,
  image,
  link,
  year,
}) {
  if (year == 2023) {
    return (
      <>
        <div
          key={id}
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
          <img
            src={
              year === 2023
                ? `/images/team23/${image}`
                : `data:image/*;base64,${image}`
            }
            height="280"
            alt="foto volontario"
            style={{ maxWidth: "300px", objectFit: "cover" }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
            }}
          >
            <a
              href={link}
              style={{
                color: "black",
                textDecoration: "none",
                cursor: link && "pointer",
              }}
            >
              <div
                className="portfolio-caption-heading"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                {nome}
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
  if (year == 2022) {
    return (
      <>
        <div
          key={id}
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
          <img
            src={
              year === 2022
                ? `/images/team22/${image}`
                : `data:image/*;base64,${image}`
            }
            height="280"
            alt="foto volontario"
            style={{ maxWidth: "300px", objectFit: "cover" }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
            }}
          >
            <a
              href={link}
              style={{
                color: "black",
                textDecoration: "none",
                cursor: link && "pointer",
              }}
            >
              <div
                className="portfolio-caption-heading"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                {nome}
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
}
