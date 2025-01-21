import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image1 from "../images/awards22/artist1.jpg";
import Image4 from "../images/awards22/speaker1.jpg";
import Image3 from "../images/awards22/speaker2.jpg";
import Image5 from "../images/awards22/speaker3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import global from "../../resources/global.json";
import { Trans, useTranslation } from "react-i18next";

export default function Awards2022() {
  const { t } = useTranslation();
  return (
    <section
      className="pb-5"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <header
        className="header-awards22"
        style={{
          textAlign: "center",
          height: "45vh",
        }}
      ></header>

      <div className="where-is-the-event-awards row mx-0 pt-3 pb-3">
        <div className="col-md-6">
          <div className="row">
            <FontAwesomeIcon
              className="col-2"
              icon={faLocationDot}
              style={{ color: "#ffd800" }}
              size="2x"
            />
            <p className="col-8">
              Università La Sapienza - Nuovo Teatro Ateneo Piazzale Aldo Moro,
              5, 00185 Roma RM
            </p>
          </div>
          <div className="row">
            <FontAwesomeIcon
              className="col-2"
              icon={faCalendar}
              style={{ color: "#ffd800" }}
              size="2x"
            />
            <p className="col-8">29.04.2022</p>

            <div className="row mt-3"></div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="container mb-5 d-flex justify-content-center align-items-center flex-column">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {t("event_awards2022.title")}
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            maxWidth: "75ch",
            textAlign: "justify",
            lineHeight: "40px",
          }}
        >
          <Trans
            i18nKey="event_awards2022.description"
            components={{
              1: <strong></strong>,
              2: <strong style={{ color: global.COLORS.ROSSO_TED }}>3 </strong>,
            }}
          />
        </p>
      </div>

      <h1
        className="font-weight-bold mt-5 mb-3"
        style={{
          fontSize: "45px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {t("event_awards2022.winners")}
      </h1>
      <h3
        className="font-weight-bold mt-5 mb-3"
        style={{
          fontSize: "45px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Artist
      </h3>
      <div
        class="container mt-5 mb-5"
        style={{
          alignItems: "center",
        }}
      >
        <div
          class="row justify-content-center"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div
            class="col-sm-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            <LazyLoadImage src={Image1} alt="TEDxSapienzaU" height="350" />
          </div>
        </div>
      </div>

      <h3
        className="font-weight-bold mt-5 mb-3"
        style={{
          fontSize: "45px",
          textAlign: "center",
        }}
      >
        Speakers
      </h3>
      <div
        class="container mt-5"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          class="row"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div
            class="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <LazyLoadImage src={Image3} alt="TEDxSapienzaU" height="350" />
          </div>
          <div
            class="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <LazyLoadImage src={Image4} alt="TEDxSapienzaU" height="350" />
          </div>
          <div
            class="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <LazyLoadImage src={Image5} alt="TEDxSapienzaU" height="350" />
          </div>
        </div>
      </div>
    </section>
  );
}
