import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../../index.css";
import "../../resources/styles/edizione2022style.css";

import TedxLogo from "../images/TEDlogovecchio.png";

import SpeakerCard from "../components/SpeakerCard";
import BioSpeakerPopup from "../components/BioSpeakerPopup";

import global from "../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useOutletContext } from "react-router";

export default function Edizione2022() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [windowSize, setWindowSize] = useOutletContext();

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "speakers/edizione/2022")
      .then((res, err) => {
        setSpeakers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  /**
   * This function returns a spinner when the data from the db is still loading.
   * When all the speakers are fetched, this function returns the speaker card section
   */
  const handleSpeakersCardSection = () => {
    if (speakers.length === 0) {
      /** SPEAKERS NOT YET FETCHED FROM DATABASE */
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
            linkTalk={link}
            tag={categoria}
            setIsBioOpen={setIsBioOpen}
            setSelectedSpeakerInfo={setSelectedSpeakerInfo}
          />
        );
      });
      return res;
    }
  };

  return (
    <>
      <header
        className="header-ed2022"
        style={{
          padding: "10px",
          textAlign: "center",

          marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          height: "45vh",
        }}
      ></header>

      <div className="where-is-the-event-section">
        <div className="row no-gutters mx-0 where-is-the-event">
          <div className="col-md-6">
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faLocationDot}
                style={{ color: global.COLORS.ROSSO_EDIZIONE_2022 }}
                size="2x"
              />
              <p className="col-8">
                Università La Sapienza - Aula Magna Rettorato Piazzale Aldo
                Moro, 5, 00185 Roma RM
              </p>
            </div>
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faCalendar}
                style={{ color: global.COLORS.ROSSO_EDIZIONE_2022 }}
                size="2x"
              />
              <p className="col-8">29 Aprile 2022</p>
            </div>
          </div>
          <div className="col-md-6">
            <LazyLoadImage src={TedxLogo} width="300px" />
          </div>
        </div>
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
          IL TEMA DELL'EVENTO
        </h1>
        <p style={{ fontSize: "20px", fontFamily: "GothamBook" }}>
          Il titolo della prima edizione del TEDxSapienzaU è stato{" "}
          <strong>ACT - Lead the change</strong>. Come da linee guida TEDx, i
          dialoghi che sono stati presentati hanno riguardato diverse materie ed
          aree tematiche interconnesse, prediligendo le migliori idee ed
          esperienze ispiratrici:
        </p>
        {/** CARDS */}
        <section className="container">
          <div className="row gap-5 d-flex justify-content-center">
            <div className="col-lg-3 theme-card">
              <p
                style={{
                  fontSize: "250px",
                  color: "#fff",
                  zIndex: "2",
                }}
              >
                A
              </p>
              <p>
                <strong>Action</strong>: La cultura dell'azione contro la
                cultura dell'inerzia e il ruolo della cittadinanza attiva
                nell'educazione del futuro.
              </p>
            </div>
            <div className="col-lg-3 theme-card">
              <p
                style={{
                  fontSize: "250px",
                  color: "#fff",
                  zIndex: "2",
                }}
              >
                C
              </p>
              <p>
                <strong>Cross-Fertilization</strong>: La predisposizione alla
                creatività ed empatia, la pop education e i nuovi orizzonti
                della contaminazione tra i saperi.
              </p>
            </div>
            <div className="col-lg-3 theme-card">
              <p
                style={{
                  fontSize: "250px",
                  color: "#fff",
                  zIndex: "2",
                }}
              >
                T
              </p>
              <p>
                <strong>Transformation</strong>: Il digitale e la realtà
                integrata, la trasformazione dei modelli educativi e il valore
                dell'esperienza nella crescita dell'individuo.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
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
      />
    </>
  );
}
