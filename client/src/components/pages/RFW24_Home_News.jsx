import React, { useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import "../../index.css";
import "../../resources/styles/home.css";
import RFW_24_logo from "../images/RFW-logo_negativo_su_box.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function RFW24_Home_News({ withTitle = false }) {
  const [windowSize, setWindowSize] = useOutletContext();
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isVideoClicked, setIsVideoClicked] = useState(false);
  const [isMapClicked, setIsMapClicked] = useState(false);
  const handleVideoClick = () => {
    setIsVideoClicked(true);
  };
  const handleMapClick = () => {
    setIsMapClicked(true);
  };

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
              fontSize: "300%",
              paddingBottom: "2%",
              fontStyle: "italic",
              textTransform: "uppercase",
            }}
          >
            {" "}
            Università, Ricerca e Innovazione
          </h1>
          <h3
            style={{
              fontSize: "180%",
              paddingBottom: "2%",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: isVideoHovered ? "#E62153" : "#ee6693",
              }}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
              href="https://uniroma1.zoom.us/s/85617281094"
            >
              <FontAwesomeIcon icon={faVideo} style={{ marginRight: "3%" }} />
              16 Settembre 2024 - ore 16:00{" "}
            </a>
          </h3>
          <h3
            style={{
              fontSize: "180%",
              paddingBottom: "2%",
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: isMapHovered ? "#E62153" : "#ee6693",
              }}
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
              href="https://www2.uniroma1.it/amm-cda/intranet/allegato16cda02_12_2021.pdf"
            >
              <FontAwesomeIcon
                icon={faMapLocationDot}
                style={{ marginRight: "3%" }}
              />
              Aula Ex-Cisadu, Città Universitaria
            </a>
          </h3>
          <p
            style={{
              fontSize: "120%",
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
            <a
              onClick={handleVideoClick}
              style={{
                textDecoration: "none",
                color: isVideoClicked ? "#E62153" : "#ee6693",
              }}
              href="https://uniroma1.zoom.us/s/85617281094"
            >
              <FontAwesomeIcon icon={faVideo} style={{ marginRight: "3%" }} />
              16 Settembre 2024 - ore 16:00{" "}
            </a>
          </h3>
          <h3
            style={{
              fontSize: "100%",
              paddingBottom: "2%",
            }}
          >
            <a
              onClick={handleMapClick}
              style={{
                textDecoration: "none",
                color: isMapClicked ? "#E62153" : "#ee6693",
              }}
              href="https://www2.uniroma1.it/amm-cda/intranet/allegato16cda02_12_2021.pdf"
            >
              <FontAwesomeIcon
                icon={faMapLocationDot}
                style={{ marginRight: "3%" }}
              />
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
