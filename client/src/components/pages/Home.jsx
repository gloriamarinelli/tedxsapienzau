import React, { useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Volunteers from "../images/volunteers.webp";
import Events from "./Events";
import BlogHome from "./BlogHome";
import MvHome from "./MvHome";
import TextType from "../reactBitsComponents/TextType/TextType.jsx";
import RotatingText from "../reactBitsComponents/RotatingText/RotatingText.jsx";
import "../../index.css";
import "../../resources/styles/home.css";
import Iframe from "react-iframe";
import backgroundVideo from "../videos/tedx.mp4";
import { useTranslation, Trans } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const [hiddenButton, setHiddenButton] = useState(true);
  const renderButton = (hidden, setHidden) => (
    <button
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      style={{
        backgroundColor: hidden ? global.COLORS.ROSSO_TED_2023 : "#8d0018",
        borderColor: "#8d0018",
        borderRadius: global.UTILS.BENTO_BOX_PADDING,
        fontWeight: "bold",
        padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
        transition: "background-color 0.3s ease",
        color: "#FFF",
      }}
    >
      {t("home.find_out_more")}
    </button>
  );

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
          padding: "0 0 90px 0",
          transition: "0.5s all",
        }}
      >
        <p style={{ marginBottom: "5px" }}>Scopri come fare</p>
        <svg width="20" height="20" viewBox="0 0 26 24" fill="none">
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
          padding:
            windowSize < global.UTILS.BIG_TABLET_WIDTH
              ? "34px 34px 0px 34px"
              : "34px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/** inizio div video **/}
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
            justifyContent:
              windowSize > global.UTILS.MOBILE_WIDTH ? "center" : "start",
            alignItems:
              windowSize > global.UTILS.MOBILE_WIDTH ? "flex-end" : "center",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
            paddingBottom: "50px",
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
              EDIZIONE
            </h2>
            <h1
              style={{
                textAlign:
                  windowSize > global.UTILS.MOBILE_WIDTH ? "center" : " left",
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
              2026
            </h2>
          </div>
        </div>
        {/** fine div video **/}
        {/* {getShowMore()} */}
      </section>
      <section
        style={{
          display: "none",
          gridTemplateColumns: windowSize > "985" ? "2fr 1fr" : "1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
          width: "100%",
          backgroundColor: "#000",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* BOX 1 - Animazione principale */}
        <div
          style={{
            gridRow: "1 / span 2",
            backgroundColor: "#191919",
            borderRadius: "20px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "start",
            position: "relative",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              zIndex: 0,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: `${450 + Math.random() * 250}px`, // even bigger
                  height: `${250 + Math.random() * 250}px`,
                  background: [
                    "radial-gradient(circle at center, #f089b7, transparent 70%)",
                    "radial-gradient(circle at center, #bb5c9e, transparent 70%)",
                    "radial-gradient(circle at center, #94c459, transparent 70%)",
                    "radial-gradient(circle at center, #2a84c6, transparent 70%)",
                    "radial-gradient(circle at center, #f07e29, transparent 70%)",
                    "radial-gradient(circle at center, #e9493b, transparent 70%)",
                    "radial-gradient(circle at center, #28bdef, transparent 70%)",
                    "radial-gradient(circle at center, #f9b531, transparent 70%)",
                  ][i],
                  top: `${i * 12 + Math.random() * 8}%`,
                  left: `${i * 10 + Math.random() * 8}%`,
                  borderRadius: "50%",
                  filter: "blur(110px)",
                  opacity: 0.7,
                  mixBlendMode: "screen",
                  animation: `floatGlow${i} ${
                    20 + Math.random() * 10
                  }s ease-in-out infinite alternate`, // faster (20–30s)
                }}
              />
            ))}

            <style>
              {`
      @keyframes floatGlow0 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(100px, -80px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(-80px, 80px) scale(1); opacity: 0.6; }
      }
      @keyframes floatGlow1 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-120px, 90px) scale(1.1); opacity: 0.8; }
        100% { transform: translate(100px, -90px) scale(0.9); opacity: 0.6; }
      }
      @keyframes floatGlow2 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(90px, 80px) scale(1.15); opacity: 0.7; }
        100% { transform: translate(-70px, -70px) scale(0.95); opacity: 0.5; }
      }
      @keyframes floatGlow3 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-100px, 70px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(80px, -80px) scale(1); opacity: 0.6; }
      }
      @keyframes floatGlow4 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(90px, -90px) scale(1.2); opacity: 0.7; }
        100% { transform: translate(-70px, 80px) scale(1); opacity: 0.5; }
      }
      @keyframes floatGlow5 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-100px, -80px) scale(1.15); opacity: 0.8; }
        100% { transform: translate(90px, 70px) scale(0.9); opacity: 0.6; }
      }
      @keyframes floatGlow6 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(120px, 100px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(-90px, -90px) scale(0.95); opacity: 0.5; }
      }
      @keyframes floatGlow7 {
        0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        50% { transform: translate(-130px, 80px) scale(1.2); opacity: 0.8; }
        100% { transform: translate(100px, -80px) scale(0.9); opacity: 0.6; }
      }
    `}
            </style>
          </div>
          <h1
            style={{
              color: "white",
              fontSize: "5vh",
              fontWeight: 700,
              display:
                windowSize > global.UTILS.TABLET_WIDTH ? "flex" : "block",
              gap: "10px",
              zIndex: 1,
            }}
          >
            Entra nel team{" "}
            <RotatingText
              texts={["ERS", "PEM", "SEC", "HRA", "IT", "CEM", "LA", "DEX"]}
              mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-200%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={6000}
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderRadius: " 10px",
              }}
            />
          </h1>
          <div
            style={{
              flex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#111",
              borderRadius: "10px",
              padding: "0.5rem",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "2.5vh" : "18px",
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              <RotatingText
                texts={[
                  t("joinus.ERS"),
                  t("joinus.PEM"),
                  t("joinus.SEC"),
                  t("joinus.HRA"),
                  t("joinus.IT"),
                  t("joinus.CEM"),
                  t("joinus.LA"),
                  t("joinus.DESIGN"),
                ]}
                rotationInterval={6000} //il timer va sincronizzato con l'altro
              />
            </h1>
          </div>
        </div>

        {/* BOX 2 - Descrizione */}
        <div
          style={{
            backgroundColor: "#111",
            borderRadius: "20px",
            padding: "30px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "2.2vh",
          }}
        >
          <p>
            Dietro ogni idea che vale la pena diffondere, c’è un team di
            volontari.
            <br />
            TEDxSapienzaU è il loro palco.
          </p>
        </div>

        {/* BOX 3 - CTA */}
        <div
          style={{
            backgroundColor: global.COLORS.ROSSO_TED_2023,
            borderRadius: "20px",
            padding: "30px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ fontSize: "3vh", fontWeight: 700 }}>
            Candidature aperte
          </h2>
          <p style={{ fontSize: "2vh", marginBottom: "15px" }}>
            Scopri i ruoli e unisciti a noi.
          </p>
          <a
            href="/Newsletter"
            style={{
              backgroundColor: "white",
              color: global.COLORS.ROSSO_TED_2023,
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Candidati ora →
          </a>
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
          <a href="/edizioni">{renderButton(hiddenButton, setHiddenButton)}</a>
        </div>
      </section>
      {/* <section>
        <BlogHome withTitle={true} />
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          <a href="/blog">{renderButton(hiddenButton, setHiddenButton)}</a>
        </div>
      </section> */}
      {/* <section
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
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%", //la barra bianca sotto dipende dal secondo valore
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
                  <Trans i18nKey="home.next_event" />
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
              {t("home.next_event_form")}
            </h5>
          </div>
        </div>
        <div
          id="right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%", //la barra bianca sotto dipende dal secondo valore
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
          {i18n.language === "it" ? (
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
            />
          ) : (
            <Iframe
              width="100%"
              height="100%"
              src="https://31dfcf3b.sibforms.com/serve/MUIFAKnZWxErJcLmuyvzjpWio3_SOy18jxtNLMON5G4GXZ07vtBK-fSmY0LBBp5pIyZKhgR5ynPFkmhJRkAo3lOojEg8azeYnh9sFMM4RsRNHbY7vOYVljvmYhVNmDNqa5GMoqJGIXFd6sYwIYygz9wXcu0m8mYHzXIA4DZv2fSnGI_VxMHLXcU32UR2EtP9h5CYf9l-_zSPuk1t"
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
            />
          )}
        </div>
      </section> */}
    </div>
  );
}
