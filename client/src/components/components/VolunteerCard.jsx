import React, {useState} from "react";
import "../../resources/styles/volunteerCard.css";
import global from "../../resources/global.json";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function VolunteerCard({
  id,
  nome,
  gruppo,
  ruolo,
  image,
  link,
  year,
}) {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  if (year == 2024) {
    return (
      <>
        <div
          key={id}
          className="col-lg-3 col-md-4 col-sm-12 mb-4 custom-card-container"
          
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={`custom-card ${hovered ? '' : 'hovered'}`}>
            <img
              src={
                year === 2024
                  ? `/images/team24/${image}`
                  : `data:image/*;base64,${image}`
              }
              height="280"
              alt="foto volontario"
              className="custom-card-image"
            />

            <div className="custom-card-caption">

              {link == null ? (
                <a
                  href={link}
                  className="custom-card-link"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    cursor: link ? "pointer" : "default",
                  }}
                >
                  <div className="custom-card-heading"
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    style ={{
                      color: hovered2 ? global.COLORS.ROSSO_TED : "#fff",
                    }}
                  >
                    {nome+" "}
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                  </div>
                </a>
                ) : (
                  <div className="custom-card-heading">
                    {nome}
                  </div>
                )}
              
            </div>
          </div>
        </div>
      </>
    );
  }
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
