import { Canvas } from "@react-three/fiber";
import React from "react";
import global from "../../resources/global.json";
import DynamicBubbleCanvas from "../components/DynamicBubbleCanvas";
import BackToZero from "../images/Logo BTZ.png";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import Image from "../images/awardsSZSFONDO.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  const [windowSize, setWindowSize] = useOutletContext();

  const getCallToAction = () => {
    return (
      <Link
        to="awards"
        className="btn5-2"
        style={{
          textTransform: "uppercase",
          padding:
            windowSize > global.UTILS.TABLET_WIDTH ? "25px 60px" : "20px 40px",
          borderRadius: "25px",
          color: "#000",
          fontFamily: "GothamBold",
          fontSize: windowSize > global.UTILS.TABLET_WIDTH ? "25px" : "19px",
          textDecoration: "none",
          position: "absolute",
          bottom: "80px",
        }}
      >
        Scopri gli awards
      </Link>
    );
  };

  return (
    <>
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
            width: "100vw",
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
      </div>

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
              Il nostro obiettivo è <strong>azzerare</strong>, ricercare un
              punto <strong>zero</strong>: le disuguaglianze, i conflitti, i
              cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei
              fattori inquinanti che rallentano la crescita della nostra
              società, peggiorando la qualità della nostra vita.{" "}
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
    </>
  );
}

function getBannerSubscribeAwards(windowSize) {
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
