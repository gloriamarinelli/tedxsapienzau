import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../../resources/global.json";
import Earth from "../../images/earth.webp";
import CountdownLogo from "../../images/countdown_logo.webp";
import "../../../index.css";
import "../../../resources/styles/home.css";
import Countdown from "../../components/Countdown";
import SpeakerCard from "../../components/SpeakerCard";

import AlessandroCorsiniImage from "../../images/countdown24/AlessandroCorsini.webp";
import RaffaellaAbateImage from "../../images/countdown24/RaffaellaAbate.webp";
import MarceloEnriqueContiImage from "../../images/countdown24/MarceloEnriqueConti.webp";
import SabrinaLucibelloImage from "../../images/countdown24/SabrinaLucibello.webp";
import BrunoMazzaraImage from "../../images/countdown24/BrunoMazzara.webp";
import NunzioAlloccaImage from "../../images/countdown24/NunzioAllocca.webp";

const NewsSidebarSize = 18;

const speakersInfo = [
  {
    nomeSpeaker: "Alessandro Corsini",
    ruoloSpeaker: "Professore Ordinario di Macchine a Fluido",
    link: "https://corsidilaurea.uniroma1.it/it/users/alessandrocorsiniuniroma1it",
    imgSrc: AlessandroCorsiniImage,
  },
  {
    nomeSpeaker: "Raffaella Abate",
    ruoloSpeaker: "Dottoranda in Psicologia Dinamica e Clinica",
    link: "https://research.uniroma1.it/researcher/8b60c7379ba8ad0f753282348cc599974f0d56dc91c31f9bef7a573d",
    imgSrc: RaffaellaAbateImage,
  },
  {
    nomeSpeaker: "Marcelo Enrique Conti",
    ruoloSpeaker:
      "Professore Ordinario di Management Ambientale e Sostenibilità",
    link: "https://corsidilaurea.uniroma1.it/it/users/marcelocontiuniroma1it",
    imgSrc: MarceloEnriqueContiImage,
  },
  {
    nomeSpeaker: "Sabrina Lucibello",
    ruoloSpeaker: "Professoressa ordinaria in Disegno Industriale",
    link: "https://research.uniroma1.it/researcher/ee71bff0ec967dd4fe3bb096af968cd53d93f861490fd84160c96484?page=1",
    imgSrc: SabrinaLucibelloImage,
  },
  {
    nomeSpeaker: "Bruno Mazzara",
    ruoloSpeaker: "Professore Ordinario di Comunicazione e Ricerca Sociale",
    link: "https://corsidilaurea.uniroma1.it/it/users/brunomazzarauniroma1it",
    imgSrc: BrunoMazzaraImage,
  },
  {
    nomeSpeaker: "Nunzio Allocca",
    ruoloSpeaker: "Professore Associato di Storia e Scienze delle tecniche",
    link: "",
    imgSrc: NunzioAlloccaImage,
  },
];

