import React, { useState, useEffect } from "react";

import "../../../resources/styles/edizione2023style.css";

import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

import global from "../../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import Carousel from "react-bootstrap/Carousel";
import { Trans, useTranslation } from "react-i18next";
import axios from "axios";

import Image1 from "../../images/carousel/edizione23/tullio.webp";
import Image2 from "../../images/carousel/edizione23/rossi.webp";
import Image3 from "../../images/carousel/edizione23/freymann.webp";
import Image4 from "../../images/carousel/edizione23/basilone.webp";
import Image5 from "../../images/carousel/edizione23/schito.webp";
import Image6 from "../../images/carousel/edizione23/cervellini.webp";
import Image7 from "../../images/carousel/edizione23/estrela.webp";
import Image8 from "../../images/carousel/edizione23/lambarelli.webp";
import Image9 from "../../images/carousel/edizione23/lenca.webp";
import Image10 from "../../images/carousel/edizione23/villain.webp";
import Image11 from "../../images/carousel/edizione23/onofri.webp";
import Image12 from "../../images/carousel/edizione23/aboya.webp";
import { set } from "date-fns";

export default function Edizione2023() {
  const { t } = useTranslation();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [windowSize] = useOutletContext();

  useEffect(() => {
    // axios
    //   .get(global.CONNECTION.ENDPOINT + "speakers/edizione/2023")
    //   .then((res, err) => {
    //     setSpeakers(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    const speakersData2023 = [
      {
        id: 14,
        nome: "Matteo Cervellini",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Cervellini.webp",
      },
      {
        id: 15,
        nome: "Ilaria Rossi",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Rossi.webp",
      },
      {
        id: 16,
        nome: "Nina Lambarelli",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Lambarelli.webp",
      },
      {
        id: 17,
        nome: "Nakita Aboya",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Nakita.webp",
      },
      {
        id: 18,
        nome: "Riccardo Basilone",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Basilone.webp",
      },
      {
        id: 19,
        nome: "Ana Estrela",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Estrela.webp",
      },
      {
        id: 20,
        nome: "Rose Villain",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Villain.webp",
      },
      {
        id: 21,
        nome: "Gloria Schito",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Schito.webp",
      },
      {
        id: 22,
        nome: "Damiano Tullio",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Tullio.webp",
      },
      {
        id: 23,
        nome: "Marcello Ienca",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Ienca.webp",
      },
      {
        id: 24,
        nome: "Edward von Freymann",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Freymann.webp",
      },
      {
        id: 25,
        nome: "Silvano Onofri",
        anno: 2023,
        categoria: "Speaker",
        fotoPath: "Onofri.webp",
      },
    ];
    setSpeakers(speakersData2023);
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
        const { id, nome, bio, categoria, fotoPath, link } = speaker;
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
            linkTalk={link}
          />
        );
      });
      return res;
    }
  };

  const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        variant="black"
        style={{ width: "70%", margin: "auto" }}
      >
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image5}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image6}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image7}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image8}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image9}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image10}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image11}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={Image12}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
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
      title: "Session I",
      text: "Damiano Tullio → Antropologo e fondatore di Antropostudio | Ilaria Lucrezia Rossi → Studentessa di fisica e divulgatrice online | Edward von Freymann → Fondazione Gaia von Freymann | Riccardo Basilone → Studente di fisica e cantautore ",
    },
    { time: "11:30 - 12:00", title: "I break", text: "" },
    {
      time: "12:00 - 13:00",
      title: "Session II",
      text: "Gloria Schito → Fondatrice di ICONICA brand e content creator nel settore moda | Matteo Cervellini → Fisioterapista | Ana Estrela → Fondatrice di Ethnic Cook | Nina Lambarelli → Poetessa e studentessa di lingue, culture, letterature e traduzione ",
    },
    {
      time: "13:00 - 15:00",
      title: "Lunch Break, Village TEDxSapienzaU",
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
      title: "Session III",
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
          {t("event_backtozero.schedule")}
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
    <div style={{ backgroundColor: global.COLORS.NERO, color: "#fff" }}>
      <section style={{ marginTop: global.UTILS.NAV_HEIGHT }}>
        <header
          className="header-ed2023"
          style={{
            textAlign: "center",
            height: "45vh",
          }}
        ></header>

        <div className="where-is-the-event23 row mx-0 pt-3 pb-3">
          <div className="col-md-6">
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faLocationDot}
                style={{ color: "#EB0028" }}
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
                style={{ color: "#EB0028" }}
                size="2x"
              />
              <p className="col-8">15.11.2023, 08:45 - 17:00</p>
            </div>
          </div>
          <div className="col-md-6">
            <a
              href="https://youtube.com/playlist?list=PL4-t_gJBexTBDgARWnLB3dmC0g1_OcxFc&si=o_xQf51xiEvfXWl4"
              type="button"
              className="btn5-ed23"
              style={{
                fontWeight: "bold",
                width: "50%",
                marginLeft: "50px",
                alignItems: "center",
                fontFamily: "GothamBook",
              }}
              target="_blank"
              rel="noreferrer"
            >
              {t("event_backtozero.button")}
            </a>{" "}
          </div>
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
          {t("event_backtozero.title")}
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            textAlign: "justify",
          }}
        >
          <Trans
            i18nKey="event_backtozero.description"
            components={{
              1: <strong></strong>,
            }}
          />
        </p>

        <p
          style={{
            fontSize: "30px",
            fontFamily: "GothamBook",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          ❝ {t("event_backtozero.citation")} ❞
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
          SPEAKERS
        </h1>
        <div className="row">{handleSpeakersCardSection()}</div>
      </div>

      {/* <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={2023}
      /> */}
      <div>{renderProgram23()}</div>
      <div className="container mt-5">{CarouselComponent()}</div>
    </div>
  );
}
