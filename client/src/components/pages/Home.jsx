import { Canvas } from "@react-three/fiber";
import React from "react";
import global from "../../resources/global.json";
import "../../index.css";
import DynamicBubbleCanvas from "../components/DynamicBubbleCanvas";
import NewsBox from "../components/NewsBox";
import BackToZero from "../images/Logo_BTZ.png";
import BackToZeroBLACK from "../images/Logo_BTZ_BLACK.webp";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import Image from "../images/RFW23/logoRFW.webp";
import Image1 from "../images/RFW23/RFW.webp";
import Image2 from "../images/volunteers.webp";
import Eventbrite from "../images/eventbrite.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CountdownEd23 from "../components/CountdownEd23";

const NewsSidebarSize = 18;

export default function Home() {
  const [windowSize, setWindowSize] = useOutletContext();

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

  return (
    <>
      <section style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: global.COLORS.BLU_SCURO_POSTER,
          }}
        >
          <div
            id="landing-cover"
            className="d-flex align-items-center justify-content-center"
            style={{
              height: `calc(100vh - ${global.UTILS.SOCIAL_NAV_HEIGHT})`,
              width:
                windowSize > global.UTILS.TABLET_WIDTH
                  ? `${100 - NewsSidebarSize}vw`
                  : "100vw",
              fontFamily: "GothamBold",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                height: `calc(100vh - ${global.UTILS.SOCIAL_NAV_HEIGHT})`,
                width: "100%",
              }}
            >
              <Canvas>
                <DynamicBubbleCanvas windowSize={windowSize} />
              </Canvas>
            </div>
            {windowSize > global.UTILS.TABLET_WIDTH ? (
              <div
                style={{
                  position: "absolute",
                  height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
                  width: "100%",
                  display: "grid",
                  placeItems: "center",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                <img
                  src={BackToZero}
                  alt="back to zero"
                  width="650"
                  style={{
                    transform: "translatey(-50px)",
                    userSelect: "none",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  position: "absolute",
                  height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
                  width: "100%",
                  display: "grid",
                  placeItems: "center",
                  pointerEvents: "none",
                }}
              >
                <img
                  src={BackToZero}
                  alt="back to zero"
                  width="300"
                  style={{ transform: "translatey(-50px)" }}
                />
              </div>
            )}
            {getCallToAction()}
          </div>
          {getBannerVolunteers(windowSize)}
        </div>
        {getVerticalBannerNews(windowSize)}
      </section>
    </>
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

function getBannerVolunteers(windowSize) {
  return (
    <section
      style={{
        backgroundImage: `url(${Image2})`,
        backgroundSize: "cover",
        backgroundPosition: "left top -120px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6 ">
            <div className="p-5 d-flex justify-content-center align-items-center"></div>
          </div>
          <div
            className="col-lg-6"
            style={{ backgroundColor: "rgba(255 ,255, 255, 0.9 )" }}
          >
            <div className="p-5">
              <h1
                style={{
                  color: "#eb0028",
                  fontWeight: "bold",
                  marginBottom: "25px",
                  fontSize: "30px",
                }}
              >
                Candidati come volontario!
              </h1>

              <p
                style={{
                  textAlign:
                    windowSize > global.UTILS.TABLET_WIDTH ? "justify" : "",
                  fontSize: "18px",
                  marginBottom: "25px",
                }}
              >
                <p>
                  Sei interessato al nostro progetto? <br /> Sono aperte le
                  candidature per far parte del nostro Team! <br /> Hai tempo fino al 
                  1 marzo!
                </p>
                <a
                  className="btn-volunteers"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                    color: "#eb0028",
                  }}
                  href="/joinus"
                  target="_blank"
                  rel="noreferrer"
                >
                  Candidati!
                </a>
              </p>
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
