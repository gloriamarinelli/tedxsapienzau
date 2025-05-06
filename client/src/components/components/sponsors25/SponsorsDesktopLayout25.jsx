import { useTranslation } from "react-i18next";
import PartnersCounter from "./PartnersCounter";
import { useOutletContext } from "react-router";
import global from "../../../resources/global.json";
import SponsorsSlider from "./SponsorsSlider";
import PartnersList24 from "./PartnersList24";

/* -------------------- images import -------------------- */
import first_box_bg from "../../images/partners/desktop/3.webp";
import second_box_bg from "../../images/partners/desktop/6.webp";
import third_box_bg from "../../images/partners/desktop/5.webp";
import fourth_box_bg from "../../images/partners/desktop/4.webp";
import volunteers from "../../images/partners/desktop/volunteers_darker_filter.webp";

export default function PartnersDesktopLayout24() {
  const { t } = useTranslation(); // translation variable
  const [windowSize] = useOutletContext(); // window's size variable

  return (
    <div style={{ backgroundColor: "#000" }}>
      <PartnersList24 />
      {/* first row */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          // marginTop: global.UTILS.NAV_HEIGHT, ***IMPORTANTE*** da ripristinare nel caso in cui la "PartnersList24" non sia presente!
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
            height: "90%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${first_box_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: global.UTILS.FONT_FAMILY,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* content's div */}
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
                }}
              >
                {t("partners.opening_st")}
              </h1>
              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                }}
              >
                {t("partners.2nd_st")}
                <span className="red-txt">{t("partners.2nd_st_red")}</span>.
              </h3>
              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                }}
              >
                {t("partners.3rd_st")}
              </h3>
            </div>
          </div>

          {/* placeholder div */}
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
            }}
          ></div>
        </div>
      </section>
      {/* second row */}
      <PartnersCounter />
      <SponsorsSlider />
      {/* third row */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
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
            height: "90%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${second_box_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: global.UTILS.FONT_FAMILY,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* content's div */}
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
                  paddingBottom: "2%",
                }}
              >
                {t("partners.4th_st")}
              </h1>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* content's div */}
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
                }}
              >
                <i>{t("partners.5th_st")}</i>
              </h1>
              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                }}
              >
                {t("partners.6th_st")}
                <br></br>
                {t("partners.7th_st")}
                <span className="red-txt">{t("partners.7th_st_red")}</span>.
              </h3>
              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                }}
              >
                {t("partners.8th_st_1")}
                <span className="red-txt">{t("partners.8th_st_red")}</span>
                {t("partners.8th_st_2")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* fourth row */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
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
            height: "90%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${third_box_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: global.UTILS.FONT_FAMILY,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>

          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* content's div */}
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
                }}
              >
                {t("partners.9th_st")}
              </h1>
              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                }}
              >
                {t("partners.10th_st")}
              </h3>
              <h3
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                }}
              >
                {t("partners.11th_st_1")}
                <br></br>
                {t("partners.11th_st_2")}
                <span className="red-txt">{t("partners.11th_st_red")}</span>
                {t("partners.11th_st_3")}
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* fifth row */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
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
            height: "90%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${fourth_box_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection:
              windowSize > global.UTILS.TABLET_WIDTH ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: global.UTILS.FONT_FAMILY,
            position: "relative",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* content's div */}
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={volunteers}
                alt="TEDxSapienzaU Volunteers"
                style={{
                  width: "100%",
                  height: "20%",
                  borderRadius: global.UTILS.BENTO_BOX_PADDING,
                }}
              ></img>
            </div>
          </div>

          <div
            style={{
              width: "50%",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* content's div */}
            <div
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  paddingBottom: "2%",
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
                }}
              >
                {t("partners.14th_st")}
              </h1>
              <ul>
                <li>
                  <h3
                    style={{
                      paddingBottom: "2%",
                      fontSize:
                        windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                    }}
                  >
                    {t("partners.14th_st_el_1")}
                  </h3>
                </li>
                <li>
                  <h3
                    style={{
                      paddingBottom: "2%",
                      fontSize:
                        windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                    }}
                  >
                    {t("partners.14th_st_el_2")}
                  </h3>
                </li>
                <li>
                  <h3
                    style={{
                      paddingBottom: "2%",
                      fontSize:
                        windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                    }}
                  >
                    {t("partners.14th_st_el_3")}
                  </h3>
                </li>
                <li>
                  <h3
                    style={{
                      paddingBottom: "2%",
                      fontSize:
                        windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                    }}
                  >
                    {t("partners.14th_st_el_4")}
                  </h3>
                </li>
                <li>
                  <h3
                    style={{
                      paddingBottom: "2%",
                      fontSize:
                        windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
                    }}
                  >
                    {t("partners.14th_st_el_5")}
                  </h3>
                </li>
              </ul>
              <button
                style={{
                  borderRadius: "10px",
                  border: "none",
                  padding: "10px 0",
                  margin: "0 25px",
                  backgroundColor: global.COLORS.ROSSO_TED,
                }}
              >
                <a
                  href="mailto:tedx.sapienzau@uniroma1.it"
                  style={{
                    fontFamily: global.UTILS.FONT_FAMILY,
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {t("partners.14th_st_el_6")}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
