import React, { useEffect, useRef, useState } from "react";

import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import "../../index.css";
import "../../resources/styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import { Button, Row } from "react-bootstrap";
import CountUp from "react-countup";

export default function MvHome({ withTitle = false }) {
  const [windowSize, setWindowSize] = useOutletContext();
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);

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
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            margin: "10px",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {" "}
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
                TEDXSAPIENZAU E' <br></br> IL TEDX UNIVERSITARIO <br></br> PIU'
                GRANDE IN EUROPA
                <br></br>
                <br></br>
              </condensed-extrabold>
            </extra>
          </h1>
          <Link to="/mission&vision">
            <Button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                fontWeight: "bold",
                padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
              }}
            >
              Scopri di più
            </Button>
          </Link>
        </div>
        <div
          id="main-right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            margin: "10px",

            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#000",
            display: "grid", // Change to grid display
            gridTemplateColumns: "1fr 1fr", // Divide into two columns
            gridTemplateRows: "1fr 1fr", // Divide into two rows
            gap: global.UTILS.BENTO_BOX_PADDING, // Add gap between grid items
            position: "relative",
          }}
        >
          {/* First sub-container */}
          <div
            onMouseEnter={() => setHidden1(false)}
            onMouseLeave={() => setHidden1(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden1 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                paddingTop: "-40px",
                color: hidden1 ? "#eb0028" : "#FFF",
                fontSize: windowSize > 1245 ? "12vh" : "9vh",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp end={26} duration={2} useEasing={false} separator="" />
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
              speakers
            </h5>
          </div>
          {/* Second sub-container */}
          <div
            onMouseEnter={() => setHidden2(false)}
            onMouseLeave={() => setHidden2(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden2 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                paddingTop: "-40px",
                color: hidden2 ? "#eb0028" : "#FFF",
                fontSize: windowSize > 1245 ? "12vh" : "9vh",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp end={3000} duration={2} useEasing={false} separator="" />
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
              spettatori
            </h5>
          </div>
          {/* Third sub-container */}
          <div
            onMouseEnter={() => setHidden3(false)}
            onMouseLeave={() => setHidden3(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden3 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                paddingTop: "-40px",
                color: hidden3 ? "#eb0028" : "#FFF",
                fontSize: windowSize > 1245 ? "12vh" : "9vh",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp end={5160} duration={2} useEasing={false} separator="" />
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
              social followers
            </h5>
          </div>
          {/* Fourth sub-container */}
          <div
            onMouseEnter={() => setHidden4(false)}
            onMouseLeave={() => setHidden4(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden4 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                paddingTop: "-40px",
                color: hidden4 ? "#eb0028" : "#FFF",
                fontSize: windowSize > 1245 ? "11vh" : "8vh",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp
                end={22083}
                duration={2}
                useEasing={false}
                separator=""
              />
            </h1>
            <h5
              style={{
                paddingTop: "-40px",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
                color: "#FFF",
                fontSize: windowSize > 1245 ? "3vh" : "2vh",
              }}
            >
              visualizzazioni su youtube
            </h5>
          </div>
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
          alignItems: "center",
          height:
            windowSize > global.UTILS.TABLET_WIDTH
              ? `calc(130vh - ${global.UTILS.NAV_HEIGHT})`
              : `calc(170vh - ${global.UTILS.NAV_HEIGHT})`,
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
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {" "}
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
                TEDXSAPIENZAU E' <br></br> IL TEDX UNIVERSITARIO <br></br> PIU'
                GRANDE IN EUROPA
                <br></br>
                <br></br>
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
              Scopri di più
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
            display: "grid", // Change to grid display
            gridTemplateColumns: "1fr ", // Divide into two columns
            gridTemplateRows: "1fr", // Divide into two rows
            gap: global.UTILS.BENTO_BOX_PADDING, // Add gap between grid items
            position: "relative",
          }}
        >
          {/* First sub-container */}
          <div
            onMouseEnter={() => setHidden1(false)}
            onMouseLeave={() => setHidden1(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden1 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                color: hidden1 ? "#eb0028" : "#FFF",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp end={26} duration={2} useEasing={false} separator="" />
            </h1>
            <h5
              style={{
                fontWeight: "bold",
                fontFamily: "GothamBold",
                color: "#FFF",
              }}
            >
              speakers
            </h5>
          </div>
          {/* Second sub-container */}
          <div
            onMouseEnter={() => setHidden2(false)}
            onMouseLeave={() => setHidden2(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden2 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                color: hidden2 ? "#eb0028" : "#FFF",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp end={3000} duration={2} useEasing={false} separator="" />
            </h1>
            <h5
              style={{
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
                color: "#FFF",
              }}
            >
              spettatori
            </h5>
          </div>
          {/* Third sub-container */}
          <div
            onMouseEnter={() => setHidden3(false)}
            onMouseLeave={() => setHidden3(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden3 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                color: hidden3 ? "#eb0028" : "#FFF",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "Fira sans Extra Condensed",
              }}
            >
              <CountUp end={5160} duration={2} useEasing={false} separator="" />
            </h1>
            <h5
              style={{
                fontWeight: "bold",
                fontFamily: "GothamBold",
                color: "#FFF",
              }}
            >
              social followers
            </h5>
          </div>
          {/* Fourth sub-container */}
          <div
            onMouseEnter={() => setHidden4(false)}
            onMouseLeave={() => setHidden4(true)}
            style={{
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: hidden4 ? "#191919" : "#eb0028",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "background-color 0.3s ease",
            }}
          >
            <h1
              className="font-weight-bold mt-5 "
              style={{
                color: hidden4 ? "#eb0028" : "#FFF",
                fontSize: "60px",
                fontWeight: "bold",
                fontFamily: "GothamBold",
              }}
            >
              <CountUp
                end={22083}
                duration={2}
                useEasing={false}
                separator=""
              />
            </h1>
            <h5
              style={{
                fontWeight: "bold",
                fontFamily: "GothamBold",
                color: "#FFF",
              }}
            >
              visualizzazioni su youtube
            </h5>
          </div>
        </div>
      </section>
    );
  }
}
