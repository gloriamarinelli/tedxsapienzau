import React from "react";
import global from "../../resources/global.json";

export default function ExecutiveTeamCard({
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
          className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
          style={{
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
            width="245px"
            height="350px"
            alt="foto team esecutivo"
            style={{ borderRadius: "20px 20px 0 0", objectFit: "cover" }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
              backgroundColor: "#000",
              color: "#fff",
              width: "245px",
              borderRadius: "0 0 20px 20px",
              padding: "20px 0",
              height: "120px",
            }}
          >
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <div
                className="portfolio-caption-heading"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "23px",
                }}
              >
                {nome}
              </div>
            </a>
            <div
              className="portfolio-caption-heading"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {ruolo}
            </div>
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
          className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
          style={{
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
            width="245px"
            height="350px"
            alt="foto team esecutivo"
            style={{ borderRadius: "20px 20px 0 0", objectFit: "cover" }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
              backgroundColor: "#000",
              color: "#fff",
              width: "245px",
              borderRadius: "0 0 20px 20px",
              padding: "20px 0",
              height: "120px",
            }}
          >
            <a
              href={link}
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <div
                className="portfolio-caption-heading"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "23px",
                }}
              >
                {nome}
              </div>
            </a>
            <div
              className="portfolio-caption-heading"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {ruolo}
            </div>
          </div>
        </div>
      </>
    );
  }
}
