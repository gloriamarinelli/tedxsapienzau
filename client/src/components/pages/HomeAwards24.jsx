import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import logo from "../images/awards24/awards24.webp";

export default function HomeAwards24() {
  const [windowSize] = useOutletContext();
  const [scrollY, setScrollY] = useState(0);
  const svgRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", handleYScroll);

    if (windowSize > 1100) {
      let path = svgRef.current.querySelector("path");
      let length = path.getTotalLength();
      path.style.strokeDasharray = length + " " + length;

      let offset = windowSize > 1360 ? 6500 : 5500;
      path.style.strokeDashoffset = offset;

      window.addEventListener("scroll", function () {
        let scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
        let drawLength = length * scrollPercentage;
        path.style.strokeDashoffset = offset - drawLength;
      });
    }
  }, [windowSize]);

  function handleYScroll() {
    setScrollY(window.scrollY);
  }

  const getShowMore = () => (
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
        padding: "0 0 10px 0",
        transition: "0.5s all",
        opacity: scrollY > 450 ? 0 : 1,
      }}
    >
      <p>Cosa sono i SapienzaU Awards?</p>
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 15L13 22L25 15" stroke="white" strokeWidth="2" />
        <path
          d="M1 8L13 15L25 8"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2"
        />
        <path
          d="M1 0.999999L13 8L25 1"
          stroke="white"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      </svg>
    </div>
  );

  const commonContent = (
    <>
      <div
        style={{
          width: "100vw",
          backgroundColor: "black",
          textAlign: "center",
          marginTop: "50px",
          color: "#fff",
        }}
      >
        <h1 style={{ color: global.COLORS.ROSSO_TED_2023 }}>QUANDO</h1>
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className="container mb-5 d-flex justify-content-center align-items-center flex-column">
            <p
              style={{
                fontSize: "30px",
                fontFamily: "GothamBook",
                maxWidth: "75ch",
                textAlign: "center",
                lineHeight: "40px",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              28 NOVEMBRE 2024
              <br />
              NUOVO TEATRO ATENEO
            </p>
          </div>
        </div>
      </div>
    </>
  );

  if (windowSize > 1100) {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
          }}
        >
          {getShowMore()}
          {/* SVG for Desktop */}
          {windowSize > 1360 ? (
            <svg
              width={"100%"}
              height={"100%"}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
              ref={svgRef}
              viewBox="0 0 1918 2692"
              fill="none"
            >
              <path
                d="M4.5 13.5C34.3333 0.999942 109.48 31.5142 124 135.001C155.5 359.5 112.5 664 455.5 614.003C974.806 538.307 854 274.5 683 337.001C580.571 374.439 582.029 514.713 854 810.004C1198 1183.5 545.179 1659.65 359.5 1454.01C-73 975.004 1236.14 721.159 854 1619.01C462 2540.01 782.848 2880.17 1165 2568.01C1675.5 2151.01 1563.5 2198.01 1918 2198.01"
                stroke={global.COLORS.ROSSO_TED_2023}
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width={"100%"}
              height={"100%"}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
              ref={svgRef}
              viewBox="0 0 1570 2488"
              fill="none"
            >
              <path
                d="M-13.5 14.0001C16.3255 -0.240562 222 14 126.5 307.5C98.241 394.349 66.9936 695.703 331.5 615C703.5 501.5 576.104 31.4665 423.5 307.5C253.5 615 639 805.842 532.5 1078C278.362 1727.44 126.5 1430.36 126.5 1254.5C126.5 983 838.5 1349 599.5 1976.5C468.646 2320.06 680.948 2688.13 1063 2332.5C1333 2081.17 1479.5 1946.5 1576.5 1856"
                stroke="#F1FF39"
                strokeWidth="20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          <div
            style={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              paddingLeft: "7vw",
              justifyContent: "space-between",
              padding: "0 5vw 0 0",
            }}
          >
            <div style={{ marginLeft: "auto" }}>
              <img
                src={logo}
                alt="SapienzaU Awards"
                width={windowSize > 1360 ? "900px" : "750px"}
                style={{ marginBottom: "-50px" }}
              />
            </div>
          </div>
          <div className="container mb-5 d-flex justify-content-center align-items-center flex-column">
            <p
              style={{
                fontSize: "20px",
                fontFamily: "GothamBook",
                maxWidth: "75ch",
                textAlign: "justify",
                lineHeight: "40px",
                color: "#fff",
              }}
            >
              Il concorso <b style={{ color: "#eb0028" }}>SapienzaU Awards</b> è
              organizzato dall'{" "}
              <b style={{ color: "#eb0028" }}>Associazione SapienzaU</b> ed ha
              lo scopo di promuovere idee di valore, offrendo ai vincitori la
              prestigiosa opportunità di esibirsi sul palco dell'edizione 2025
              del TEDxSapienzaU. I 5 vincitori del concorso SapienzaU Awards,{" "}
              <b style={{ color: "#eb0028" }}>3 Speakers e 2 Artists</b>,
              verranno premiati sul palco della finale e hanno l'occasione di
              esibirsi durante l'evento TEDxSapienzaU 2025!
              <br />
              <br />
              Candidati qui:{" "}
              <a
                href="https://forms.gle/24mnez76mMoNekSW9"
                style={{ color: "#eb0028", textDecoration: "underline" }}
              >
                Candidati!
              </a>
            </p>
          </div>
          {commonContent}
        </section>
      </div>
    );
  } else if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "0 0 50px 0",
              overflow: "hidden",
            }}
          >
            <img
              src={logo}
              alt="SapienzaU Awards"
              width={"80%"}
              style={{ marginTop: "-80px", marginBottom: "-50px" }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "justify",
            }}
          ></div>
          {commonContent}
        </section>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <section
          style={{
            height: "100%",
            width: "100vw",
            backgroundColor: "#000",
            position: "relative",
            fontFamily: "Anton",
            paddingTop: "100px",
          }}
        >
          <div
            style={{
              height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
              width: "100vw",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "column",
              padding: " 80px 0",
              overflow: "hidden",
            }}
          >
            <img
              src={logo}
              alt="SapienzaU Awards"
              width={"80%"}
              style={{ marginTop: "-70px", marginBottom: "0px" }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "50px 0",
              backgroundColor: global.COLORS.ROSSO_TED_2023,
            }}
          ></div>
          {commonContent}
        </section>
      </div>
    );
  }
}
