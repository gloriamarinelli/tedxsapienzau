import React, { useState, useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-bootstrap/Carousel";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

/**
 * Mission and Vision page
 */
export default function MissionandVision() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();

  useEffect(() => {
    console.log(i18next.language);
  }, []);

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
                <LazyLoadImage
                  src={
                    i18next.language == "it"
                      ? `${process.env.PUBLIC_URL}/images/logos/Cosa_TED.webp`
                      : `${process.env.PUBLIC_URL}/images/logos/whatis_TED.webp`
                  }
                  alt="Cos'èTED"
                  height="50"
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
                  <LazyLoadImage
                    src={
                      i18next.language == "it"
                        ? `${process.env.PUBLIC_URL}/images/logos/Cosa_TEDx.webp`
                        : `${process.env.PUBLIC_URL}/images/logos/whatis_TEDX.webp`
                    }
                    alt="Cos'èTEDx"
                    height="50"
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
                      src={`${process.env.PUBLIC_URL}/images/logo-white.png`}
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
          src={`${process.env.PUBLIC_URL}/images/missionandvision/DSC00149.webp`}
          alt="First slide"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={`${process.env.PUBLIC_URL}/images/missionandvision/DSC04914.webp`}
          alt="Second slide"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={`${process.env.PUBLIC_URL}/images/missionandvision/DSC05278.webp`}
          alt="Third slide"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={`${process.env.PUBLIC_URL}/images/missionandvision/PHP07700.webp`}
          alt="Fourth slide"
          loading="lazy"
        />
      </Carousel.Item>
    </Carousel>
  );
};
