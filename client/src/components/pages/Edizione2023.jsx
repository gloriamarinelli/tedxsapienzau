import React, { useState, useEffect } from "react";

import "../../index.css";
import "../../resources/styles/edizione2023style.css";

import SpeakerCard from "../components/SpeakerCard";
import BioSpeakerPopup from "../components/BioSpeakerPopup";

import global from "../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";

import axios from "axios";

export default function Edizione2023() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [windowSize, setWindowSize] = useOutletContext();

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "speakers/edizione/2023")
      .then((res, err) => {
        console.log(res.data);
        setSpeakers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSpeakersCardSection = () => {
    if (speakers.length === 0) {
      return (
        <div
          style={{
            height: "200px",
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="spinner"></div>
        </div>
      );
    } else {
      let res = [];
      speakers.map((speaker) => {
        const { id, nome, bio, categoria, fotoPath } = speaker;
        res.push(
          <SpeakerCard
            key={id}
            nomeSpeaker={nome}
            imgSrc={fotoPath}
            bio={bio}
            tag={categoria}
            setIsBioOpen={setIsBioOpen}
            setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            year={2023}
          />
        );
      });
      return res;
    }
  };

  const programma = [
    { time: "08:45 - 09:30", title: "Accrediti", text: "" },
    {
      time: "09:45 - 10:00",
      title: "Presentazione Iniziale",
      text: "",
    },
    {
      time: "10:00 - 10:15",
      title: "Interventi Istituzionali",
      text: "Prof. Massimo Ralli → Delegato per il TEDxSapienzaU | Ass. Sabrina Alfonsi, Assessora all'Ambiente, all'Agricoltura e ai Rifiuti del Comune di Roma",
    },
    {
      time: "10:15 - 11:30",
      title: "Sessione I",
      text: "Damiano Tullio → Antropologo e fondatore di Antropostudio | Ilaria Lucrezia Rossi → Studentessa di fisica e divulgatrice online | Edward von Freymann → Fondazione Gaia von Freymann | Riccardo Basilone → Studente di fisica e cantautore ",
    },
    { time: "11:30 - 12:00", title: "I break", text: "" },
    {
      time: "12:00 - 13:00",
      title: "Sessione II",
      text: "Gloria Schito → Fondatrice di ICONICA brand e content creator nel settore moda | Matteo Cervellini → Fisioterapista | Ana Estrela → Fondatrice di Ethnic Cook | Nina Lambarelli → Poetessa e studentessa di lingue, culture, letterature e traduzione ",
    },
    {
      time: "13:00 - 15:00",
      title: "Lunch break presso il Village TEDxSapienzaU",
      text: "",
    },
    { time: "15:00 - 15:15", title: "TED GLOBAL", text: "" },
    {
      time: "15:15 - 15:30",
      title: "Saluti Istituzionali",
      text: "Antonella Polimeni → Magnifica Rettrice della Sapienza Università di Roma",
    },
    {
      time: "15:30 - 16:30",
      title: "Sessione III",
      text: "Marcello Ienca → Professore di Etica dell'Intelligenza Artificiale e Neuroscienze | Rose Villain → Rapper e cantautrice | Silvano Onofri → Presidente della Commissione Scientifica Nazionale per l'Antartide (Ministero Università e Ricerca) | Nakita Aboya → Studentessa dottoranda in Economia",
    },

    {
      time: "16:30 - 16:45",
      title: "Ringraziamenti da parte dei volontari e del team TEDxSapienzaU",
      text: "",
    },
    {
      time: "16:45 - 17:00",
      title: "Esibizione Coro MuSa Blues - Diretto da Giorgio Monari",

      text: "MuSa è un progetto musicale curato dal centro Sapienza CREA, attivo dal 2006 e aperto a studenti, docenti e personale di questo Ateneo. Quattro le sue formazioni: Classica, Jazz, Blues ed Etno.",
    },

    { time: "17:00", title: "Saluti Finali", text: "" },
  ];

  const renderProgram23 = () => {
    return (
      <div className="container mb-5">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          IL PROGRAMMA
        </h1>
        <div className="row">
          {programma.map((item, index) => (
            <div key={index} className="row mb-3">
              <div className="col-md-3">
                <p
                  style={{
                    fontSize: "30px",
                    fontFamily: "GothamBold",
                  }}
                >
                  {item.time}
                </p>
              </div>
              <div className="col-md-6">
                <p
                  style={{
                    fontSize: "25px",
                    fontFamily: "GothamBold",
                    color: global.COLORS.BLU_POSTER,
                  }}
                >
                  {item.title}
                </p>
                <ul style={{ textAlign: "justify" }}>
                  {item.text.split(" | ").map((speaker, speakerIndex) => (
                    <li
                      key={speakerIndex}
                      style={{
                        listStyleType: "none",
                        fontSize: "20px",
                        marginLeft: "-25px",
                        fontFamily: "GothamBook",
                        fontStyle: "",
                      }}
                    >
                      {speaker}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <section>
        <header
          className="header-ed2023"
          style={{
            textAlign: "center",
            height: "45vh",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        ></header>

        <div className="where-is-the-event23 row mx-0 pt-3 pb-3">
          <div className="col-md-6">
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faLocationDot}
                style={{ color: global.COLORS.ROSSO_POSTER }}
                size="2x"
              />
              <p className="col-8">
                Aula Magna, <br />
                Palazzo del Rettorato <br />
                Sapienza Università di Roma
              </p>
            </div>
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faCalendar}
                style={{ color: global.COLORS.ROSSO_POSTER }}
                size="2x"
              />
              <p className="col-8">mercoledì 15 nov 2023 ore 08:45 - 17:00</p>
            </div>
          </div>
          {/* <div className="col-md-6">
            <a
              href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-2023-back-to-zero-717157827367?aff=oddtdtcreator"
              type="button"
              className="btn5-1"
              style={{
                fontWeight: "bold",
                width: "50%",
                marginLeft: "50px",
                alignItems: "center",
                fontFamily: "GothamBold",
              }}
            >
              Ottieni i biglietti
            </a>
          </div> */}
        </div>
      </section>

      <div className="container mb-5">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          IL NOSTRO OBIETTIVO
        </h1>
        <p style={{ fontSize: "20px", fontFamily: "GothamBook" }}>
          Il nostro obiettivo è <strong>azzerare</strong>, ricercare un punto{" "}
          <strong>zero</strong>: le disuguaglianze, i conflitti, i cattivi stili
          di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che
          rallentano la crescita della nostra società, peggiorando la qualità
          della nostra vita. <strong>Riconsiderare noi stessi </strong> ed il
          nostro modo di confrontarci. Imparare ed interagire con la società
          contemporanea, con le <strong>arti</strong> e le{" "}
          <strong>scienze</strong>. È fondamentale per costruire un mondo dove
          l'essere umano possa '<strong>rinascere</strong>', prosperando ed
          esprimendosi al meglio in ogni disciplina. Riscoprire le basi per{" "}
          <strong>rinascere</strong>, diventare persone migliori in un luogo
          migliore.
        </p>

        <p
          style={{
            fontSize: "30px",
            fontFamily: "GothamBook",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          ❝ L'uomo e il mondo che lo circonda non sono binari separati, ma
          rotaie che si muovono insieme, hanno bisogno l'uno dell'altro. ❞
        </p>
      </div>

      <div className="container mb-5">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          GLI SPEAKERS
        </h1>
        <div className="row">{handleSpeakersCardSection()}</div>
      </div>

      <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={2023}
      />
      <div>{renderProgram23()}</div>
    </>
  );
}
