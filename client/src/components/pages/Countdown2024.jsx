import React, { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router";

import global from "../../resources/global.json";
import Earth from "../images/earth.webp";
import CountdownLogo from "../images/countdown_logo.webp";
import AlessandroCorsiniImage from "../images/countdown24/AlessandroCorsini.webp";
import RaffaellaAbateImage from "../images/countdown24/RaffaellaAbate.webp";
import MarceloEnriqueContiImage from "../images/countdown24/MarceloEnriqueConti.webp";
import SabrinaLucibelloImage from "../images/countdown24/SabrinaLucibello.webp";
import BrunoMazzaraImage from "../images/countdown24/BrunoMazzara.webp";
import NunzioAlloccaImage from "../images/countdown24/NunzioAllocca.webp";
import SpeakerCard from "../components/SpeakerCard";

export default function Countdown2024() {
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
    // if (windowSize > 1100) {
    //   let path = svgRef.current.querySelector("path");
    //   let length = path.getTotalLength();

    //   path.style.strokeDasharray = length + " " + length;

    //   let offset = windowSize > 1360 ? 6500 : 5500;
    //   path.style.strokeDashoffset = offset;

    //   window.addEventListener("scroll", function () {
    //     let scrollPercentage =
    //       (document.documentElement.scrollTop + document.body.scrollTop) /
    //       (document.documentElement.scrollHeight -
    //         document.documentElement.clientHeight);

    //     let drawLength = length * scrollPercentage;

    //     path.style.strokeDashoffset = offset - drawLength;
    //   });
    // }
  }, []);

  function handleYScroll() {
    setScrollY(window.scrollY);
  }

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
          padding: "0 0 40px 0",
          transition: "0.5s all",
        }}
      >
        <p>Cos'è TEDx Countdown?</p>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
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

  if (windowSize > global.UTILS.MOBILE_WIDTH)
    return (
      <>
        <section
          style={{
            width: "100vw",
            height: `calc(120vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "5em",
          }}
        >
          <img
            src={Earth}
            alt="Earth"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              marginBottom: "-250px",
              width: windowSize > 1100 ? "" : "500px",
            }}
          />
          <img
            src={CountdownLogo}
            alt="Countdown Logo"
            style={{
              marginBottom: "-40px",
              zIndex: 2,
              mixBlendMode: "screen",
              width: windowSize > 1100 ? "" : "600px",
            }}
          />
          <h1
            style={{
              color: "#fff",
              fontFamily: "Anton",
              fontSize: "100px",
              marginLeft: "1ch",
              marginBottom: "10px"
            }}
          >
            <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
              {" "}
              31 | 0
            </span>
            5 | 24
          </h1>
          <h4
            style={{ color: global.COLORS.GIALLO_COUNTDOWN, marginLeft: "3ch",  backgroundColor: "#000", }}
          >
            Nuovo Teatro Ateneo
          </h4>
        </section>
        <section
          style={{
            width: "100vw",
            height: "100%",
            backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
            color: "#000",
            fontFamily: "Anton",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
            textAlign: "justify",
          }}
        >
          <h1 style={{}}>3, 2, 1MPATTO</h1>
          <p style={{ maxWidth: "60ch", fontSize: "20px" }}>
            Il tempo scorre ed è necessario creare un nuovo spazio di
            riflessione ed intrattenimento incentrato sulla crisi climatica. Un
            luogo dove affrontare le paure sul futuro con positività e scienza
            grazie ad una visione interdisciplinare e coinvolgente negli spazi
            del nostro Ateneo. Immergiti nel primo evento{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              TEDx Countdown
            </span>{" "}
            della Sapienza e lasciati ispirare dall'urgenza e dalla complessità
            di questa sfida globale per promuovere azioni concrete.
          </p>
          <div>
            <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>SPEAKERS</h1>
            <div
              style={{
                width: "70%",
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
                      flex: "1 0 32%",
                      cursor: "initial",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  else
    return (
      <>
        <section
          style={{
            width: "100vw",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "2em",
          }}
        >
          <img
            src={Earth}
            alt="Earth"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              width: windowSize * 0.8,
              marginBottom: "-100px",
            }}
          />
          <img
            src={CountdownLogo}
            alt="Countdown Logo"
            style={{
              zIndex: 2,
              mixBlendMode: "screen",
              width: windowSize * 0.8,
            }}
          />
          <h1
            style={{
              color: "#fff",
              fontFamily: "Anton",
              fontSize: "60px",
              marginLeft: "1ch",
            }}
          >
            <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
              {" "}
              31 | 0
            </span>
            5 | 24
          </h1>
          <p
            style={{ color: global.COLORS.GIALLO_COUNTDOWN, marginLeft: "3ch",  backgroundColor: "#000", }}
          >
            Nuovo Teatro Ateneo
          </p>
       
        </section>
        {getShowMore()}
        <section
          style={{
            width: "100vw",
            height: "100%",
            backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
            color: "#000",
            fontFamily: "Anton",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h1 style={{}}>3, 2, 1MPATTO</h1>
          <p style={{ maxWidth: "60ch", fontSize: "20px" }}>
            Il tempo scorre ed è necessario creare un nuovo spazio di
            riflessione ed intrattenimento incentrato sulla crisi climatica. Un
            luogo dove affrontare le paure sul futuro con positività e scienza
            grazie ad una visione interdisciplinare e coinvolgente negli spazi
            del nostro Ateneo. Immergiti nel primo evento{" "}
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              TEDx Countdown
            </span>{" "}
            della Sapienza e lasciati ispirare dall'urgenza e dalla complessità
            di questa sfida globale per promuovere azioni concrete.
          </p>
          <div>
            <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>SPEAKERS</h1>
            <div
              style={{
                width: "70%",
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
                      flex: "1 0 32%",
                      cursor: "initial",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
}
