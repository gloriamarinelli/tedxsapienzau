import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import Cover23 from "../images/cover-edizione23.webp";
import Cover22 from "../images/cover-edizione22.webp";
import CoverAwards23 from "../images/awards23/header_awards23.webp";
import CoverAwards22 from "../images/awards22/awards2022.webp";
import global from "../../resources/global.json";
import EventBox from "../components/EventBox";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../resources/styles/editionsstyle.css";
import "../../index.css";

export default function Editions({ withTitle = true }) {
  const [windowSize, setWindowSize] = useOutletContext();

  return (
    <div
      style={{
        marginTop: global.UTILS.NAV_HEIGHT,
        fontFamily: "Fira Sans Extra Condensed, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#000",
          height: "100px",
          display: withTitle ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          padding: `0 ${global.UTILS.BENTO_BOX_PADDING}`,
          color: "#fff",
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            fontSize: windowSize > global.UTILS.TABLET_WIDTH ? "60px" : "40px",
          }}
        >
          EVENTI PASSATI
        </h1>
      </div>
      <section
        id="grid-events-container"
        style={{
          color: "#fff",
          backgroundColor: "#000",
          padding: `0 ${global.UTILS.BENTO_BOX_PADDING}`,
          gap: "15px",
          textAlign: "justify",
        }}
      >
        {eventsInfo.map((event, index) => (
          <EventBox
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            photo={event.photo}
            linkTo={event.linkTo}
            windowSize={windowSize}
          />
        ))}
      </section>
    </div>
  );
}

const eventsInfo = [
  {
    date: "15 Novembre 2023",
    title: "BACK TO ZERO",
    description:
      "Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che  rallentano la crescita della nostra società, peggiorando la qualità della nostra vita.",
    photo: Cover23,
    linkTo: "/edizione2023",
  },
  {
    date: "18 Aprile 2023",
    title: "AWARDS 2023",
    description:
      "  Il concorso Back to Zero Awards è organizzato dal Comitato TEDxSapienzaU ed ha lo scopo di promuovere idee di valore in linea con il motto TED “Ideas worth spreading”, offrendo ai vincitori la prestigiosa opportunità di esibirsi sul palco dell’edizione 2023 del TEDxSapienzaU.",
    photo: CoverAwards23,
    linkTo: "/awards2023",
  },
  {
    date: "29 Aprile 2022",
    title: "ACT: LEAD THE CHANGE",
    description:
      "Il titolo della prima edizione del TEDxSapienzaU è stato ACT - Lead the change. Come da linee guida TEDx, i dialoghi che sono stati presentati hanno riguardato diverse materie ed aree tematiche interconnesse, prediligendo le migliori idee ed esperienze ispiratrici.",
    photo: Cover22,
    linkTo: "/edizione2022",
  },
  {
    date: "29 Aprile 2022",
    title: "AWARDS 2022",
    description: "",
    photo: CoverAwards22,
    linkTo: "/awards2022",
  },
];
