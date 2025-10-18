import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import arancione from "../images/joinus/arancione.webp";
import celeste from "../images/joinus/celeste.webp";
import blu from "../images/joinus/blu.webp";
import fucsia from "../images/joinus/fucsia.webp";
import rosa from "../images/joinus/rosa.webp";
import rosso from "../images/joinus/rosso.webp";
import verde from "../images/joinus/verde.webp";
import giallo from "../images/joinus/giallo.webp";
import fourth_box_bg from "../images/partners/desktop/4.webp";

import { Trans, useTranslation } from "react-i18next";

export default function JoinUs() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  return (
    <>
      <section
        style={{
          marginTop: global.UTILS.NAV_HEIGHT,
          backgroundColor: global.COLORS.NERO,
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5 text-center"
          style={{
            fontSize: windowSize > global.UTILS.MOBILE_WIDTH ? "50px" : "30px",
            fontWeight: "bold",
            fontFamily: "Fira Sans Extra Condensed",
            color: "#fff",
            margin: "10px",
          }}
        >
          {t("joinus.open_title")}
        </h1>
        {/* first bento */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            minHeight: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
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
          <div
            style={{
              width: "100%",
              minHeight: "100%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fourth_box_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden", // so graphics don't leak outside box
              fontFamily: global.UTILS.FONT_FAMILY,
            }}
          >
            {/* Decorative graphics layer */}
            {/* Floating glowing graphics */}
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
                    height: `${450 + Math.random() * 250}px`,
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

            {/* Content Layer */}
            <div
              style={{
                position: "relative",
                zIndex: 1, // ensures text is above graphics
                width: "90%",
                margin: "0 auto",
                padding: "40px 20px 120px 20px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  paddingBottom: "5%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "7vw", // responsive on mobile
                  textAlign: "center",
                  fontFamily: global.UTILS.FONT_FAMILY,
                }}
              >
                <i>{t("joinus.open_how_to_apply_title")}</i>
              </h1>

              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "4vw", // smaller and fits mobile better
                  maxWidth: "900px",
                  lineHeight: "1.4",
                  textAlign: "center",
                }}
              >
                <Trans
                  i18nKey="joinus.open_description"
                  components={{
                    3: <strong style={{ color: "#eb0028" }}></strong>,
                    1: (
                      <strong style={{ textDecoration: "underline" }}></strong>
                    ),
                    2: (
                      <a
                        href="mailto:info@tedxsapienzau.com"
                        style={{
                          fontFamily: "Fira Sans Extra Condensed",
                          color: "#eb0028",
                        }}
                      >
                        {t("joinus.contact_email")}
                      </a>
                    ),
                  }}
                />
              </h3>

              <a
                className="btn-volunteers"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize:
                    windowSize > global.UTILS.MOBILE_WIDTH ? "25px" : "16px",
                  fontFamily: "sans-serif",
                  color: "#eb0028",
                  marginTop: "40px",
                  width: windowSize > global.UTILS.MOBILE_WIDTH ? "40%" : "95%", // wider on desktop, almost full width on mobile
                  padding: "15px 0",
                  textDecoration: "none",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                href="https://forms.gle/DZdG1DosyGdkV2ZQ7"
                target="_blank"
                rel="noreferrer"
              >
                {t("joinus.open_apply_button")}
              </a>
            </div>
          </div>
        </section>

        {/* second bento */}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            minHeight: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
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
          <div
            style={{
              width: "100%",
              minHeight: "100%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fourth_box_bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden", // so graphics don't leak outside box
              fontFamily: global.UTILS.FONT_FAMILY,
            }}
          >
            {/* Decorative graphics layer */}
            {/* Floating glowing graphics */}
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
                    height: `${450 + Math.random() * 250}px`,
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

            {/* Content Layer */}
            <div
              style={{
                position: "relative",
                zIndex: 1, // ensures text is above graphics
                width: "90%",
                margin: "0 auto",
                padding: "40px 20px 120px 20px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  paddingBottom: "5%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
                  textAlign: "center",
                  fontFamily: global.UTILS.FONT_FAMILY,
                }}
              >
                {t("joinus.open_team_title")}
              </h1>

              {/* --- TEAM SECTIONS BELOW --- */}
              {[
                {
                  img: rosa,
                  color: "#f089b7",
                  title: "External Relationships & Sponsor",
                  text: t("joinus.ERS"),
                },
                {
                  img: fucsia,
                  color: "#bb5c9e",
                  title: "Planning & Event Management",
                  text: t("joinus.PEM"),
                },
                {
                  img: verde,
                  color: "#95c459",
                  title: "Speakers & Event Curation",
                  text: t("joinus.SEC"),
                },
                {
                  img: blu,
                  color: "#2884c7",
                  title: "Human Resources & Academy",
                  text: t("joinus.HRA"),
                },
                {
                  img: arancione,
                  color: "#f07e2a",
                  title: "IT & Website",
                  text: t("joinus.IT"),
                },
                {
                  img: rosso,
                  color: "#e9493a",
                  title: "Communication & Marketing",
                  text: t("joinus.CEM"),
                },
                {
                  img: celeste,
                  color: "#21bcef",
                  title: "Legal & Administrative",
                  text: t("joinus.LA"),
                },
                {
                  img: giallo,
                  color: "#fab732",
                  title: "Design",
                  text: t("joinus.DESIGN"),
                },
              ].map((team, index) => (
                <div
                  key={index}
                  className="parent-aw"
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    marginBottom: "50px",
                    textAlign: "center",
                  }}
                >
                  <div className="text-top-left-aw">
                    <img
                      src={team.img}
                      alt={team.title}
                      style={{
                        height: "25px",
                        width: "50px",
                        objectFit: "cover",
                        marginBottom: "10px",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "40px",
                        color: team.color,
                        fontFamily: "Fira Sans Extra Condensed",
                        marginBottom: "10px",
                        fontFamily: global.UTILS.FONT_FAMILY,
                      }}
                    >
                      {team.title}
                    </h3>
                    <p
                      style={{
                        textAlign: "justify",
                        color: "#fff",
                        fontSize:
                          windowSize > global.UTILS.MOBILE_WIDTH
                            ? "20px"
                            : "15px",
                        fontFamily: "Fira Sans Extra Condensed",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        fontFamily: global.UTILS.FONT_FAMILY,
                      }}
                    >
                      {team.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
