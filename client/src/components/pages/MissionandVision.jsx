import "../../index.css";
import React, { useState } from "react";
import Image from "../images/Cos_èTED.webp"; //fare bianco
import Image1 from "../images/Cos_èTEDx.webp"; //fare bianco
import Image2 from "../images/logo-white.png"; // fare  bianco

import Image11 from "../images/missionvision23/DSC00149.jpg";
import Image13 from "../images/missionvision23/DSC04914.jpg";
import Image14 from "../images/missionvision23/DSC05278.jpg";
import Image15 from "../images/missionvision23/PHP07700.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-bootstrap/Carousel";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";

/**
 * Mission and Vision page
 */
export default function MissionandVision() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();

  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            marginTop:
              windowSize > global.UTILS.MOBILE_WIDTH
                ? global.UTILS.NAV_HEIGHT
                : "80px",
            marginBottom: "-50px",
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <div className="container-lg marketing">
            {/* Cos'è TED */}
            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                <LazyLoadImage src={Image} alt="Cos'èTED" height="50" />
              </div>
              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="lead"
                  style={{
                    color: "#FFF",
                    textAlign: "justify",
                    fontFamily: "Fira sans Extra Condensed",
                    fontWeight:
                      windowSize > global.UTILS.MOBILE_WIDTH ? "400" : "0", //??
                    textAlign: "justify", //??
                  }}
                >
                  {t("mission.ted")}
                </p>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            {/* Cos'è TEDx */}
            <div className="marketing">
              <div className="row featurette">
                <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                  <LazyLoadImage src={Image1} alt="Cos'èTEDx" height="50" />
                </div>
                <div className="col-md-7 order-md-2 mt-3">
                  <p
                    className="lead"
                    style={{
                      color: "#FFF",
                      textAlign: "justify",
                      fontFamily: "Fira sans Extra Condensed",
                      fontWeight:
                        windowSize > global.UTILS.MOBILE_WIDTH ? "400" : "0", //??
                    }}
                  >
                    {t("mission.tedx")}
                  </p>
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              {/**TEDX Sapienza U */}
              <div className="marketing">
                <div className="row featurette">
                  <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                    <LazyLoadImage
                      src={Image2}
                      alt="TEDxSapienzaU"
                      height="70"
                    />
                  </div>
                  <div className="col-md-7 order-md-2 mt-3">
                    <p
                      className="lead"
                      style={{
                        color: "#FFF",
                        textAlign: "justify",
                        fontFamily: "Fira sans Extra Condensed",
                        fontWeight:
                          windowSize > global.UTILS.MOBILE_WIDTH ? "400" : "0", //??
                      }}
                    >
                      {t("mission.tedxsapienzau1")}
                      <b>{t("mission.sapienzau")}</b>
                      {t("mission.tedxsapienzau2")}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a className="link" href={"/partners"}>
                    <button
                      style={{
                        backgroundColor: global.COLORS.ROSSO_TED_2023,
                        padding: "8px 32px",
                        color: "white",
                        border: "none",
                        fontSize:
                          windowSize > global.UTILS.MOBILE_WIDTH
                            ? "18px"
                            : "36px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontFamily: "Fira sans Extra Condensed",
                        marginBottom:
                          windowSize > global.UTILS.MOBILE_WIDTH
                            ? "0px"
                            : "20px",
                      }}
                    >
                      {t("mission.button")}
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/** CAROUSEL */}
            <div className="container mb-5 mt-5">{CarouselComponent()}</div>
          </div>
        </section>
      </div>
    </>
  );
}

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      variant="black"
      style={{ width: "70%", margin: "auto" }}
    >
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image11}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image13}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image14}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image15}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
