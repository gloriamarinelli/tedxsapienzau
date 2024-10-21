import React from "react";
import { useOutletContext } from "react-router";
import Cover23 from "../images/cover-edizione23.webp";
import Cover22 from "../images/cover-edizione22.webp";
import CoverAwards23 from "../images/awards23/header_awards23.webp";
import CoverAwards22 from "../images/awards22/awards2022.webp";
import CoverCountdown24 from "../images/cover-countdown24.webp";
import global from "../../resources/global.json";
import EventBox from "../components/EventBox";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../resources/styles/editionsstyle.css";
import "../../index.css";
import { useTranslation } from "react-i18next";


export default function Editions({ withTitle = true }) {
  const {i18n, t} = useTranslation();
  const [windowSize] = useOutletContext();

  const eventsInfo = [
    {
      date: i18n.language === 'it' ? "31 Maggio 2024" : "May 31, 2024",
      title: "COUNTDOWN",
      description:
        i18n.language === 'it' 
        ? 
        "Il tempo scorre ed è necessario creare un nuovo spazio di riflessione ed intrattenimento incentrato sulla crisi climatica. Un luogo dove affrontare le paure sul futuro con positività e scienza grazie ad una visione interdisciplinare e coinvolgente negli spazi del nostro Ateneo." 
        : 
        "Time is running out and it is necessary to create a new space for reflection and entertainment focused on the climate crisis. A place to address fears about the future with positivity and science thanks to an interdisciplinary and engaging vision in the spaces of our University.",
      photo: CoverCountdown24,
      linkTo: "/eventi/countdown2024",
    },
    {
      date: i18n.language === 'it' ? "15 Novembre 2023" : "November 15, 2023",
      title: "BACK TO ZERO",
      description:
        i18n.language === 'it' 
        ?
        "Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che  rallentano la crescita della nostra società, peggiorando la qualità della nostra vita."
        :
        "Our goal is to zero, to research a zero point: inequalities, conflicts, bad lifestyles, emissions and waste. Reduce those polluting factors that slow down the growth of our society, worsening the quality of our life.",
      photo: Cover23,
      linkTo: "/eventi/edizione2023",
    },
    {
      date: i18n.language === 'it' ? "18 Aprile 2023" : "April 18, 2023",
      title: "AWARDS 2023",
      description:
        i18n.language === 'it' 
        ?
        "Il concorso Back to Zero Awards è organizzato dal Comitato TEDxSapienzaU ed ha lo scopo di promuovere idee di valore in linea con il motto TED “Ideas worth spreading”, offrendo ai vincitori la prestigiosa opportunità di esibirsi sul palco dell’edizione 2023 del TEDxSapienzaU."
        :
        "The Back to Zero Awards competition is organized by the TEDxSapienzaU Committee and aims to promote valuable ideas in line with the TED motto “Ideas worth spreading”, offering the winners the prestigious opportunity to perform on the stage of the 2023 edition of TEDxSapienzaU.",
      photo: CoverAwards23,
      linkTo: "/eventi/awards2023",
    },
    {
      date: i18n.language === 'it' ? "29 Aprile 2022" : "April 29, 2022",
      title: "ACT: LEAD THE CHANGE",
      description:
        i18n.language === 'it' 
        ?
        "Il titolo della prima edizione del TEDxSapienzaU è stato ACT - Lead the change. Come da linee guida TEDx, i dialoghi che sono stati presentati hanno riguardato diverse materie ed aree tematiche interconnesse, prediligendo le migliori idee ed esperienze ispiratrici."
        :
        "The title of the first edition of TEDxSapienzaU was ACT - Lead the change. As per TEDx guidelines, the dialogues that were presented concerned different subjects and interconnected thematic areas, preferring the best inspiring ideas and experiences.",
      photo: Cover22,
      linkTo: "/eventi/edizione2022",
    },
    {
      date: "29 Aprile 2022",
      title: "AWARDS 2022",
      description: "",
      photo: CoverAwards22,
      linkTo: "/eventi/awards2022",
    },
  ];

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
          {t("events.title")}
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
        {eventsInfo
          .slice(0, withTitle ? eventsInfo.length : 4)
          .map((event, index) => (
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
