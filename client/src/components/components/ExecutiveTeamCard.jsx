import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import global from "../../resources/global.json";
import Info from "./Info.jsx"


function handleBoardInfos24({ informazioni }) {
  return informazioni.map((value, index) => (
    <Info
      key={index} // Ensure each component has a unique key
      x={value.x}
      y={value.y}
      name={value.name}
      team={value.team}
    />
  ));
}

const BoardNameStyle = {
  margin: "30px 0",
  fontFamily: "Fira Sans Extra Condensed, sans-serif",
  fontSize: "50px",
  backgroundColor: global.COLORS.NERO, //! Cambiare colore
  color: "#fff",
};


export default function ExecutiveTeamCard({
  id,
  nome,
  gruppo,
  ruolo,
  image,
  link,
  year,
  infos,
}) {
  if (year === 2024) {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center", 
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            backgroundColor: "black",
          }}
        >
          <h1 style={BoardNameStyle}>Board</h1>
          {infos ? handleBoardInfos24({ informazioni: infos }) : null}
          <img
            src={require("../images/foto.png")}
            alt="Test"
            style={{
              maxWidth: "70%",
              height: "auto",
            }}
          />
        </div>
      </>
    );

  }
  if (year === 2023) {
    return (
      <div
        key={id}
        className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
        style={{
          position: "relative",
          backgroundColor: global.COLORS.NERO, //! Cambiare colore
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            border: "2px solid transparent",
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              textDecoration: "none",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>

          <img
            src={`/images/team23/${image}`}
            width="245px"
            height="350px"
            alt="foto team esecutivo"
            style={{
              borderRadius: "20px 20px 0 0",
              objectFit: "cover",
              //backgroundColor: "#1f1f1f",
            }}
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
            <div
              className="portfolio-caption-heading"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "23px",
                color: "#fff",
              }}
            >
              {nome}
            </div>

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
      </div>
    );
  }
  if (year === 2022) {
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
