import "../../index.css";
import React, { useState } from "react";
import Image from "../images/Cos_èTED.webp"; //fare bianco
import Image1 from "../images/Cos_èTEDx.webp"; //fare bianco
import Image2 from "../images/logo-white.png"; // fare  bianco

import Image3 from "../images/missionvision23/stage23.webp";

import Image11 from "../images/missionvision23/DSC00149.jpg";
import Image13 from "../images/missionvision23/DSC04914.jpg";
import Image14 from "../images/missionvision23/DSC05278.jpg";
import Image15 from "../images/missionvision23/PHP07700.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-bootstrap/Carousel";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";

/**
 * Mission and Vision page
 */
export default function MissionandVision() {
  const [windowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <div style={{ backgroundColor: "#000" }}>
          <section
            style={{
              marginTop: global.UTILS.NAV_HEIGHT,
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
                    }}
                  >
                    TED è un'organizzazione no profit dedicata alla diffusione
                    di idee sotto forma di discorsi brevi e potenti (18 minuti o
                    meno). TED è nato nel 1984 come una conferenza in cui
                    tecnologia, intrattenimento e design convergevano e oggi
                    copre quasi tutti gli argomenti, dalla scienza al business
                    alle questioni globali, in più di 100 lingue. L'obiettivo è
                    quello di diffondere e sostenere idee di valore per cambiare
                    il mondo.
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
                      }}
                    >
                      Per poter ampliare la diffusione delle idee di valore, TED
                      ha creato un programma apposito, il TEDx, ossia degli
                      eventi locali organizzati in modo indipendente ma sempre
                      con lo spirito di una vera e propria conferenza TED, che
                      infatti concede la propria licenza.
                    </p>
                  </div>
                </div>

                <hr className="featurette-divider"></hr>

                {/**TEDX Sapienza U */}
                <div className="row featurette">
                  <div className="col-md-7 order-md-2 mt-4">
                    <LazyLoadImage
                      src={Image2}
                      alt="TedxSapienzaU"
                      height="70"
                    />
                    <p
                      className="lead mt-3"
                      style={{
                        color: "#FFF",
                        textAlign: "justify",
                        fontFamily: "Fira sans Extra Condensed",
                      }}
                    >
                      È il TEDx Universitario dell'Ateneo Sapienza
                      dell'Università di Roma, gode della licenza ufficiale
                      concessa da TED Foundation e del supporto della Magnifica
                      Rettrice Antonella Polimeni insieme all'Area Supporto alla
                      Ricerca e Trasferimento Tecnologico. L'evento, nato nel
                      2021 dallo stimolo di alcuni studenti dell'Ateneo, è
                      giunto ora alla sua terza edizione. Organizzato unicamente
                      da studenti e dottorandi del primo Ateneo romano, grazie
                      all'associazione riconosciuta <b>"SapienzaU"</b> con
                      l'obiettivo di creare per l'intera comunità accademica una
                      programmazione sempre nuova e internazionale.
                    </p>
                    <a className="link" href={"/partners"}>
                      <button
                        style={{
                          backgroundColor: global.COLORS.ROSSO_TED_2023,
                          padding: "8px 32px",
                          color: "white",
                          border: "none",
                          fontSize: "18px",
                          borderRadius: "8px",
                          fontWeight: "bold",
                        }}
                      >
                        Collabora con noi{" "}
                      </button>
                    </a>
                  </div>
                  <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                    <LazyLoadImage
                      src={Image3}
                      alt="TedxSapienzaU"
                      height="400"
                    />
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
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div style={{ backgroundColor: "#000" }}>
          <section
            style={{
              marginTop: "80px",
              marginBottom: "-50px",
              backgroundColor: global.COLORS.NERO,
            }}
          >
            <div className="container-lg marketing">
              {/* Cos'è TED */}
              <div className="row featurette mt-5 mb-5">
                <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                  <LazyLoadImage src={Image} alt="Cos'èTED" height="50" />
                </div>
                <div className="col-md-7 order-md-2 mt-3">
                  <p
                    className="lead"
                    style={{
                      color: "#FFF",
                      fontFamily: "Fira sans Extra Condensed",
                      textAlign: "justify",
                    }}
                  >
                    TED è un'organizzazione no profit dedicata alla diffusione
                    di idee sotto forma di discorsi brevi e potenti (18 minuti o
                    meno). TED è nato nel 1984 come una conferenza in cui
                    tecnologia, intrattenimento e design convergevano e oggi
                    copre quasi tutti gli argomenti, dalla scienza al business
                    alle questioni globali, in più di 100 lingue. L'obiettivo è
                    quello di diffondere e sostenere idee di valore per cambiare
                    il mondo.
                  </p>
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              {/* Cos'è TEDx */}
              <div className="marketing mt-4">
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
                      }}
                    >
                      Per poter ampliare la diffusione delle idee di valore, TED
                      ha creato un programma apposito, il TEDx, ossia degli
                      eventi locali organizzati in modo indipendente ma sempre
                      con lo spirito di una vera e propria conferenza TED, che
                      infatti concede la propria licenza.
                    </p>
                  </div>
                </div>

                <hr className="featurette-divider"></hr>

                {/**TEDx Sapienza U */}
                <div className="row featurette mt-4">
                  <div className="col-md-7 order-md-2 mt-4">
                    <LazyLoadImage
                      src={Image2}
                      alt="TEDxSapienzaU"
                      height="70"
                    />
                    <p
                      className="lead mt-3"
                      style={{
                        color: "#FFF",
                        textAlign: "justify",
                        fontFamily: "Fira sans Extra Condensed",
                      }}
                    >
                      È il TEDx Universitario dell'Ateneo Sapienza
                      dell'Università di Roma, gode della licenza ufficiale
                      concessa da TED Foundation e del supporto della Magnifica
                      Rettrice Antonella Polimeni insieme all'Area Supporto alla
                      Ricerca e Trasferimento Tecnologico. L'evento, nato nel
                      2021 dallo stimolo di alcuni studenti dell'Ateneo, è
                      giunto ora alla sua terza edizione. Organizzato unicamente
                      da studenti e dottorandi del primo Ateneo romano, grazie
                      all'associazione riconosciuta <b>"SapienzaU"</b> con
                      l'obiettivo di creare per l'intera comunità accademica una
                      programmazione sempre nuova e internazionale.
                    </p>
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
                            fontSize: "18px",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          Collabora con noi{" "}
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                    <LazyLoadImage
                      src={Image3}
                      alt="TedxSapienzaU"
                      height="300"
                    />
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
