import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image2 from "../images/awards24/abbozzo.webp";
import Image1 from "../images/awards24/dapoto.webp";
import Image5 from "../images/awards24/saltarelli.webp";
import Image4 from "../images/awards24/nardi.webp";
import Image3 from "../images/awards24/pasatu.webp";
import "../../index.css";
import global from "../../resources/global.json";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import logo from "../images/awards24/awards24.webp";
import arancione from "../images/joinus/arancione.webp";
import celeste from "../images/joinus/celeste.webp";
import blu from "../images/joinus/blu.webp";
import fucsia from "../images/joinus/fucsia.webp";
import rosa from "../images/joinus/rosa.webp";
import rosso from "../images/joinus/rosso.webp";
import verde from "../images/joinus/verde.webp";
import giallo from "../images/joinus/giallo.webp";


export default function Awards() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleYScroll);
  }, [windowSize]);

  function handleYScroll() {
    setScrollY(window.scrollY);

    // as the window scroll down move the div teamLogosBannerTop to the left
    let teamLogosBannerTop = document.getElementById("teamLogosBannerTop");
    if (teamLogosBannerTop) {
      teamLogosBannerTop.style.transform = `translateX(-${window.scrollY}px)`;
    }

    // as the window scroll down move the div teamLogosBannerBottom to the right
    let teamLogosBannerBottom = document.getElementById(
      "teamLogosBannerBottom"
    );
    if (teamLogosBannerBottom) {
      teamLogosBannerBottom.style.transform = `translateX(${window.scrollY}px)`;
    }
  }

  const getBannerTeamLogos = () => {
    const logoHeight = "40px";
    return (
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT} `,
          marginTop: global.UTILS.NAV_HEIGHT,
          position: "absolute",
        }}
      >
        <div
          id="teamLogosBannerTop"
          style={{
            width: "600vw",
            maxHeight: logoHeight,
            overflow: "hidden",

            bottom: 200,
          }}
        >
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
        </div>
        <div
          id="teamLogosBannerBottom"
          style={{
            width: "600vw",
            maxHeight: logoHeight,
            overflow: "hidden",
            position: "absolute",
            bottom: 500,
          }}
        >
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
        </div>
      </div>
    );
  };

  const getBannerTeamLogosMobile = () => {
    const logoHeight = "40px";
    return (
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT} `,
          marginTop: global.UTILS.NAV_HEIGHT,
          position: "absolute",
        }}
      >
        <div
          id="teamLogosBannerTop"
          style={{
            width: "600vw",
            maxHeight: logoHeight,
            overflow: "hidden",

            bottom: 200,
          }}
        >
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
        </div>
        <div
          id="teamLogosBannerBottom"
          style={{
            width: "600vw",
            maxHeight: logoHeight,
            overflow: "hidden",
            position: "absolute",
            bottom: 400,
          }}
        >
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
        </div>
      </div>
    );
  };

  if (windowSize > 1100) {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
          }}
        >
          <div
            style={{
              textAlign: "right",
              marginTop: global.UTILS.NAV_HEIGHT,
              marginRight: "40px",
              padding: "10px",
            }}
          >
            <img
              src={logo}
              alt="SapienzaU Awards"
              width={windowSize > 1360 ? "504px" : "420px"}
            />
          </div>

          {getBannerTeamLogos()}

          <div
            style={{
              height: "50vh",
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              paddingLeft: "7vw",
              justifyContent: "space-between",
              padding: "0 2vw 0 0",
            }}
          >
            <div className="col">
              <div className="row">
                <FontAwesomeIcon
                  className="col-2"
                  icon={faLocationDot}
                  style={{ color: global.COLORS.ROSSO_TED }}
                  size="3x"
                />
                <p
                  className="col-8"
                  style={{ color: global.COLORS.BIANCO, fontSize: "1vw" }}
                >
                  Università La Sapienza - Nuovo Teatro Ateneo Piazzale Aldo
                  Moro, 5, 00185 Roma RM
                </p>
              </div>
              <div className="row">
                <FontAwesomeIcon
                  className="col-2"
                  icon={faCalendar}
                  style={{ color: global.COLORS.ROSSO_TED }}
                  size="3x"
                />
                <p
                  className="col-8"
                  style={{ color: global.COLORS.BIANCO, fontSize: "1vw" }}
                >
                  28.11.2024
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div
            style={{
              fontFamily: "GothamBook",
            }}
          >
            <h1
              className="font-weight-bold mt-5 mb-3"
              style={{
                fontSize: "45px",
                textAlign: "center",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {t("event_awards2024.title")}
            </h1>
          </div>
          <div className="container mb-5 d-flex justify-content-center align-items-center flex-column mt-5">
            <p
              style={{
                fontSize: "25px",
                fontFamily: "GothamBook",
                maxWidth: "75ch",
                textAlign: "justify",
                lineHeight: "40px",
                color: "#fff",
              }}
            >
              <Trans
                i18nKey="event_awards2024.description"
                components={{
                  1: (
                    <strong style={{ color: global.COLORS.ROSSO_TED }}></strong>
                  ),
                  2: (
                    <strong style={{ color: global.COLORS.ROSSO_TED }}>
                      3{" "}
                    </strong>
                  ),
                }}
              />
            </p>
          </div>
        </section>
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontFamily: "GothamBook",
            color: "#fff",
          }}
        >
          {t("event_awards2024.winners")}
        </h1>
        <h3
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Artists
        </h3>
        <div
          class="container mt-5 mb-5"
          style={{
            alignItems: "center",
          }}
        >
          <div class="row justify-content-center" style={{ gap: "20px" }}>
            <div class="col-sm-4">
              {" "}
              <LazyLoadImage src={Image2} alt="SapienzaU" height="350" />
            </div>
            <div class="col-sm-4">
              {" "}
              <LazyLoadImage src={Image5} alt="SapienzaU" height="350" />
            </div>
          </div>
        </div>

        <h3
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Speakers
        </h3>
        <div class="container mt-5">
          <div class="row" style={{ gap: "20px" }}>
            <div class="col">
              <LazyLoadImage src={Image3} alt="SapienzaU" height="350" />
            </div>
            <div class="col">
              <LazyLoadImage src={Image4} alt="SapienzaU" height="350" />
            </div>
            <div class="col">
              <LazyLoadImage src={Image1} alt="SapienzaU" height="350" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
            padding: "0 20px",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginTop: global.UTILS.NAV_HEIGHT,
            }}
          >
            <img
              src={logo}
              alt="SapienzaU Awards"
              width="80%"
              style={{ marginBottom: "-30px" }}
            />
          </div>

          {getBannerTeamLogosMobile()}

          <div
            style={{
              height: "50vh",
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              paddingLeft: "7vw",
              justifyContent: "space-between",
              padding: "0 2vw 0 0",
            }}
          >
            <div className="col">
              <div className="row">
                <FontAwesomeIcon
                  className="col-2"
                  icon={faLocationDot}
                  style={{ color: global.COLORS.ROSSO_TED }}
                  size="3x"
                />
                <p
                  className="col-8"
                  style={{ color: global.COLORS.BIANCO, fontSize: "4vw" }}
                >
                  Università La Sapienza - Nuovo Teatro Ateneo Piazzale Aldo
                  Moro, 5, 00185 Roma RM
                </p>
              </div>
              <div className="row">
                <FontAwesomeIcon
                  className="col-2"
                  icon={faCalendar}
                  style={{ color: global.COLORS.ROSSO_TED }}
                  size="3x"
                />
                <p
                  className="col-8"
                  style={{ color: global.COLORS.BIANCO, fontSize: "4vw" }}
                >
                  28.11.2024
                </p>
              </div>
            </div>
          </div>
          <h1
            className="font-weight-bold mt-5 mb-3"
            style={{
              fontSize: "45px",
              textAlign: "center",
              fontFamily: "GothamBook",
              color: "#fff",
            }}
          >
            {t("event_awards2024.title")}
          </h1>

          <div className="container d-flex justify-content-center align-items-center flex-column mt-4 mb-5">
            <p
              style={{
                fontSize: "18px",
                fontFamily: "GothamBook",
                maxWidth: "90%",
                textAlign: "justify",
                lineHeight: "28px",
                color: "#fff",
              }}
            >
              <Trans
                i18nKey="event_awards2024.description"
                components={{
                  1: (
                    <strong style={{ color: global.COLORS.ROSSO_TED }}></strong>
                  ),
                  2: (
                    <strong style={{ color: global.COLORS.ROSSO_TED }}>
                      3{" "}
                    </strong>
                  ),
                }}
              />
            </p>
          </div>
        </section>
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontFamily: "GothamBook",
            color: "#fff",
          }}
        >
          {t("event_awards2024.winners")}
        </h1>
        <h3
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Artists
        </h3>
        <div
          class="container mt-5 mb-5"
          style={{
            alignItems: "center",
          }}
        >
          <div class="row justify-content-center" style={{ gap: "20px" }}>
            <div class="col-sm-4">
              {" "}
              <LazyLoadImage src={Image2} alt="SapienzaU" height="350" />
            </div>
            <div class="col-sm-4">
              {" "}
              <LazyLoadImage src={Image5} alt="SapienzaU" height="350" />
            </div>
          </div>
        </div>

        <h3
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Speakers
        </h3>
        <div class="container mt-5">
          <div class="row" style={{ gap: "20px" }}>
            <div class="col">
              <LazyLoadImage src={Image3} alt="SapienzaU" height="350" />
            </div>
            <div class="col">
              <LazyLoadImage src={Image4} alt="SapienzaU" height="350" />
            </div>
            <div class="col">
              <LazyLoadImage src={Image1} alt="SapienzaU" height="350" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
