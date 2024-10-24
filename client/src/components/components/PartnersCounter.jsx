import React, { useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import "../../index.css";
import "../../resources/styles/home.css";
import CountUp from "react-countup";
import { useTranslation, Trans } from "react-i18next";

/**
 * Component that renders the information about TEDxSapienzaU in the Partners page.
 * It shows the number of speakers, spectators, followers and YouTube views. All in bento boxes.
 */
export default function PartnersCounter() {
  const { t } = useTranslation();
  const [windowSize, setWindowSize] = useOutletContext();
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);

  const renderSubContainer = (hidden, setHidden, endValue, label, fontSize) => (
    <div
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      style={{
        borderRadius: global.UTILS.BENTO_BOX_PADDING,
        backgroundColor: hidden ? "#191919" : "#eb0028",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "background-color 0.3s ease",
        padding: global.UTILS.BENTO_BOX_PADDING,
      }}
    >
      <h1
        className="font-weight-bold"
        style={{
          color: hidden ? "#eb0028" : "#FFF",
          fontSize: fontSize,
          fontWeight: "bold",
          fontFamily: "Fira sans Extra Condensed",
        }}
      >
        <CountUp end={endValue} duration={2} useEasing={false} separator="" />
      </h1>
      <h5
        style={{
          paddingTop: "-40px",
          fontWeight: "bold",
          fontFamily: "Fira sans Extra Condensed",
          color: "#FFF",
          fontSize: windowSize > 1245 ? "4vh" : "3vh",
        }}
      >
        {label}
      </h5>
    </div>
  );

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <div>
        {/* title div */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                paddingBottom: "2%",
                fontWeight: "bold",
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "5vh" : "8vh",
              }}
            >
              {t("partners.stats")}
            </h1>

            <h3
              style={{
                paddingBottom: "2%",
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "3vh" : "5vh",
              }}
            >
              {t("partners.events")}
            </h3>
          </div>
        </div>
        <section
          style={{
            display: windowSize > global.UTILS.TABLET_WIDTH ? "flex" : "flow",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            backgroundColor: "#000",
            padding: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          {/* counters div */}
          <div
            id="main-right-container"
            style={{
              width: "100%",
              height:
                windowSize > global.UTILS.BIG_TABLET_WIDTH ? "100%" : "50%",
              margin: "10px",
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: "#000",
              display: "grid",
              gridTemplateColumns:
                windowSize > global.UTILS.BIG_TABLET_WIDTH
                  ? "repeat(4, 1fr)"
                  : "1fr 1fr",
              gridTemplateRows:
                windowSize > global.UTILS.BIG_TABLET_WIDTH ? "1fr" : "1fr 1fr",
              gap: global.UTILS.BENTO_BOX_PADDING,
              position: "relative",
            }}
          >
            {renderSubContainer(
              hidden1,
              setHidden1,
              3000,
              t("partners.people"),
              windowSize > 1245 ? "9vh" : "6vh"
            )}
            {renderSubContainer(
              hidden2,
              setHidden2,
              33000,
              t("partners.yt_views"),
              windowSize > 1245 ? "9vh" : "6vh"
            )}
            {renderSubContainer(
              hidden3,
              setHidden3,
              50,
              t("partners.partners"),
              windowSize > 1245 ? "9vh" : "6vh"
            )}
            {renderSubContainer(
              hidden4,
              setHidden4,
              300,
              t("partners.volunteers"),
              windowSize > 1245 ? "9vh" : "6vh"
            )}
          </div>
        </section>
      </div>
    );
  }
}
