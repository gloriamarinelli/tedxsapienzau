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
import Events from "./Events";
import Blog from "./Blog";
import BlogHome from "./BlogHome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import "../../index.css";
import "../../resources/styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Iframe from "react-iframe";
import Card from "react-bootstrap/Card";
import backgroundVideo from "../videos/tedx.mp4";
import { Button, Row } from "react-bootstrap";

const NewsSidebarSize = 18;

export default function Home() {
  const [windowSize, setWindowSize] = useOutletContext();

  const svgRef = useRef();

  const DEBUG = 1;

  useEffect(() => {
    if (DEBUG) {
      let path = svgRef.current.querySelector("path");
      let length = path.getTotalLength();

      console.log(length);

      path.style.strokeDasharray = length + " " + length;

      let offset = 8000;
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
    return (
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            height: "3072px",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
          }}
        >
          <svg
            preserveAspectRatio="none"
            width={"100%"}
            height={"100%"}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
            ref={svgRef}
            viewBox="0 0 1822 3072"
            fill="none"
          >
            <path
              d="M1284.5 0.5C1284.5 159.352 1126.36 408.347 756.694 244.5C387.029 80.6526 26.194 180 10.694 472C-4.80598 764 74.0005 1026 813.5 871C1553 716 1707.5 1002.5 1789.19 1273C1870.89 1543.5 1789.19 2259 850.194 1801C-88.8057 1343 144.5 1251.5 394.194 1214C643.888 1176.5 207.481 1678.98 76.1939 2228C15.694 2481 48.5 2937 374 2977.5C867.756 3038.94 953 2655 1196 2649C1404.31 2664.5 1441.4 2932.3 1443 3061.5"
              stroke="#F1FF39"
              stroke-width="17"
            />
          </svg>
          <div
            style={{ height: "100vh", width: "100vw", backgroundColor: "red" }}
          ></div>
          <div
            style={{ height: "100vh", width: "100vw", backgroundColor: "blue" }}
          ></div>
          <div
            style={{ height: "100vh", width: "100vw", backgroundColor: "pink" }}
          ></div>
        </section>
      </div>
    );
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
