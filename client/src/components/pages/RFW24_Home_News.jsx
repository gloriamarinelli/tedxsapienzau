import React, { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import global from "../../resources/global.json";
import "../../index.css";
import "../../resources/styles/home.css";
import RFW_24_logo from "../images/RFW-logo_negativo_su_box.png";

export default function RFW24_Home_News({ withTitle = false }) {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* news' content div */}
        <div
          id="main-left-container"
          style={{
            width: "100%",
            height: "100%",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3.5%",
        }}
      >
        <div
          id="main-left-container"
          style={{
            width: "100%",
            height: "40%",
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "120%",
              paddingBottom: "2%",
            }}
          >
            {" "}
            Rome Future Week{" "}
          </h2>
          <h1
            style={{
              fontSize: "150%",
              paddingBottom: "2%",
              fontStyle: "italic",
            }}
          >
            {" "}
            Università, Ricerca e Innovazione
          </h1>
          <h3
            style={{
              fontSize: "100%",
              paddingBottom: "2%",
            }}
          >
            <extra>
              <condensed-extrabold>16 Settembre 2024</condensed-extrabold>
            </extra>
          </h3>
          <h3
            style={{
              fontSize: "100%",
              paddingBottom: "2%",
            }}
          >
            <extra>
              <condensed-extrabold>ore 16:00</condensed-extrabold>
            </extra>
          </h3>
          <h3
            style={{
              fontSize: "100%",
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
              fontSize: "80%",
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
