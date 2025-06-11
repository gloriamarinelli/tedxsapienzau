import React, { useState, useEffect } from "react";

import "../../../resources/styles/edizione2025style.css";

import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

import global from "../../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import Carousel from "react-bootstrap/Carousel";
import { Trans, useTranslation } from "react-i18next";
import axios from "axios";

import Image1 from "../../images/paradoxa25/abbozzo.webp";
import Image2 from "../../images/paradoxa25/armaroli.webp";
import Image3 from "../../images/paradoxa25/dapoto.webp";
import Image4 from "../../images/paradoxa25/moretti.webp";
import Image5 from "../../images/paradoxa25/nardi.webp";
import Image6 from "../../images/paradoxa25/pasatu.webp";
import Image7 from "../../images/paradoxa25/saltarelli.webp";
import Image8 from "../../images/paradoxa25/kento.webp";
import Image9 from "../../images/paradoxa25/azzali.webp";
import Image10 from "../../images/paradoxa25/panepinto.webp";

export default function Edizione2023() {
  const { t } = useTranslation();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [windowSize] = useOutletContext();

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "speakers/edizione/2025")
      .then((res, err) => {
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
        const { id, nome, bio, categoria, fotoPath, link, bioeng } = speaker;
        res.push(
          <SpeakerCard
            key={id}
            nomeSpeaker={nome}
            imgSrc={"/images/speakers25/" + fotoPath}
            bio={bio}
            tag={categoria}
            setIsBioOpen={setIsBioOpen}
            setSelectedSpeakerInfo={setSelectedSpeakerInfo}
            event="paradoxa"
            bioeng={bioeng}
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
      </Carousel>
    );
  };

  return (
    <div style={{ backgroundColor: global.COLORS.NERO, color: "#fff" }}>
      <section style={{ marginTop: global.UTILS.NAV_HEIGHT }}>
        <header
          className="header-ed2025"
          style={{
            textAlign: "center",
            height: "45vh",
          }}
        ></header>

        <div className="where-is-the-event25 row mx-0 pt-3 pb-3">
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
              <p className="col-8">11.04.2025, 09:00 - 17:00</p>
            </div>
          </div>
          <div className="col-md-6">
            <a
              href="https://youtube.com/playlist?list=PL4-t_gJBexTAb7wP2mzg-S2bCfzptE58n&feature=shared"
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
            </a>
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
          {t("event_paradoxa.title")}
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            textAlign: "justify",
          }}
        >
          <Trans
            i18nKey="event_paradoxa.description"
            components={{
              1: <strong></strong>,
            }}
          />
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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {handleSpeakersCardSection()}
        </div>
      </div>

      <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={2025}
      />
      <div className="container mt-5">{CarouselComponent()}</div>
    </div>
  );
}
