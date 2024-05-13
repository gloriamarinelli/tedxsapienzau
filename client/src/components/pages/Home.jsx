import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";
import NewsBox from "../components/NewsBox";
import BackToZeroBLACK from "../images/Logo_BTZ_BLACK.webp";
import Image1 from "../images/RFW23/RFW.webp";
import Image from "../images/RFW23/logoRFW.webp";
import Eventbrite from "../images/eventbrite.png";
import Volunteers from "../images/volunteers.webp";
import Earth from "../images/earth.webp";
import CountdownLogo from "../images/countdown_logo.webp";
import Events from "./Events";
import TEDxLogoWhite from "../images/logo-white.png";
import Blog from "./Blog";
import BlogHome from "./BlogHome";
import MvHome from "./MvHome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import "../../index.css";
import "../../resources/styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iframe from "react-iframe";
import Card from "react-bootstrap/Card";
import backgroundVideo from "../videos/tedx.mp4";
import { Button, Row } from "react-bootstrap";
import Countdown from "../components/Countdown";
import CountUp from "react-countup";
import SpeakerCard from "../components/SpeakerCard";
import SecretGuestImage from "../images/secret_guest.webp";

const NewsSidebarSize = 18;

const speakersInfo = [
  {
    nomeSpeaker: "Simone Teglia",
    imgSrc: "../images/secret_guest.webp",
  },
  {
    nomeSpeaker: "Bruno Mazzara",
    imgSrc: SecretGuestImage,
  },
  {
    nomeSpeaker: "Simone Teglia",
    imgSrc: SecretGuestImage,
  },
  {
    nomeSpeaker: "Simone Teglia",
    imgSrc: SecretGuestImage,
  },
  {
    nomeSpeaker: "Simone Teglia",
    imgSrc: SecretGuestImage,
  },
  {
    nomeSpeaker: "Simone Teglia",
    imgSrc: SecretGuestImage,
  },
];