export default function ArchivedCountdown24() {
  const [windowSize, setWindowSize] = useOutletContext();
  const [scrollY, setScrollY] = useState(0);

  const svgRef = useRef();

  useEffect(() => {
    // create a function that listens for the scroll event
    window.addEventListener("scroll", () => handleYScroll());

    /**
     * This function is used to animate the SVG path of the homepage
     * The animation is triggered by the scroll event that changes the strokeDashoffset of the path
     * The path is drawn as the user scrolls down the page
     * Animation and path are only visible on desktop due to the size of the screen
     * @author @simoneteglia
     */
    if (windowSize > 1100) {
      let path = svgRef.current.querySelector("path");
      let length = path.getTotalLength();

      path.style.strokeDasharray = length + " " + length;

      let offset = windowSize > 1360 ? 6500 : 5500;
      path.style.strokeDashoffset = offset;

      window.addEventListener("scroll", function () {
        let scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        let drawLength = length * scrollPercentage;

        path.style.strokeDashoffset = offset - drawLength;
      });
    }
  }, []);

  function handleYScroll() {
    setScrollY(window.scrollY);
  }

  const getShowMore = () => {
    // print the scroll height
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "Anton",
          padding: "0 0 10px 0",
          transition: "0.5s all",
          opacity: scrollY > 450 ? 0 : 1,
        }}
      >
        <p>Cos'è TEDx Countdown?</p>
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 15L13 22L25 15" stroke="white" stroke-width="2" />
          <path
            d="M1 8L13 15L25 8"
            stroke="white"
            stroke-opacity="0.5"
            stroke-width="2"
          />
          <path
            d="M1 0.999999L13 8L25 1"
            stroke="white"
            stroke-opacity="0.25"
            stroke-width="2"
          />
        </svg>
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
          {getShowMore()}
          {windowSize > 1360 ? (
            <svg
              width={"100%"}
              height={"100%"}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
              ref={svgRef}
              viewBox="0 0 1918 2692"
              fill="none"
            >
              <path
                d="M4.5 13.5C34.3333 0.999942 109.48 31.5142 124 135.001C155.5 359.5 112.5 664 455.5 614.003C974.806 538.307 854 274.5 683 337.001C580.571 374.439 582.029 514.713 854 810.004C1198 1183.5 545.179 1659.65 359.5 1454.01C-73 975.004 1236.14 721.159 854 1619.01C462 2540.01 782.848 2880.17 1165 2568.01C1675.5 2151.01 1563.5 2198.01 1918 2198.01"
                stroke={global.COLORS.GIALLO_COUNTDOWN}
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width={"100%"}
              height={"100%"}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
              ref={svgRef}
              viewBox="0 0 1570 2488"
              fill="none"
            >
              <path
                d="M-13.5 14.0001C16.3255 -0.240562 222 14 126.5 307.5C98.241 394.349 66.9936 695.703 331.5 615C703.5 501.5 576.104 31.4665 423.5 307.5C253.5 615 639 805.842 532.5 1078C278.362 1727.44 126.5 1430.36 126.5 1254.5C126.5 983 838.5 1349 599.5 1976.5C468.646 2320.06 680.948 2688.13 1063 2332.5C1333 2081.17 1479.5 1946.5 1576.5 1856"
                stroke="#F1FF39"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              paddingLeft: "7vw",
              justifyContent: "space-between",
              padding: "0 5vw 0 0",
            }}
          >
            <img
              src={Earth}
              alt="Earth"
              width={windowSize / 3.5}
              style={{
                maskImage:
                  "linear-gradient(to top right, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%)",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <img
                src={CountdownLogo}
                alt="Countdown Logo"
                width={windowSize > 1360 ? "900px" : "750px"}
                style={{ marginBottom: "-50px" }}
              />
              <Countdown language="it" />
              <a
                href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-countdown-879060833617"
                style={{
                  backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
                  color: "#000",
                  padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
                  borderRadius: global.UTILS.HALF_BENTO_BOX_PADDING,
                  fontSize: "22px",
                  fontFamily: "Fira Sans Extra Condensed",
                  textDecoration: "none",
                  cursor: "pointer",
                  zIndex: 2,
                  marginTop: "50px",
                }}
              >
                Ottieni i biglietti
              </a>
            </div>
          </div>
          <div
            style={{
              height: "80vh",
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                padding: "30px",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
                3, 2, 1MPATTO
              </h1>
              <p style={{ maxWidth: "40ch", color: "#fff" }}>
                Il tempo scorre ed è necessario creare un nuovo spazio di
                riflessione ed intrattenimento incentrato sulla crisi climatica.
                <br />
                <br />
                Un luogo dove affrontare le paure sul futuro con positività e
                scienza grazie ad una visione interdisciplinare e coinvolgente
                negli spazi del nostro Ateneo.
                <br />
                <br />
                Immergiti nel primo evento{" "}
                <span
                  style={{
                    color: global.COLORS.GIALLO_COUNTDOWN,
                    fontWeight: "bold",
                  }}
                >
                  TEDx Countdown
                </span>{" "}
                della Sapienza e lasciati ispirare dall'urgenza e dalla
                complessità di questa sfida globale per promuovere azioni
                concrete.
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100vw",
              backgroundColor: "black",
              textAlign: "center",
              marginTop: "50px",
              color: "#fff",
            }}
          >
            <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>SPEAKERS</h1>
            <div
              style={{
                width: "80%",
                margin: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {speakersInfo.map((speaker) => {
                const { nomeSpeaker, ruoloSpeaker, link, imgSrc } = speaker;
                return (
                  <SpeakerCard
                    key={nomeSpeaker}
                    nomeSpeaker={nomeSpeaker}
                    ruoloSpeaker={ruoloSpeaker}
                    link={link}
                    imgSrc={imgSrc}
                    showName={true}
                    event={"countdown24"}
                    style={{
                      zIndex: 2,
                      flex: "1 0 26%",
                      cursor: "initial",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  } else if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <a
          href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-countdown-879060833617"
          style={{
            position: "absolute",
            top: global.UTILS.NAV_HEIGHT,
            left: 0,
            width: "100%",
            height: "10vh",
            backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
            zIndex: 2,
            fontFamily: "Anton",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            textDecoration: "none",
          }}
        >
          <h1>OTTIENI I BIGLIETTI QUI</h1>
        </a>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              width: "100vw",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "0 0 50px 0",
              overflow: "hidden",
            }}
          >
            <img
              src={Earth}
              alt="Earth"
              height={"50%"}
              style={{
                alignSelf: "center",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%)",
              }}
            />
            <img
              src={CountdownLogo}
              alt="Countdown Logo"
              width={"80%"}
              style={{ marginTop: "-80px", marginBottom: "-50px" }}
            />
            <Countdown language="it" />
          </div>
          <div
            style={{
              height: "100%",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "justify",
            }}
          >
            <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
              3, 2, 1MPATTO
            </h1>
            <p style={{ maxWidth: "25ch", color: "#fff" }}>
              Il tempo scorre ed è necessario creare un nuovo spazio di
              riflessione ed intrattenimento incentrato sulla crisi climatica.
              <br />
              <br />
              Un luogo dove affrontare le paure sul futuro con positività e
              scienza grazie ad una visione interdisciplinare e coinvolgente
              negli spazi del nostro Ateneo.
              <br />
              <br />
              Immergiti nel primo evento{" "}
              <span
                style={{
                  color: global.COLORS.GIALLO_COUNTDOWN,
                  fontWeight: "bold",
                }}
              >
                TEDxCountdown
              </span>{" "}
              della Sapienza e lasciati ispirare dall'urgenza e dalla
              complessità di questa sfida globale per promuovere azioni
              concrete.
            </p>
          </div>
          <div
            style={{
              width: "100vw",
              backgroundColor: "black",
              textAlign: "center",
              marginTop: "50px",
              color: "#fff",
            }}
          >
            <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>SPEAKERS</h1>
            <div
              style={{
                width: "90%",
                margin: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {speakersInfo.map((speaker) => {
                const { nomeSpeaker, ruoloSpeaker, link, imgSrc } = speaker;
                return (
                  <SpeakerCard
                    key={nomeSpeaker}
                    nomeSpeaker={nomeSpeaker}
                    imgSrc={imgSrc}
                    link={link}
                    ruoloSpeaker={ruoloSpeaker}
                    showName={true}
                    event={"countdown24"}
                    style={{
                      zIndex: 2,
                      flex: "1 0 26%",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <a
          href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-countdown-879060833617"
          style={{
            position: "absolute",
            top: global.UTILS.NAV_HEIGHT,
            left: 0,
            width: "100%",
            height: "10vh",
            backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
            zIndex: 2,
            fontFamily: "Anton",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#000",
            textDecoration: "none",
          }}
        >
          <h1>OTTIENI I BIGLIETTI QUI</h1>
        </a>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              padding: " 80px 0",
              overflow: "hidden",
            }}
          >
            <img
              src={Earth}
              alt="Earth"
              width={"85%"}
              style={{
                alignSelf: "center",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%)",
              }}
            />
            <img
              src={CountdownLogo}
              alt="Countdown Logo"
              width={"80%"}
              style={{ marginTop: "-70px", marginBottom: "0px" }}
            />
            <Countdown language="it" />
          </div>
          <div
            style={{
              height: "100%",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "50px 0",
              backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
            }}
          >
            <h1 style={{ color: "#000" }}>3, 2, 1MPATTO</h1>
            <p style={{ maxWidth: "25ch", color: "#000" }}>
              Il tempo scorre ed è necessario creare un nuovo spazio di
              riflessione ed intrattenimento incentrato sulla crisi climatica.
              <br />
              <br />
              Un luogo dove affrontare le paure sul futuro con positività e
              scienza grazie ad una visione interdisciplinare e coinvolgente
              negli spazi del nostro Ateneo.
              <br />
              <br />
              Immergiti nel primo evento{" "}
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                TEDx Countdown{" "}
              </span>
              della Sapienza e lasciati ispirare dall'urgenza e dalla
              complessità di questa sfida globale per promuovere azioni
              concrete.
            </p>
          </div>
          <div
            style={{
              width: "100vw",
              backgroundColor: "black",
              textAlign: "center",
              marginTop: "50px",
              color: "#fff",
            }}
          >
            <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>SPEAKERS</h1>
            <div
              style={{
                width: "100%",
                margin: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {speakersInfo.map((speaker) => {
                const { nomeSpeaker, ruoloSpeaker, link, imgSrc } = speaker;
                return (
                  <SpeakerCard
                    key={nomeSpeaker}
                    nomeSpeaker={nomeSpeaker}
                    ruoloSpeaker={ruoloSpeaker}
                    link={link}
                    imgSrc={imgSrc}
                    showName={true}
                    event={"countdown24"}
                    style={{
                      zIndex: 2,
                      flex: "1 0 51%",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}