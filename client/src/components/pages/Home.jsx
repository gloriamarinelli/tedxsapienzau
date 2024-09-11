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
import RFW24_Home_News from "./RFW24_Home_News";
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
import RFW_bg_img from "../images/RFW23/RFW2.png";
import RWF_TedxSapienza1 from "../images/RFW24/1.png";
import RWF_TedxSapienza2 from "../images/RFW24/2.png";
import RWF_TedxSapienza3 from "../images/RFW24/3.png";
import RWF_TedxSapienza4 from "../images/RFW24/4.png";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import AlessandroCorsiniImage from "../images/countdown24/AlessandroCorsini.webp";
import RaffaellaAbateImage from "../images/countdown24/RaffaellaAbate.webp";
import MarceloEnriqueContiImage from "../images/countdown24/MarceloEnriqueConti.webp";
import SabrinaLucibelloImage from "../images/countdown24/SabrinaLucibello.webp";
import BrunoMazzaraImage from "../images/countdown24/BrunoMazzara.webp";
import NunzioAlloccaImage from "../images/countdown24/NunzioAllocca.webp";

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

export default function Home() {
  const windowWidth = window.innerWidth; // window's width (breaking point 1458px)
  const redWinWidth = windowWidth / 80;

  const [windowSize, setWindowSize] = useOutletContext();
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isTicketHovered, setIsTicketHovered] = useState(false);
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [isMapClicked, setIsMapClicked] = useState(false);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [isCloseInfoClicked, setIsCloseInfoClicked] = useState(false);
  const handleVideoClick = () => {
    setIsVideoClicked(true);
  };
  const handleMapClick = () => {
    setIsMapClicked(true);
  };
  const handleInfoClick = () => {
    setIsInfoClicked(true);
    setIsCloseInfoClicked(false);
  };
  const handleCloseInfoClicked = () => {
    setIsInfoClicked(false);
    setIsCloseInfoClicked(true);
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          height: "100%",
          marginTop: global.UTILS.NAV_HEIGHT,
          width: "100vw",
          backgroundColor: "#000",
          padding:  windowSize < global.UTILS.BIG_TABLET_WIDTH ? "34px 34px 0px 34px" : "34px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/** inizio div video **/}
        {/*<div
          id="main-container"
          style={{
            width: "100%",
            height: "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Volunteers})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
          }}
        >
          {windowSize > global.UTILS.TABLET_WIDTH ? (
            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectPosition: "center",
                objectFit: "cover",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          ) : (
            <></>
          )}
          <div
            id="video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
            }}
          ></div>
          <div
            style={{
              color: "white",
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <h2
              className="mb-5 secondary-text"
              style={{
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "2vw" : "0.5vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
              }}
            >
              TEDXSAPIENZAU
            </h2>
            <h1
              style={{
                textAlign: "center",
                fontSize:
                  windowSize > 1245
                    ? "14vh"
                    : windowSize > global.UTILS.MOBILE_WIDTH
                    ? "100px"
                    : "50px",
                fontWeight: 700,
                maxWidth: "13ch",
              }}
            >
              LET'S EXPLORE HOW IT WAS
            </h1>
            <h2
              className="mb-5 secondary-text"
              style={{
                fontSize: "2vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
              }}
            >
              BACK TO ZERO 2023
            </h2>
          </div>
        </div>*/}
        {/** fine div video **/}

        {/* <div
          id="main-container"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${RFW_bg_img})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
            backgroundColor: "yellow",
          }}
        >
          <section>
            <RFW24_Home_News />
          </section>
        </div> */}

        <div
          style={{
            width: "50%",
            aspectRatio: "1/1",
            display: "block",
            backgroundImage: `url(${RWF_TedxSapienza1})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flex: "1 1 450px",
          }}
        ></div>
        <div
          style={{
            width: "50%",
            aspectRatio: "1/1",
            display: "block",
            backgroundImage: `url(${RWF_TedxSapienza2})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flex: "1 1 450px",
            position: "relative",
          }}
        >
          {/*
          <div
            style={{
              position: "absolute",
              top: "120px",
              right: "60px",
            }}
          >
            <button
              id="RFW_info_button"
              onClick={handleInfoClick}
              style={{
                display: windowSize > global.UTILS.BIG_TABLET_WIDTH ? "block" : "none",
                backgroundColor: "black",
                border: "none",
              }}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#E62153", height: "40px" }}
              />
            </button>
          </div>
        </div>*/}
          {/* overlay div (info) */}
          {/*<div
          id="useful_links"
          style={{
            width: "50%",
            height: "70%",
            aspectRatio: "1/1",
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flex: "1 1 450px",
            zIndex: "9000",
            position: "absolute",
            display: isInfoClicked ? "flex" : "none",
            flexDirection: "column",
            color: "white",
            border: "2px solid #E62153",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              id="RFW_close_info_button"
              onClick={handleCloseInfoClicked}
              style={{
                backgroundColor: "black",
                border: "none",
                margin: "5%",
              }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white", height: "40px" }}
              />
            </button>
          </div>
          <h2
            style={{
              alignSelf: "center",
              textTransform: "uppercase",
              fontSize: "250%",
            }}
          >
            Links Utili
          </h2>
          <div
            style={{
              marginLeft: "15%",
              marginRight: "15%",
              marginTop: "10%",
              marginBottom: "30%",
            }}
          >
            <p
              style={{
                width: "100%",
                fontSize: "180%",
                paddingBottom: "2%",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: isTicketHovered ? "#E62153" : "white",
                }}
                onMouseEnter={() => setIsTicketHovered(true)}
                onMouseLeave={() => setIsTicketHovered(false)}
                href="https://www.eventbrite.it/e/biglietti-universita-ricerca-e-innovazione-1003202574907"
              >
                <FontAwesomeIcon
                  icon={faTicket}
                  style={{ marginRight: "3%" }}
                />
                Prenota il tuo ticket
              </a>
            </p>
            <p
              style={{
                width: "100%",
                fontSize: "180%",
                paddingBottom: "2%",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: isVideoHovered ? "#E62153" : "white",
                }}
                onMouseEnter={() => setIsVideoHovered(true)}
                onMouseLeave={() => setIsVideoHovered(false)}
                href="https://uniroma1.zoom.us/s/85617281094"
              >
                <FontAwesomeIcon icon={faVideo} style={{ marginRight: "3%" }} />
                Segui la diretta Zoom
              </a>
            </p>
            <p
              style={{
                width: "100%",
                fontSize: "180%",
                paddingBottom: "2%",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: isMapHovered ? "#E62153" : "white",
                }}
                onMouseEnter={() => setIsMapHovered(true)}
                onMouseLeave={() => setIsMapHovered(false)}
                href="https://www2.uniroma1.it/amm-cda/intranet/allegato16cda02_12_2021.pdf"
              >
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  style={{ marginRight: "3%" }}
                />
                Mappa Aula Ex-Cisadu, Città Universitaria
              </a>
            </p>
          </div>*/}
        </div>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          height: "100%",
          width: "100vw",
          backgroundColor: "#000",
          padding: windowSize < global.UTILS.BIG_TABLET_WIDTH ? "20px 34px 34px 34px" : "34px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "50%",
            aspectRatio: "1/1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${RWF_TedxSapienza3})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flex: "1 1 450px",
          }}
        ></div>
        <div
          style={{
            width: "50%",
            aspectRatio: "1/1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${RWF_TedxSapienza4})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flex: "1 1 450px",
          }}
        >
          <div>
            <div
              id="links_div"
              style={{
                fontSize: windowWidth < 1458 ? "2.5vw" : `${redWinWidth}px`,
                paddingTop: "30%",
                paddingLeft:
                  windowSize > global.UTILS.TABLET_WIDTH ? "10%" : "0%",
              }}
            >
              <p
                style={{
                  width: "100%",
                  paddingBottom: "2%",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: isTicketHovered ? "#E62153" : "white",
                  }}
                  onMouseEnter={() => setIsTicketHovered(true)}
                  onMouseLeave={() => setIsTicketHovered(false)}
                  href="https://www.eventbrite.it/e/biglietti-universita-ricerca-e-innovazione-1003202574907"
                >
                  <FontAwesomeIcon
                    icon={faTicket}
                    style={{ marginRight: "3%" }}
                  />
                  Prenota il tuo ticket
                </a>
              </p>
              <p
                style={{
                  width: "100%",
                  paddingBottom: "2%",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: isVideoHovered ? "#E62153" : "white",
                  }}
                  onMouseEnter={() => setIsVideoHovered(true)}
                  onMouseLeave={() => setIsVideoHovered(false)}
                  href="https://uniroma1.zoom.us/s/85617281094"
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    style={{ marginRight: "3%" }}
                  />
                  Segui la diretta Zoom
                </a>
              </p>
              <p
                style={{
                  width: "100%",
                  paddingBottom: "2%",
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: isMapHovered ? "#E62153" : "white",
                  }}
                  onMouseEnter={() => setIsMapHovered(true)}
                  onMouseLeave={() => setIsMapHovered(false)}
                  href="https://www2.uniroma1.it/amm-cda/intranet/allegato16cda02_12_2021.pdf"
                >
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    style={{ marginRight: "3%" }}
                  />
                  Mappa Aula Ex-Cisadu, Città Universitaria
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <MvHome />
      <section>
        <Events withTitle={false} />
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          <a href="/edizioni">
            <Button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                fontWeight: "bold",
                padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
              }}
            >
              Scopri di più
            </Button>
          </a>
        </div>
      </section>
      <section>
        <BlogHome withTitle={true} />
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          <a href="/blog">
            <Button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                fontWeight: "bold",
                padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
              }}
            >
              Scopri di più
            </Button>
          </a>
        </div>
      </section>
      <section
        style={{
          display: windowSize > global.UTILS.TABLET_WIDTH ? "flex" : "flow",
          justifyContent: "center",
          alignItems: "center",
          height:
            windowSize > global.UTILS.TABLET_WIDTH
              ? `calc(80vh - ${global.UTILS.NAV_HEIGHT})`
              : `calc(130vh - ${global.UTILS.NAV_HEIGHT})`,
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        <div
          id="left-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            marginRight: "10px",
            justifyContent: "left",
            alignItems: "flex",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
            }}
          >
            <h1
              className="fira-sans"
              style={{
                textAlign: "left",
                fontSize: windowSize > 1245 ? "6vh" : "5vh",
                fontWeight: 700,
                maxWidth: "20ch",
                color: "#FFFFFF",
              }}
            >
              <extra>
                <condensed-extrabold>
                  NON PERDERE<br></br> IL NOSTRO <br></br> PROSSIMO EVENTO
                  <br></br>
                </condensed-extrabold>
              </extra>
            </h1>
            <h5
              className="fira-sans"
              style={{
                textAlign: "left",
                fontSize: windowSize > 1245 ? "4vh" : "3vh",
                fontWeight: 300,
                maxWidth: "30ch",
                color: "#FFFFFF",
              }}
            >
              Compila il form per rimanere aggiornato sulle nostre attività{" "}
            </h5>
          </div>
        </div>
        <div
          id="right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            marginLeft: windowSize > global.UTILS.TABLET_WIDTH ? "10px" : "0px",
            marginTop: windowSize > global.UTILS.TABLET_WIDTH ? "0px" : "17px",
            marginBottom:
              windowSize > global.UTILS.TABLET_WIDTH ? "0px" : "200vw",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Iframe
            width="100%"
            height="100%"
            src="https://31dfcf3b.sibforms.com/serve/MUIFAGmJoAVv_QJEw7JN7zjN0ucQ52-6hwypIyMu_k-q54TIIoobWKD0giKOQ8S7YqLCXNB3yUuLxFNlXbl3W8gMyt3XtVqxLzpyj45GmokToGpsRe0GXDv0pHrPyQRx3hid7ViTQxx5IMWLrIE4jxASnL6FsD8KljM7qf4u2BhDOQDyfN8DcMvh8E73bfRYFULDqOzCSc1ThILU"
            frameborder="0"
            allowfullscreen
            position="absolute"
            style={{
              position: "absolute",
              display: "block",
              margin: 0,
              padding: 0,
              top: 0,
              left: 0,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          ></Iframe>
        </div>
      </section>
    </div>
  );
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
