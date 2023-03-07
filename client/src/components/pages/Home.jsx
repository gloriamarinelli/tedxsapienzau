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

      <section>
        <div
          style={{
            backgroundColor: "#521831",
          }}
        >
          <div className="container marketing">
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <a
                  style={{
                    height: "200px",
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "40px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",

                    backgroundColor: "#f8c403",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScPVPoWlQTJ5sB0chtpiZTlcFMUBaTb4DDG6mPwXyPkx9lx_Q/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Invia la tua candidatura
                </a>
                <a
                  style={{
                    height: "200px",
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "30px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScPVPoWlQTJ5sB0chtpiZTlcFMUBaTb4DDG6mPwXyPkx9lx_Q/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.freepik.com/premium-vector/flag-italy-with-circle-frame-white-background_197792-368.jpg?w=2000"
                    height="30px"
                  ></img>
                  REGOLAMENTO
                </a>
                <a
                  style={{
                    height: "200px",
                    width: "90%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontSize: "30px",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                  }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScPVPoWlQTJ5sB0chtpiZTlcFMUBaTb4DDG6mPwXyPkx9lx_Q/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  REGULATIONS
                </a>
              </div>
              <div className="col-md-5 order-md-1 d-flex mt-5 mb-5">
                <LazyLoadImage src={Image} alt="Awards" height="400px" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
