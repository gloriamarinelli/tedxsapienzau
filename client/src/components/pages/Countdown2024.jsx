import React, { useState } from "react";
import { useOutletContext } from "react-router";

import global from "../../resources/global.json";
import Earth from "../images/earth.webp";
import CountdownLogo from "../images/countdown_logo.webp";

export default function Countdown2024() {
  const [windowSize, setWindowSize] = useOutletContext();

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
          padding: "0 0 40px 0",
          transition: "0.5s all",
        }}
      >
        <p>Cos'è TEDx Countdown?</p>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none">
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

  if (windowSize > global.UTILS.MOBILE_WIDTH)
    return (
      <>
        <section
          style={{
            width: "100vw",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "5em",
          }}
        >
          <img
            src={Earth}
            alt="Earth"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              marginBottom: "-250px",
              width: windowSize > 1100 ? "" : "500px",
            }}
          />
          <img
            src={CountdownLogo}
            alt="Countdown Logo"
            style={{
              marginBottom: "-40px",
              zIndex: 2,
              mixBlendMode: "screen",
              width: windowSize > 1100 ? "" : "600px",
            }}
          />
          <h1
            style={{
              color: "#fff",
              fontFamily: "Anton",
              fontSize: "100px",
              marginLeft: "1ch",
            }}
          >
            <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
              {" "}
              31 | 0
            </span>
            5 | 24
          </h1>
        </section>
        <section
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
          }}
        ></section>
      </>
    );
  else
    return (
      <>
        <section
          style={{
            width: "100vw",
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "2em",
          }}
        >
          <img
            src={Earth}
            alt="Earth"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, rgba(0,0,0,0) 20%,rgba(0,0,0,0.9) 100%)",
              width: windowSize * 0.8,
              marginBottom: "-100px",
            }}
          />
          <img
            src={CountdownLogo}
            alt="Countdown Logo"
            style={{
              zIndex: 2,
              mixBlendMode: "screen",
              width: windowSize * 0.8,
            }}
          />
          <h1
            style={{
              color: "#fff",
              fontFamily: "Anton",
              fontSize: "60px",
              marginLeft: "1ch",
            }}
          >
            <span style={{ color: global.COLORS.GIALLO_COUNTDOWN }}>
              {" "}
              31 | 0
            </span>
            5 | 24
          </h1>
          {getShowMore()}
        </section>

        <section
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: global.COLORS.GIALLO_COUNTDOWN,
          }}
        ></section>
      </>
    );
}
