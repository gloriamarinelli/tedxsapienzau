import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";
import "../../index.css";
import "../../resources/styles/home.css";
import RFW_24_logo from "../images/RFW-logo_negativo_su_box.png";

export default function RFW24_Home_News({ withTitle = false }) {
  const [windowSize, setWindowSize] = useOutletContext();
  const [hidden1, setHidden1] = useState(true);

  const renderSubContainer = (hidden, setHidden, endValue, label, fontSize) => (
    <div>
      <h1
        className="font-weight-bold"
        style={{
          color: hidden ? "#eb0028" : "#FFF",
          fontSize: fontSize,
          fontWeight: "bold",
          fontFamily: "Fira sans Extra Condensed",
        }}
      ></h1>
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
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        {/* news' content div */}
        <div
          id="main-left-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            margin: "10px",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            color: "white",
            paddingLeft: "10%",
          }}
        >
          <h1
            style={{
              fontSize: "3.0em",
              paddingBottom: "2%",
            }}
          >
            {" "}
            Rome Future Week{" "}
          </h1>
          <h3
            style={{
              fontSize: "2.0em",
              paddingBottom: "2%",
            }}
          >
            <extra>
              <condensed-extrabold>16 Settembre 2024</condensed-extrabold>
            </extra>
          </h3>
          <h3
            style={{
              fontSize: "2.0em",
              paddingBottom: "2%",
            }}
          >
            <extra>
              <condensed-extrabold>ore 16:00</condensed-extrabold>
            </extra>
          </h3>
          <h3
            style={{
              fontSize: "2.0em",
              paddingBottom: "2%",
            }}
          >
            <a
              style={{
                textDecoration: "underline",
                textDecorationColor: "#eb0028",
                color: "rgb(255, 255, 255)",
              }}
              href="https://www2.uniroma1.it/amm-cda/intranet/allegato16cda02_12_2021.pdf"
            >
              Aula Ex-Cisadu, Città Universitaria
            </a>
          </h3>
          <p
            style={{
              fontSize: "1.4em",
              textAlign: "justify",
            }}
          >
            Un viaggio attraverso i progetti che, grazie alla sinergia tra
            aziende e l'Università di Roma La Sapienza, trasformano la
            collaborazione in benefici tangibili per la comunità accademica e di
            ricerca. Un'occasione unica per scoprire come queste iniziative
            stanno plasmando il futuro dell'innovazione, con approfondimenti su
            aree strategiche che verranno esplorate dagli interventi delle
            esperte e degli esperti durante l'evento.
          </p>
        </div>
        {/* logo div */}
        <div
          id="main-right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            margin: "10px",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            gap: global.UTILS.BENTO_BOX_PADDING,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              id: "RFW_logo_div",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={RFW_24_logo}
              alt="Rome Future Week Logo"
              style={{
                width: "40%",
                height: "auto",
                borderRadius: "10px",
              }}
            ></img>
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
          width: "100vw",
          padding: global.UTILS.BENTO_BOX_PADDING,
          color: "white",
        }}
      >
        <div
          id="main-left-container"
          style={{
            width: "85%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "40%",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "200%",
              paddingBottom: "2%",
            }}
          >
            {" "}
            Rome Future Week{" "}
          </h1>
          <h3
            style={{
              fontSize: "150%",
              paddingBottom: "2%",
            }}
          >
            <extra>
              <condensed-extrabold>16 Settembre 2024</condensed-extrabold>
            </extra>
          </h3>
          <h3
            style={{
              fontSize: "150%",
              paddingBottom: "2%",
            }}
          >
            <extra>
              <condensed-extrabold>ore 16:00</condensed-extrabold>
            </extra>
          </h3>
          <h3
            style={{
              fontSize: "150%",
              paddingBottom: "2%",
            }}
          >
            <a
              style={{
                textDecoration: "underline",
                textDecorationColor: "#eb0028",
                color: "rgb(255, 255, 255)",
              }}
              href="https://www2.uniroma1.it/amm-cda/intranet/allegato16cda02_12_2021.pdf"
            >
              Aula Ex-Cisadu, Città Universitaria
            </a>
          </h3>
          <p
            style={{
              fontSize: "90%",
              textAlign: "justify",
            }}
          >
            Un viaggio attraverso i progetti che, grazie alla sinergia tra
            aziende e l'Università di Roma La Sapienza, trasformano la
            collaborazione in benefici tangibili per la comunità accademica e di
            ricerca. Un'occasione unica per scoprire come queste iniziative
            stanno plasmando il futuro dell'innovazione, con approfondimenti su
            aree strategiche che verranno esplorate dagli interventi delle
            esperte e degli esperti durante l'evento.
          </p>
        </div>
        <div
          id="main-right-container"
          style={{
            width: "85%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "50%",
            marginTop: "20px",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            display: "flex",
            gap: global.UTILS.BENTO_BOX_PADDING,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              id: "RFW_logo_div",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "2%",
            }}
          >
            <img
              src={RFW_24_logo}
              alt="Rome Future Week Logo"
              style={{
                width: "40%",
                height: "auto",
                borderRadius: "10px",
              }}
            ></img>
          </div>
        </div>
      </section>
    );
  }
}
