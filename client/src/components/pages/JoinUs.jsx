import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import volunteers from "../images/volunteers.webp";
import arancione from "../images/joinus/arancione.webp";
import celeste from "../images/joinus/celeste.webp";
import blu from "../images/joinus/blu.webp";
import fucsia from "../images/joinus/fucsia.webp";
import rosa from "../images/joinus/rosa.webp";
import rosso from "../images/joinus/rosso.webp";
import verde from "../images/joinus/verde.webp";
import giallo from "../images/joinus/giallo.webp";

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
              fontSize: windowSize > global.UTILS.MOBILE_WIDTH? "60px" : "40px",
              fontWeight: "bold",
              fontFamily: "Fira Sans Extra Condensed",
              color: "#fff",
              margin: "10px",
            }}
          >
            {t("joinus.open_title")}
          </h1>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH? "95%" : "90%",
              height: windowSize > global.UTILS.MOBILE_WIDTH? "200px":"100px",
              margin: "auto",
              padding: "30px",
              backgroundImage: `url(${volunteers})`,
              backgroundSize: "cover",
              backgroundPosition: windowSize > global.UTILS.MOBILE_WIDTH?"0px -40px":"0px 0px",
            }}
          ></div>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH?"95%":"90%",
              margin: "auto",
              padding: windowSize > global.UTILS.MOBILE_WIDTH?"30px":"5px",
              marginTop: "50px",
            }}
          >
            <div className="container-lg marketing">
              <h3
                className="title"
                style={{
                  fontSize: "50px",
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "30px",
                  color: "#eb0028",
                }}
              >
                {t("joinus.open_how_to_apply_title")}
              </h3>
            </div>

            <div className="container-lg marketing">
              <p
                className="paragraph"
                style={{
                  textAlign: "justify",
                  fontFamily: "Fira Sans Extra Condensed",
                  color: "#fff",
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
                          fontFamily: '"Fira Sans Extra Condensed"',
                          color: "#eb0028",
                        }}
                      />
                    ),
                  }}
                />
              </p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  className="btn-volunteers"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize:
                    windowSize > global.UTILS.MOBILE_WIDTH? "35px" : "20px",
                    textDecoration: "",
                    fontFamily: "sans-serif",
                    color: "#eb0028",
                    marginTop: "40px",
                    width: windowSize > global.UTILS.MOBILE_WIDTH?"40%":"90%",
                  }}
                  href="https://forms.gle/DZdG1DosyGdkV2ZQ7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{t("joinus.open_apply_button")}</strong>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#191919",
              borderRadius: "25px",
              width: windowSize > global.UTILS.MOBILE_WIDTH?"95%":"90%",
              margin: "auto",
              padding: windowSize > global.UTILS.MOBILE_WIDTH?"10px":"5px",
              marginTop:  windowSize > global.UTILS.MOBILE_WIDTH?"50px":"30px",
            }}
          >
            <div>
              <h1
                className="title"
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                  fontFamily: "Fira Sans Extra Condensed",
                  marginTop: "80px",
                  color: "#eb0028",
                  textAlign: "center",
                }}
              >
                {t("joinus.open_team_title")}
              </h1>
            </div>

            <div
              className="container-lg mt-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <img
                    src={rosa}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#f089b7",
                    }}
                  >
                    External Relations & Sponsorship
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.ERS")}
                  </p>
                </div>
                <div class="text-bottom-right-aw">
                  <img
                    src={fucsia}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#bb5c9e",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Planning & Event Management
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.PEM")}
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <img
                    src={verde}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#95c459",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Speakers & Event Curation
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.SEC")}
                  </p>
                </div>
                <div class="text-bottom-right-aw">
                  <img
                    src={blu}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#2884c7",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Human Resources & Academy
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.HRA")}
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div
                class="parent-aw"
                style={{color: '#fff' ,fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <img
                    src={arancione}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#f07e2a",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    IT & Website
                  </h2>
                  <Trans
                    i18nKey="joinus.IT"
                    components={{
                      2: (
                        <a
                          href="https://www.tedxsapienzau.com/"
                          style={{ color: "#eb0028" }}
                        />
                      ),
                      1: (
                        <a
                          href="https://tedxsapienzauapp.vercel.app/"
                          style={{ color: "#eb0028" }}
                        />
                      ),
                    }}
                  />
                </div>

                <div class="text-bottom-right-aw">
                  <img
                    src={rosso}
                    alt=""
                    style={{
                      marginTop:"10px",
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#e9493a",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Communication & Marketing
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.CEM")}
                  </p>
                </div>
              </div>
            </div>

            <div className="container-lg mt-3">
              <div
                class="parent-aw"
                style={{ fontFamily: "Fira Sans Extra Condensed" }}
              >
                <div class="text-top-left-aw">
                  <img
                    src={celeste}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#21bcef",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Legal & Administrative
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.LA")}
                  </p>
                </div>

                <div class="text-bottom-right-aw">
                  <img
                    src={giallo}
                    alt=""
                    style={{
                      height: "25px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <h2
                    style={{
                      fontSize: "40px",
                      color: "#fab732",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    Design
                  </h2>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Fira Sans Extra Condensed",
                    }}
                  >
                    {t("joinus.DESIGN")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }