import React, { useEffect, useRef } from "react";
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

const NewsSidebarSize = 18;

export default function Home() {
  const [windowSize, setWindowSize] = useOutletContext();

  const svgRef = useRef();

  const DEBUG = 1;

  useEffect(() => {
    /**
     * This function is used to animate the SVG path of the homepage
     * The animation is triggered by the scroll event that changes the strokeDashoffset of the path
     * The path is drawn as the user scrolls down the page
     * Animation and path are only visible on desktop due to the size of the screen
     * @author @simoneteglia
     */
    if (DEBUG && windowSize > 1100) {
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

  // This can be removed for the new version of the website (2024)
  const getCallToAction = () => {
    return (
      <>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="edizione2023"
          className="btn5-2"
          style={{
            textTransform: "uppercase",
            padding:
              windowSize > global.UTILS.TABLET_WIDTH
                ? "25px 60px"
                : "20px 40px",
            borderRadius: "25px",
            color: "#000",
            fontFamily: "GothamBold",
            fontSize: windowSize > global.UTILS.TABLET_WIDTH ? "25px" : "19px",
            textDecoration: "none",
            position: "absolute",
            bottom: "80px",
          }}
        >
          Scopri di più
        </Link>
      </>
    );
  };

  if (DEBUG) {
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
            {windowSize > 1360 ? (
              <svg
                width={"100%"}
                height={"100%"}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: 1,
                }}
                ref={svgRef}
                viewBox="0 0 1918 2692"
                fill="none"
              >
                <path
                  d="M4.5 13.5C34.3333 0.999942 109.48 31.5142 124 135.001C155.5 359.5 112.5 664 455.5 614.003C974.806 538.307 854 274.5 683 337.001C580.571 374.439 582.029 514.713 854 810.004C1198 1183.5 545.179 1659.65 359.5 1454.01C-73 975.004 1236.14 721.159 854 1619.01C462 2540.01 782.848 2880.17 1165 2568.01C1675.5 2151.01 1563.5 2198.01 1918 2198.01"
                  stroke={global.COLORS.GIALLO_COUNTDOWN}
                  stroke-width="20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                }}
                ref={svgRef}
                viewBox="0 0 1570 2488"
                fill="none"
              >
                <path
                  d="M-13.5 14.0001C16.3255 -0.240562 222 14 126.5 307.5C98.241 394.349 66.9936 695.703 331.5 615C703.5 501.5 576.104 31.4665 423.5 307.5C253.5 615 639 805.842 532.5 1078C278.362 1727.44 126.5 1430.36 126.5 1254.5C126.5 983 838.5 1349 599.5 1976.5C468.646 2320.06 680.948 2688.13 1063 2332.5C1333 2081.17 1479.5 1946.5 1576.5 1856"
                  stroke="#F1FF39"
                  stroke-width="20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                <img src={TEDxLogoWhite} width={windowSize / 6} />
                <img
                  src={CountdownLogo}
                  alt="Countdown Logo"
                  width={windowSize / 2}
                  style={{ marginBottom: "-80px" }}
                />
                <Countdown language="it" />
              </div>
            </div>
            <div
              style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "blue",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  padding: "30px",
                  backgroundColor: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  fontSize: "20px",
                }}
              >
                <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
                  LOREM IPSUM
                </h1>
                <p style={{ maxWidth: "30ch", color: "#fff" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur reiciendis sapiente maxime hic animi atque sed nam?
                  Ex eum earum vero facere hic et distinctio, illum
                  reprehenderit? Laboriosam dolorem aliquam quam autem
                  similique, est possimus omnis voluptatum, provident illo
                  tempora nemo excepturi fugit ipsum quis pariatur commodi
                  incidunt corrupti dolor facilis, nisi cupiditate facere.
                  Nesciunt molestias repellendus nam quo fugiat.
                </p>
              </div>
            </div>
            <div
              style={{
                height: "100vh",
                width: "100vw",
                backgroundColor: "pink",
              }}
            ></div>
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
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                padding: " 30px 0",
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
                padding: "50px 0",
              }}
            >
              <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
                LOREM IPSUM
              </h1>
              <p style={{ maxWidth: "25ch", color: "#fff" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur reiciendis sapiente maxime hic animi atque sed nam? Ex
                eum earum vero facere hic et distinctio, illum reprehenderit?
                Laboriosam dolorem aliquam quam autem similique, est possimus
                omnis voluptatum, provident illo tempora nemo excepturi fugit
                ipsum quis pariatur commodi incidunt corrupti dolor facilis,
                nisi cupiditate facere. Nesciunt molestias repellendus nam quo
                fugiat.
              </p>
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
                height: "100vh",
                width: "100vw",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                padding: " 30px 0",
              }}
            >
              <img
                src={Earth}
                alt="Earth"
                height={"60%"}
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
                padding: "50px 0",
              }}
            >
              <h1 style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
                LOREM IPSUM
              </h1>
              <p style={{ maxWidth: "25ch", color: "#fff" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur reiciendis sapiente maxime hic animi atque sed nam? Ex
                eum earum vero facere hic et distinctio, illum reprehenderit?
                Laboriosam dolorem aliquam quam autem similique, est possimus
                omnis voluptatum, provident illo tempora nemo excepturi fugit
                ipsum quis pariatur commodi incidunt corrupti dolor facilis,
                nisi cupiditate facere. Nesciunt molestias repellendus nam quo
                fugiat.
              </p>
            </div>
          </section>
        </div>
      );
    }
  }

  return (
    <div style={{ backgroundColor: "#000" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        <div
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
        </div>
      </section>

      <section>
        <MvHome withTitle={false} />
      </section>

      <section>
        <Events withTitle={false} />
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          <Link to="/edizioni">
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
          </Link>
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
          <Link to="/blog">
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
          </Link>
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
