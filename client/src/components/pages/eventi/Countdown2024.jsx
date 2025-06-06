import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import { Trans, useTranslation } from "react-i18next";

import global from "../../../resources/global.json";
import Earth from "../../images/earth.webp";
import CountdownLogo from "../../images/countdown_logo.webp";
import AlessandroCorsiniImage from "../../images/speakerscountdown24/AlessandroCorsini.webp";
import RaffaellaAbateImage from "../../images/speakerscountdown24/RaffaellaAbate.webp";
import MarceloEnriqueContiImage from "../../images/speakerscountdown24/MarceloEnriqueConti.webp";
import SabrinaLucibelloImage from "../../images/speakerscountdown24/SabrinaLucibello.webp";
import BrunoMazzaraImage from "../../images/speakerscountdown24/BrunoMazzara.webp";
import NunzioAlloccaImage from "../../images/speakerscountdown24/NunzioAllocca.webp";
import SpeakerCard from "../../components/SpeakerCard";

export default function Countdown2024() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();
  const [, setScrollY] = useState(0);
  const [iframeSource, setIframeSource] = useState(
    "https://www.youtube.com/embed/qfP5K6o_71E?si=hKofScYpCbBKDmCt&amp;"
  );
  const [selectedVideoSpeaker, setSelectedVideoSpeaker] =
    useState("BrunoMazzara");

  const videoLinks = {
    BrunoMazzara:
      "https://www.youtube.com/embed/qfP5K6o_71E?si=0LfW2q82x4_-SDLS",
    AlessandroCorsini:
      "https://www.youtube.com/embed/iKBoU13MLPE?si=1X9w5PUX_o6qOFCt",
    RaffaellaAbate:
      "https://www.youtube.com/embed/NmKLVYuWutI?si=6rNKgF52yK62cuuE",
    MarceloConti:
      "https://www.youtube.com/embed/bogFGkkxGz8?si=296Zb5tf5dkF4bPU",
    SabrinaLucibello:
      "https://www.youtube.com/embed/xiON0VBhuP0?si=10HDt77bIpIHIJMC",
    NunzioAllocca:
      "https://www.youtube.com/embed/D_SgAqsNdhM?si=bW9uYM00eup1_bze",
  };

  //const svgRef = useRef();

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
      linkTalk: videoLinks.AlessandroCorsini,
    },
    {
      nomeSpeaker: "Raffaella Abate",
      ruoloSpeaker: "Dottoranda in Psicologia Dinamica e Clinica",
      link: "https://research.uniroma1.it/researcher/8b60c7379ba8ad0f753282348cc599974f0d56dc91c31f9bef7a573d",
      imgSrc: RaffaellaAbateImage,
      linkTalk: videoLinks.RaffaellaAbate,
    },
    {
      nomeSpeaker: "Marcelo Enrique Conti",
      ruoloSpeaker:
        "Professore Ordinario di Management Ambientale e Sostenibilità",
      link: "https://corsidilaurea.uniroma1.it/it/users/marcelocontiuniroma1it",
      imgSrc: MarceloEnriqueContiImage,
      linkTalk: videoLinks.MarceloConti,
    },
    {
      nomeSpeaker: "Sabrina Lucibello",
      ruoloSpeaker: "Professoressa ordinaria in Disegno Industriale",
      link: "https://research.uniroma1.it/researcher/ee71bff0ec967dd4fe3bb096af968cd53d93f861490fd84160c96484?page=1",
      imgSrc: SabrinaLucibelloImage,
      linkTalk: videoLinks.SabrinaLucibello,
    },
    {
      nomeSpeaker: "Bruno Mazzara",
      ruoloSpeaker: "Professore Ordinario di Comunicazione e Ricerca Sociale",
      link: "https://corsidilaurea.uniroma1.it/it/users/brunomazzarauniroma1it",
      imgSrc: BrunoMazzaraImage,
      linkTalk: videoLinks.BrunoMazzara,
    },
    {
      nomeSpeaker: "Nunzio Allocca",
      ruoloSpeaker: "Professore Associato di Storia e Scienze delle tecniche",
      link: "",
      imgSrc: NunzioAlloccaImage,
      linkTalk: videoLinks.NunzioAllocca,
    },
  ];

  const speakerSelectionStyle = {
    cursor: "pointer",
    textTransform: "uppercase",
  };

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

  if (windowSize > global.UTILS.TABLET_WIDTH)
    /**
     * DESKTOP VERSION
     */
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
              marginBottom: "10px",
            }}
          >
            <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
              {" "}
              31 | 0
            </span>
            5 | 24
          </h1>
          <h4
            style={{
              color: global.COLORS.GIALLO_COUNTDOWN,
              marginLeft: "3ch",
              backgroundColor: "#000",
            }}
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
          <h1 style={{}}>{t("event_countdown2024.title")}</h1>
          <p style={{ maxWidth: "60ch", fontSize: "20px" }}>
            <Trans
              i18nKey="event_countdown2024.description"
              components={{
                1: <b></b>,
              }}
            />
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
        <section
          style={{
            width: "100vw",
            height: "100%",
            backgroundColor: "#000",
            color: "#000",
            fontFamily: "Anton",
            display: "flex",
            alignItems: "center",
            padding: "50px ",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              width: windowSize > 1300 ? "30%" : "50%",
              gap: "25px",
              color: global.COLORS.GIALLO_COUNTDOWN,
              fontSize: "40px",
              fontFamily: "Anton",
            }}
          >
            <div
              style={{
                ...speakerSelectionStyle,
                ...{
                  color:
                    selectedVideoSpeaker === "BrunoMazzara"
                      ? global.COLORS.GIALLO_COUNTDOWN
                      : "grey",
                },
              }}
              onClick={() => {
                setIframeSource(videoLinks.BrunoMazzara);
                setSelectedVideoSpeaker("BrunoMazzara");
              }}
            >
              Bruno Mazzara
              <p
                style={{
                  fontSize: "20px",
                  opacity: selectedVideoSpeaker === "BrunoMazzara" ? 1 : 0,
                  marginTop:
                    selectedVideoSpeaker === "BrunoMazzara" ? "0" : "-40px",
                  transition: "0.5s all",
                }}
              >
                Una svolta green, ma quale?
              </p>
            </div>
            <div
              style={{
                ...speakerSelectionStyle,
                ...{
                  color:
                    selectedVideoSpeaker === "AlessandroCorsini"
                      ? global.COLORS.GIALLO_COUNTDOWN
                      : "grey",
                },
              }}
              onClick={() => {
                setIframeSource(videoLinks.AlessandroCorsini);
                setSelectedVideoSpeaker("AlessandroCorsini");
              }}
            >
              Alessandro Corsini
              <p
                style={{
                  fontSize: "20px",
                  opacity: selectedVideoSpeaker === "AlessandroCorsini" ? 1 : 0,
                  marginTop:
                    selectedVideoSpeaker === "AlessandroCorsini"
                      ? "0"
                      : "-60px",
                  transition: "0.5s all",
                }}
              >
                Come pesci che modellano l'acqua
              </p>
            </div>
            <div
              style={{
                ...speakerSelectionStyle,
                ...{
                  color:
                    selectedVideoSpeaker === "RaffaellaAbate"
                      ? global.COLORS.GIALLO_COUNTDOWN
                      : "grey",
                },
              }}
              onClick={() => {
                setIframeSource(videoLinks.RaffaellaAbate);
                setSelectedVideoSpeaker("RaffaellaAbate");
              }}
            >
              Raffaella Abate
              <p
                style={{
                  fontSize: "20px",
                  opacity: selectedVideoSpeaker === "RaffaellaAbate" ? 1 : 0,
                  marginTop:
                    selectedVideoSpeaker === "RaffaellaAbate" ? "0" : "-60px",
                  transition: "0.5s all",
                }}
              >
                Un viaggio nella natura: biofilia, solastalgia e benessere
              </p>
            </div>
            <div
              style={{
                ...speakerSelectionStyle,
                ...{
                  color:
                    selectedVideoSpeaker === "MarceloConti"
                      ? global.COLORS.GIALLO_COUNTDOWN
                      : "grey",
                },
              }}
              onClick={() => {
                setIframeSource(videoLinks.MarceloConti);
                setSelectedVideoSpeaker("MarceloConti");
              }}
            >
              Marcelo Enrique Conti
              <p
                style={{
                  fontSize: "20px",
                  opacity: selectedVideoSpeaker === "MarceloConti" ? 1 : 0,
                  marginTop:
                    selectedVideoSpeaker === "MarceloConti" ? "0" : "-60px",
                  transition: "0.5s all",
                }}
              >
                Dalla complessità economica al cambiamento climatico
              </p>
            </div>
            <div
              style={{
                ...speakerSelectionStyle,
                ...{
                  color:
                    selectedVideoSpeaker === "SabrinaLucibello"
                      ? global.COLORS.GIALLO_COUNTDOWN
                      : "grey",
                },
              }}
              onClick={() => {
                setIframeSource(videoLinks.SabrinaLucibello);
                setSelectedVideoSpeaker("SabrinaLucibello");
              }}
            >
              Sabrina Lucibello
              <p
                style={{
                  fontSize: "20px",
                  opacity: selectedVideoSpeaker === "SabrinaLucibello" ? 1 : 0,
                  marginTop:
                    selectedVideoSpeaker === "SabrinaLucibello" ? "0" : "-60px",
                  transition: "0.5s all",
                }}
              >
                Non si butta via niente!
              </p>
            </div>
            <div
              style={{
                ...speakerSelectionStyle,
                ...{
                  color:
                    selectedVideoSpeaker === "NunzioAllocca"
                      ? global.COLORS.GIALLO_COUNTDOWN
                      : "grey",
                },
              }}
              onClick={() => {
                setIframeSource(videoLinks.NunzioAllocca);
                setSelectedVideoSpeaker("NunzioAllocca");
              }}
            >
              Nunzio Allocca
              <p
                style={{
                  fontSize: "20px",
                  opacity: selectedVideoSpeaker === "NunzioAllocca" ? 1 : 0,
                  marginTop:
                    selectedVideoSpeaker === "NunzioAllocca" ? "0" : "-60px",
                  transition: "0.5s all",
                }}
              >
                Responsabilità della cultura e cultura della responsabilità
              </p>
            </div>
          </section>

          <iframe
            width="800px"
            style={{ aspectRatio: "16/9" }}
            src={iframeSource}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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
            style={{
              color: global.COLORS.GIALLO_COUNTDOWN,
              marginLeft: "3ch",
              backgroundColor: "#000",
            }}
          >
            Nuovo Teatro Ateneo
          </p>
          {getShowMore()}
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
            textAlign: "center",
          }}
        >
          <h1 style={{}}>{t("event_countdown2024.title")}</h1>
          <p style={{ maxWidth: "60ch", fontSize: "20px" }}>
            <Trans
              i18nKey="event_countdown2024.description"
              components={{
                1: <b></b>,
              }}
            />
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
                const { nomeSpeaker, ruoloSpeaker, link, imgSrc, linkTalk } =
                  speaker;
                return (
                  <SpeakerCard
                    key={nomeSpeaker}
                    nomeSpeaker={nomeSpeaker}
                    ruoloSpeaker={ruoloSpeaker}
                    link={link}
                    imgSrc={imgSrc}
                    showName={true}
                    showLinkTalk={true}
                    linkTalk={linkTalk}
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
