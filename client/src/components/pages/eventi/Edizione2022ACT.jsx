import React, { useState, useEffect } from "react";

import "../../../resources/styles/edizione2022style.css";

import SpeakerCard from "../../components/SpeakerCard";
import BioSpeakerPopup from "../../components/BioSpeakerPopup";

import global from "../../../resources/global.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useOutletContext } from "react-router";
import { Trans, useTranslation } from "react-i18next";

export default function Edizione2022() {
  const { t } = useTranslation();
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedSpeakerInfo, setSelectedSpeakerInfo] = useState({});
  const [speakers, setSpeakers] = useState([]);
  const [windowSize] = useOutletContext();

  useEffect(() => {
      const url = global.CONNECTION.ENDPOINT + "speakers/edizione/2022";
  
      axios
        .get(url)
        .then((res) => {
          setSpeakers(res.data.speakers); 
          console.log("Fetched from MongoDB:", res.data.speakers);
        })
        .catch((err) => {
          console.error("Connection error to Flask backend:", err);
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
        return speakers.map((speaker) => {
          const { _id, nome, bio, categoria, fotoPath, link, bioeng } = speaker;
          return (
            <SpeakerCard
              key={_id} // MongoDB ID
              nomeSpeaker={nome}
              imgSrc={fotoPath}
              bio={bio}
              tag={categoria}
              setIsBioOpen={setIsBioOpen}
              setSelectedSpeakerInfo={setSelectedSpeakerInfo}
              year={2022}
              bioeng={bioeng}
              linkTalk={link}
            />
          );
        });
      }
    };

  return (
    <div style={{ backgroundColor: global.COLORS.NERO, color: "#fff" }}>
      <header
        className="header-ed2022"
        style={{
          padding: "10px",
          textAlign: "center",
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
                Aula Magna, <br />
                Palazzo del Rettorato <br />
                Sapienza Università di Roma
              </p>
            </div>
            <div className="row">
              <FontAwesomeIcon
                className="col-2"
                icon={faCalendar}
                style={{ color: global.COLORS.ROSSO_EDIZIONE_2022 }}
                size="2x"
              />
              <p className="col-8">29.04.2022</p>
            </div>
          </div>
          <div className="col-md-6">
            <a
              href="https://youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6&si=oP9pKvJScQewfqGa"
              type="button"
              className="btn5-ed22"
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
              {t("event_leadthechange.button")}
            </a>
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
          {t("event_leadthechange.title")}
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "GothamBook",
            textAlign: "justify",
          }}
        >
          <Trans
            i18nKey="event_leadthechange.description"
            components={{
              1: <strong></strong>,
            }}
          />
        </p>
        {/** CARDS */}
        <section className="container">
          <div
            id="external_cards_div"
            className="row gap-5 d-flex justify-content-center"
          >
            <div className="col-lg-3 theme-card">
              <p
                style={{
                  fontSize: "250px",
                  color: "#fff",
                  zIndex: "2",
                  margin: "30%",
                }}
              >
                A
              </p>
              <p style={{ marginTop: "15%" }}>
                <strong>Action</strong>: {t("event_leadthechange.A")}
              </p>
            </div>
            <div className="col-lg-3 theme-card">
              <p
                style={{
                  fontSize: "250px",
                  color: "#fff",
                  zIndex: "2",
                  margin: "30%",
                }}
              >
                C
              </p>
              <p style={{ marginTop: "15%" }}>
                <strong>Cross-Fertilization</strong>:{" "}
                {t("event_leadthechange.C")}
              </p>
            </div>
            <div className="col-lg-3 theme-card">
              <p
                style={{
                  fontSize: "250px",
                  color: "#fff",
                  zIndex: "2",
                  margin: "30%",
                }}
              >
                T
              </p>
              <p style={{ marginTop: "15%" }}>
                <strong>Transformation</strong>: {t("event_leadthechange.T")}
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
          SPEAKERS
        </h1>
        <div className="row">{handleSpeakersCardSection()}</div>
      </div>
      { <BioSpeakerPopup
        isBioOpen={isBioOpen}
        setIsBioOpen={setIsBioOpen}
        selectedSpeakerInfo={selectedSpeakerInfo}
        windowSize={windowSize}
        year={2022}
      /> }
    </div>
  );
}
