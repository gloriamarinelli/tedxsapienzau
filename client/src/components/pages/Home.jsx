import { useBounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import global from "../../resources/global.json";
import CustomCursor from "../components/CustomCursor";
import DynamicBubbleCanvas from "../components/DynamicBubbleCanvas";
import BackToZer from "../images/Logo BTZ.png";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import Image from "../images/awardsSZSFONDO.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  const [windowSize, setWindowSize] = useOutletContext();

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
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            width: "100vw",
            fontFamily: "GothamBold",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
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
                src={BackToZer}
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
                src={BackToZer}
                width="300"
                style={{ transform: "translatey(-50px)" }}
              />
            </div>
          )}

          <h1
            style={{ fontSize: "120px", zIndex: 2 }}
            className="text-white"
          ></h1>

          <div
            style={{
              position: "absolute",
              //MARGIN BOTTOM DA CAPIRE COME RISOLVERE PROBLEMA IN MOBILE NAVBAR DIVERSE
              bottom: "150px",
              cursor: "pointer",
            }}
          >
            <Link
              to="edizione2023"
              style={{
                textTransform: "uppercase",
                backgroundColor: global.COLORS.ROSSO_POSTER,
                padding:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "25px 60px"
                    : "20px 40px",
                borderRadius: "25px",
                color: "#000",
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "25px" : "19px",
                textDecoration: "none",
              }}
            >
              Scopri di più
            </Link>
          </div>
        </div>
      </div>

      <section
        style={{
          backgroundColor: "#521831",
        }}
      >
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <div class="p-5">
                {" "}
                <LazyLoadImage
                  src={Image}
                  alt="Awards"
                  height="330px"
                  placeItems="center"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <p class="display-4">
                  <a
                    className="btn5"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "30px",
                      textDecoration: "none",
                      fontFamily: "GothamBold",
                      textDecoration: "none",
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
                    fontSize: "20px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                    textDecoration: "none",
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
                    fontSize: "20px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                    textDecoration: "none",
                  }}
                  href="/images/EN_Regulations_BackToZeroAwards.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Regulations 🇬🇧
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
