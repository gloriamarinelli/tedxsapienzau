import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";
import "../../index.css";
import "../../resources/styles/home.css";
import { Button } from "react-bootstrap";
import CountUp from "react-countup";
import { useTranslation} from "react-i18next";

/**
 * Component that renders the information about TEDxSapienzaU in the home page.
 * It shows the number of speakers, spectators, followers and YouTube views. All in bento boxes.
 */
export default function MvHome() {
  const { t } = useTranslation();
  const [windowSize] = useOutletContext();
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
          id="main-left-container"
          style={{
            width: windowSize > global.UTILS.TABLET_WIDTH ? "70%" : "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            margin: "10px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            className="fira-sans mb-5"
            style={{
              textAlign: "center",
              fontSize: windowSize > 1245 ? "6vh" : "4vh",
              color: "#FFFFFF",
            }}
          >
            <extra>
              <condensed-extrabold>
                {t("mvhome.description")}
              </condensed-extrabold>
            </extra>
          </h1>
          <a href="/mission&vision">
            <Button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                fontWeight: "bold",
                padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
              }}
            >
              {t("mvhome.find_out_more")}
            </Button>
          </a>
        </div>
        <div
          id="main-right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            margin: "10px",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#000",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: global.UTILS.BENTO_BOX_PADDING,
            position: "relative",
          }}
        >
          {renderSubContainer(
            hidden1,
            setHidden1,
            31,
            t("mvhome.speakers"),
            windowSize > 1245 ? "12vh" : "9vh"
          )}
          {renderSubContainer(
            hidden2,
            setHidden2,
            3000,
            t("mvhome.spectators"),
            windowSize > 1245 ? "12vh" : "9vh"
          )}
          {renderSubContainer(
            hidden3,
            setHidden3,
            8500,
            t("mvhome.followers"),
            windowSize > 1245 ? "12vh" : "9vh"
          )}
          {renderSubContainer(
            hidden4,
            setHidden4,
            35000,
            t("mvhome.yt_views"),
            windowSize > 1245 ? "11vh" : "8vh"
          )}
        </div>
      </section>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <section
        style={{
          display: windowSize > global.UTILS.TABLET_WIDTH ? "flex" : "flow",
          justifyContent: "center",
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        <div
          id="main-left-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "40%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1
            className="fira-sans mb-5"
            style={{
              textAlign: "center",
              fontSize: windowSize > 1245 ? "6vh" : "4vh",
              color: "#FFFFFF",
            }}
          >
            <extra>
              <condensed-extrabold>
                {t("mvhome.description")}
              </condensed-extrabold>
            </extra>
          </h1>
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
              {t("mvhome.find_out_more")}
            </Button>
          </Link>
        </div>
        <div
          id="main-right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            marginTop: "20px",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#000",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "repeat(4, 1fr)",
            gap: global.UTILS.BENTO_BOX_PADDING,
            position: "relative",
          }}
        >
          {renderSubContainer(
            hidden1,
            setHidden1,
            31,
            t("mvhome.speakers"),
            "80px"
          )}
          {renderSubContainer(
            hidden2,
            setHidden2,
            3000,
            t("mvhome.spectators"),
            "80px"
          )}
          {renderSubContainer(
            hidden3,
            setHidden3,
            8500,
            t("mvhome.followers"),
            "80px"
          )}
          {renderSubContainer(
            hidden4,
            setHidden4,
            35000,
            t("mvhome.yt_views"),
            "60px"
          )}
        </div>
      </section>
    );
  }
}