export default function Home() {
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
              padding: "0 5vw",
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
                style={{ marginBottom: "-80px" }}
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
                const { nomeSpeaker, imgSrc } = speaker;
                return (
                  <SpeakerCard
                    key={nomeSpeaker}
                    nomeSpeaker={nomeSpeaker}
                    imgSrc={SecretGuestImage}
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
  } else if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <div style={{ backgroundColor: "#000" }}>
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
              }}
            >
              Ottieni i biglietti
            </a>
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
                const { nomeSpeaker, imgSrc } = speaker;
                return (
                  <SpeakerCard
                    nomeSpeaker={nomeSpeaker}
                    imgSrc={SecretGuestImage}
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
              padding: " 30px 0",
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
              style={{ marginTop: "-80px", marginBottom: "-50px" }}
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
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Ottieni i biglietti
            </a>
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
                const { nomeSpeaker, imgSrc } = speaker;
                return (
                  <SpeakerCard
                    nomeSpeaker={nomeSpeaker}
                    imgSrc={SecretGuestImage}
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

/**
 * HomePage sections that are interchamble according to what we want to show
 */
function getAboutBTZ(windowSize) {
  return (
    <section
      style={{
        backgroundColor: global.COLORS.BLU_SCURO_POSTER,
        color: "white",
      }}
    >
      <div className="container px-5">
        <div className="p-5">
          <p
            className="display-4"
            style={{ fontSize: "25px", textAlign: "justify" }}
          >
            Il nostro obiettivo è <strong>azzerare</strong>, ricercare un punto{" "}
            <strong>zero</strong>: le disuguaglianze, i conflitti, i cattivi
            stili di vita, le emissioni e i rifiuti. Ridurre quei fattori
            inquinanti che rallentano la crescita della nostra società,
            peggiorando la qualità della nostra vita.{" "}
            <strong>Riconsiderare noi stessi </strong> ed il nostro modo di
            confrontarci. Imparare ed interagire con la società contemporanea,
            con le <strong>arti</strong> e le <strong>scienze</strong>. È
            fondamentale per costruire un mondo dove l'essere umano possa '
            <strong>rinascere</strong>', prosperando ed esprimendosi al meglio
            in ogni disciplina. Riscoprire le basi per{" "}
            <strong>rinascere</strong>, diventare persone migliori in un luogo
            migliore.
          </p>
        </div>
      </div>
    </section>
  );
}

function getBannerRFW(windowSize) {
  return (
    <section
      style={{
        backgroundImage: `url(${Image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6 ">
            <div className="p-5 d-flex justify-content-center align-items-center">
              <LazyLoadImage
                src={Image}
                alt="RFW"
                height={
                  windowSize > global.UTILS.MOBILE_WIDTH ? "300px" : "200px"
                }
              />
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{ backgroundColor: "rgba(255 ,255, 255, 0.8 )" }}
          >
            <div className="p-5">
              <h1
                style={{
                  color: "#E62153",
                  fontWeight: "bold",
                  marginBottom: "25px",
                }}
              >
                Viaggia nel futuro, &nbsp;vieni a Roma!
              </h1>

              <p
                style={{
                  textAlign: "justify",
                  fontSize: "16px",
                  marginBottom: "auto",
                }}
              >
                Dall’<strong>11</strong> al <strong>17 settembre</strong> la{" "}
                <a
                  href="https://romefutureweek.it/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#E62153", fontWeight: "bold" }}
                >
                  Rome Future Week®
                </a>{" "}
                darà il via a una manifestazione unica che vedrà protagonista
                l'intera città con
                <strong> centinaia di eventi</strong> in cui menti creative,
                esperti e innovatori di ogni settore saranno pronti a guidarvi
                nel futuro che stiamo già vivendo.{" "}
                <strong>
                  Dibattiti stimolanti, workshop interattivi, incontri
                  ispiratori
                </strong>
                : per una settimana invaderanno la capitale per esplorare le
                nuove tendenze che stanno cambiando il nostro presente
                perridisegnare le esperienze del futuro.{" "}
                <strong>Partecipa anche tu</strong> e diventa parte attiva della
                Rome Future Week®!{" "}
                <strong style={{ color: "#E62153" }}>
                  IL FUTURO CI ASPETTA.
                </strong>
              </p>
              {/*<a
                className="btn-RFW"
                style={{
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                  fontFamily: "GothamBold",
                }}
                href="https://www.eventbrite.it/e/biglietti-universita-e-impresa-insieme-per-il-futuro-703507017427?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
              >
                Partecipa anche tu!
              </a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getBannerAwards(windowSize) {
  return (
    <section
      style={{
        backgroundColor: "#521831",
      }}
    >
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="p-5 d-flex justify-content-center align-items-center">
              <LazyLoadImage
                src={Image}
                alt="Awards"
                height={
                  windowSize > global.UTILS.MOBILE_WIDTH ? "330px" : "250px"
                }
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <p className="display-4">
                <a
                  className="btn5"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "25px" : "16px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScPVPoWlQTJ5sB0chtpiZTlcFMUBaTb4DDG6mPwXyPkx9lx_Q/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Invia la tua candidatura
                </a>
              </p>

              <a
                className="btn5-1"
                style={{
                  display: "flex",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                  textDecoration: "none",
                  fontFamily: "GothamBold",
                }}
                href="/images/IT_regolamento Awards.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Regolamento 🇮🇹
              </a>

              <a
                className="btn5-1"
                style={{
                  display: "flex",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                  textDecoration: "none",
                  fontFamily: "GothamBold",
                }}
                href="/images/EN_Regulations_BackToZeroAwards.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Regulation 🇬🇧
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getBannerPastEditions(windowSize) {
  return (
    <section
      style={{
        //backgroundColor: global.COLORS.ROSSO_POSTER,
        backgroundColor: global.COLORS.BLU_POSTER,
        color: "white",
      }}
    >
      <div className="container">
        <div className="p-2">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="edizione2022"
            style={{
              textDecoration: "none",
              color: "white",
              letterSpacing: 18,
            }}
          >
            <p
              className="display-4"
              style={{
                marginTop: "10px",
                fontSize: "40px",
                textAlign: "center",
                fontFamily: "GothamBold",
              }}
            >
              EDIZIONI PASSATE ➤
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 *
 * @param {*} windowSize
 * @returns the right sidebar that contains the latest news that we wanna show
 */
function getVerticalBannerNews(windowSize) {
  if (windowSize > global.UTILS.TABLET_WIDTH) {
    return (
      <section
        style={{
          width: `${NewsSidebarSize}vw`,
          paddingTop: "70px",
          backgroundColor: "ghostwhite",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "center",
          fontFamily: "GothamBold",
          borderLeft: "5px solid #EB0028",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100px",
            paddingLeft: "5px",
            background: "linear-gradient(60deg, #EB0028 30%, #242958 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            News
          </h1>
        </div>

        <hr></hr>
        <NewsBox
          title={"Partecipa ai workshop targati BTZ"}
          imgSrc={BackToZeroBLACK}
          linkTo={"/workshop"}
        />
        <NewsBox
          title={"Prenota i biglietti per il Main Event di TEDxSapienzaU"}
          imgSrc={Eventbrite}
          linkTo={
            "https://www.eventbrite.it/e/biglietti-tedxsapienzau-2023-back-to-zero-717157827367?aff=oddtdtcreator"
          }
        />
        <NewsBox
          title={"Mercoledì 15 novembre torna Back to Zero"}
          imgSrc={BackToZeroBLACK}
          linkTo={"/edizione2023"}
        />
        <NewsBox
          title={"Rome Future Week dall'11 al 17 settembre"}
          imgSrc={
            "https://romefutureweek.it/wp-content/uploads/2023/02/Senza-titolo-1.jpg"
          }
          linkTo={"/rfw23"}
        />
      </section>
    );
  } else {
    //I don't want to show the sidebar if the screen is too small
    return <></>;
  }
}
