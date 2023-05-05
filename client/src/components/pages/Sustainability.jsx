import "../../index.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/location2.webp";
import Image1 from "../images/location1.webp";

import React, { useState } from "react";
import global from "../../resources/global.json";
import "../../resources/styles/missionandvisionstyle.css";
import { useOutletContext } from "react-router";

export default function Sustainability() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <div
          className="header gradient-background-about"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            backgroundColor: "red",
            marginBottom: "10px",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "80vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "120px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            SUSTAINABILITY
          </h1>
          
        </div>

        <section style={{ fontSize: "18px" }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
                color: "white"

              }}
            >
              L’Università Sapienza di Roma, fondata <strong>nel 1303</strong>{" "}
              da papa Bonifacio VIII, è la più antica università di Roma e la
              più grande in Europa. L’Ateneo conta <strong>700 anni</strong> di
              storia e ospita, secondo i dati dell’anno accademico 2022/23,
              circa <strong>120 mila studenti</strong> e{" "}
              <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
              c’è contribuire allo sviluppo della società della conoscenza
              attraverso ricerca, formazione di eccellenza e di qualità e la
              cooperazione internazionale. Il suo motto è la frase{" "}
              <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
              dalla storia centenaria dell’Università, e arriva fino ai giorni
              nostri.
              L’Università Sapienza di Roma, fondata <strong>nel 1303</strong>{" "}
              da papa Bonifacio VIII, è la più antica università di Roma e la
              più grande in Europa. L’Ateneo conta <strong>700 anni</strong> di
              storia e ospita, secondo i dati dell’anno accademico 2022/23,
              circa <strong>120 mila studenti</strong> e{" "}
              <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
              c’è contribuire allo sviluppo della società della conoscenza
              attraverso ricerca, formazione di eccellenza e di qualità e la
              cooperazione internazionale. Il suo motto è la frase{" "}
              <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
              dalla storia centenaria dell’Università, e arriva fino ai giorni
              nostri.
              L’Università Sapienza di Roma, fondata <strong>nel 1303</strong>{" "}
              da papa Bonifacio VIII, è la più antica università di Roma e la
              più grande in Europa. L’Ateneo conta <strong>700 anni</strong> di
              storia e ospita, secondo i dati dell’anno accademico 2022/23,
              circa <strong>120 mila studenti</strong> e{" "}
              <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
              c’è contribuire allo sviluppo della società della conoscenza
              attraverso ricerca, formazione di eccellenza e di qualità e la
              cooperazione internazionale. Il suo motto è la frase{" "}
              <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
              dalla storia centenaria dell’Università, e arriva fino ai giorni
              nostri.
              L’Università Sapienza di Roma, fondata <strong>nel 1303</strong>{" "}
              da papa Bonifacio VIII, è la più antica università di Roma e la
              più grande in Europa. L’Ateneo conta <strong>700 anni</strong> di
              storia e ospita, secondo i dati dell’anno accademico 2022/23,
              circa <strong>120 mila studenti</strong> e{" "}
              <strong>3,5 mila docenti</strong>. Tra i suoi obiettivi principali
              c’è contribuire allo sviluppo della società della conoscenza
              attraverso ricerca, formazione di eccellenza e di qualità e la
              cooperazione internazionale. Il suo motto è la frase{" "}
              <i>“Il futuro è passato qui”</i>: uno slogan che parte da lontano,
              dalla storia centenaria dell’Università, e arriva fino ai giorni
              nostri.
            </p>
          </div>
          </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="header gradient-background-about"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            backgroundColor: "red",
            marginBottom: "10px",
            height: "40vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            SUSTAINABILITY
          </h1>
        </div>
      </>
    );
  }
}
