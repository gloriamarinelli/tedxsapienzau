import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import logo from "../images/awards24/awards24.webp";

import { Button } from "react-bootstrap";

import arancione from "../images/joinus/arancione.webp";
import celeste from "../images/joinus/celeste.webp";
import blu from "../images/joinus/blu.webp";
import fucsia from "../images/joinus/fucsia.webp";
import rosa from "../images/joinus/rosa.webp";
import rosso from "../images/joinus/rosso.webp";
import verde from "../images/joinus/verde.webp";
import giallo from "../images/joinus/giallo.webp";

import bento from "../images/joinus/bento.png";

export default function HomeAwards24() {
  const [windowSize] = useOutletContext();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleYScroll);
  }, [windowSize]);

  function handleYScroll() {
    setScrollY(window.scrollY);

    // as the window scroll down move the div teamLogosBannerTop to the left
    let teamLogosBannerTop = document.getElementById("teamLogosBannerTop");
    if (teamLogosBannerTop) {
      teamLogosBannerTop.style.transform = `translateX(-${window.scrollY}px)`;
    }

    // as the window scroll down move the div teamLogosBannerBottom to the right
    let teamLogosBannerBottom = document.getElementById(
      "teamLogosBannerBottom"
    );
    if (teamLogosBannerBottom) {
      teamLogosBannerBottom.style.transform = `translateX(${window.scrollY}px)`;
    }
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
        padding: "0 0 80px 0",
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

  const commonContent = () => {
    let aspectRatio = "2/1";
    let width = "450px";

    return (
      <section
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: width,
            aspectRatio: aspectRatio,
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            backgroundImage: `url(${bento})`,
            backgroundSize: "contain",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1
            className="fira-sans mb-5"
            style={{
              textAlign: "center",
              fontSize: "50px",
              color: "#FFFFFF",
              fontFamily: "GothamBold",
            }}
          >
            DOVE
          </h1>
          <p style={{ fontSize: "30px" }}>NUOVO TEATRO ATENEO</p>
          <p style={{ fontSize: "20px" }}>CITTA' UNIVERSITARIA</p>
        </div>

        <div
          style={{
            width: width,
            aspectRatio: aspectRatio,
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            backgroundImage: `url(${bento})`,
            backgroundSize: "contain",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1
            className="fira-sans mb-5"
            style={{
              textAlign: "center",
              fontSize: "50px",
              color: "#FFFFFF",
              fontFamily: "GothamBold",
            }}
          >
            QUANDO
          </h1>
          <p style={{ fontSize: "30px" }}>28 Novembre 2024</p>
          <p style={{ fontSize: "20px" }}>TBD 🕒</p>
        </div>
      </section>
    );
  };

  const getBannerTeamLogos = () => {
    const logoHeight = "80px";
    return (
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT} `,
          marginTop: global.UTILS.NAV_HEIGHT,
          position: "absolute",
        }}
      >
        <div id="teamLogosBannerTop" style={{ width: "600vw" }}>
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} />
          <img src={giallo} width={logoHeight} />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} />
          <img src={blu} width={logoHeight} />
          <img src={fucsia} width={logoHeight} />
          <img src={rosa} width={logoHeight} />
          <img src={rosso} width={logoHeight} />
        </div>
        <div
          id="teamLogosBannerBottom"
          style={{
            width: "600vw",
            maxHeight: logoHeight,
            overflow: "hidden",
            position: "absolute",
            bottom: 20,
            left: -1000,
          }}
        >
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} />
          <img src={giallo} width={logoHeight} />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} />
          <img src={blu} width={logoHeight} />
          <img src={fucsia} width={logoHeight} />
          <img src={rosa} width={logoHeight} />
          <img src={rosso} width={logoHeight} />
        </div>
      </div>
    );
  };

  const getBannerTeamLogosMobile = () => {
    const logoHeight = "40px";
    return (
      <div
        style={{
          width: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT} `,
          marginTop: global.UTILS.NAV_HEIGHT,
          position: "absolute",
        }}
      >
        <div id="teamLogosBannerTop" style={{ width: "600vw" }}>
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} alt="" />
          <img src={giallo} width={logoHeight} alt="" />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} alt="" />
          <img src={blu} width={logoHeight} alt="" />
          <img src={fucsia} width={logoHeight} alt="" />
          <img src={rosa} width={logoHeight} alt="" />
          <img src={rosso} width={logoHeight} alt="" />
          <img src={verde} width={logoHeight} />
          <img src={giallo} width={logoHeight} />
          <img src={arancione} width={logoHeight} alt="" />
          <img src={celeste} width={logoHeight} />
          <img src={blu} width={logoHeight} />
          <img src={fucsia} width={logoHeight} />
          <img src={rosa} width={logoHeight} />
          <img src={rosso} width={logoHeight} />
        </div>
      </div>
    );
  };

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

          {getBannerTeamLogos()}

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
          <div className="container mb-5 d-flex justify-content-center align-items-center flex-column mt-5">
            <p
              style={{
                fontSize: "25px",
                fontFamily: "GothamBook",
                maxWidth: "75ch",
                textAlign: "justify",
                lineHeight: "40px",
                color: "#fff",
              }}
            >
              I <b style={{ color: "#eb0028" }}>SapienzaU Awards</b> sono
              organizzati dall'
              <b style={{ color: "#eb0028" }}>Associazione SapienzaU</b> ed
              hanno lo scopo di promuovere idee di valore, offrendo ai vincitori
              la prestigiosa opportunità di esibirsi sul palco dell'edizione
              2025 del TEDxSapienzaU. I 5 vincitori dei SapienzaU Awards,{" "}
              <b style={{ color: "#eb0028" }}>3 Speakers e 2 Artists</b>
              , verranno premiati sul palco della finale e avranno l'occasione
              di condividere le loro idee con un pubblico ampio, promuovendo il
              loro messaggio di innovazione e ispirazione.
              <br />
              <br />
            </p>
            <Button
              href="https://forms.gle/9EKGjY8NGt6vWKe86"
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: "9999px",
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "GothamBook",
                padding: "10px 20px",
              }}
            >
              Candidati qui!
            </Button>
          </div>
          {commonContent()}
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
            padding: "0 20px",
          }}
        >
          {getBannerTeamLogosMobile()}
          <div
            style={{
              height: "80vh",
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="SapienzaU Awards"
              width="80%"
              style={{ marginBottom: "-30px" }}
            />
          </div>

          <div className="container d-flex justify-content-center align-items-center flex-column mt-4 mb-5">
            <p
              style={{
                fontSize: "18px",
                fontFamily: "GothamBook",
                maxWidth: "90%",
                textAlign: "justify",
                lineHeight: "28px",
                color: "#fff",
              }}
            >
              I <b style={{ color: "#eb0028" }}>SapienzaU Awards</b> sono
              organizzati dall'
              <b style={{ color: "#eb0028" }}>Associazione SapienzaU</b> ed
              hanno lo scopo di promuovere idee di valore, offrendo ai vincitori
              la prestigiosa opportunità di esibirsi sul palco dell'edizione
              2025 del TEDxSapienzaU. I 5 vincitori dei SapienzaU Awards,{" "}
              <b style={{ color: "#eb0028" }}>3 Speakers e 2 Artists</b>,
              verranno premiati sul palco della finale e avranno l'occasione di
              condividere le loro idee con un pubblico ampio, promuovendo il
              loro messaggio di innovazione e ispirazione.
            </p>

            <Button
              href="https://forms.gle/9EKGjY8NGt6vWKe86"
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: "9999px",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "GothamBook",
                padding: "8px 16px",
                marginTop: "20px",
              }}
            >
              Candidati qui!
            </Button>
          </div>

          <section
            style={{
              width: "100%",
              margin: "auto",
              display: "flex",
              flexDirection: "column", // Stack vertically
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "90%", // Adjusted width for mobile
                aspectRatio: "2/1",
                padding: global.UTILS.BENTO_BOX_PADDING,
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                backgroundColor: "#191919",
                backgroundImage: `url(${bento})`,
                backgroundSize: "contain",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "30px", // Smaller font size for mobile
                  color: "#FFFFFF",
                  fontFamily: "GothamBold",
                }}
              >
                DOVE
              </h1>
              <p style={{ fontSize: "20px" }}>NUOVO TEATRO ATENEO</p>
              <p style={{ fontSize: "16px" }}>CITTA' UNIVERSITARIA</p>
            </div>

            <div
              style={{
                width: "90%",
                aspectRatio: "2/1",
                padding: global.UTILS.BENTO_BOX_PADDING,
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                backgroundColor: "#191919",
                backgroundImage: `url(${bento})`,
                backgroundSize: "contain",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  color: "#FFFFFF",
                  fontFamily: "GothamBold",
                }}
              >
                QUANDO
              </h1>
              <p style={{ fontSize: "20px" }}>28 Novembre 2024</p>
              <p style={{ fontSize: "16px" }}>TBD 🕒</p>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
