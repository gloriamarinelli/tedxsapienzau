import React from "react";
import "../../index.css";
import global from "../../resources/global.json";
import { set } from "date-fns";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpeakerCard({
  nomeSpeaker,
  imgSrc,
  linkTalk,
  bio,
  tag,
  fotoSidebar,
  setIsBioOpen,
  setSelectedSpeakerInfo,
  year,
  style,
  showName,
  ruoloSpeaker,
  link,
  event,
  showLinkTalk,
}) {
  if (event === "countdown24") {
    return (
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        style={{
          ...{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          ...style,
        }}
      >
        <div
          className="speaker-card"
          style={{ cursor: "pointer" }}
          onClick={() => (window.location.href = link)}
        >
          <div className="speaker-card-filter"></div>
          <img
            src={imgSrc}
            height="300"
            className="speaker-card-image"
            alt={nomeSpeaker}
          />
        </div>

        <p
          onClick={() => (window.location.href = link)}
          style={{
            fontSize: "20px",
            textTransform: "uppercase",
            fontFamily: "Anton",
            maxWidth: "16ch",
            textAlign: "center",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          {showName ? nomeSpeaker : " "}
        </p>
        {ruoloSpeaker ? (
          <p
            style={{
              color: global.COLORS.GIALLO_COUNTDOWN,
              maxWidth: "30ch",
              fontFamily: "Anton",
            }}
          >
            {ruoloSpeaker}
          </p>
        ) : (
          <></>
        )}
        {showLinkTalk ? (
          <p
            onClick={() => (window.location.href = linkTalk)}
            style={{
              fontSize: "15px",
              marginTop: "-70px",
              marginBottom: "50px",
            }}
          >
            <FontAwesomeIcon icon={faYoutube} /> Guarda il talk
          </p>
        ) : (
          <></>
        )}
      </div>
    );
  }

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12"
      style={{
        ...{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        },
        ...style,
      }}
      onClick={() => {
        if (setIsBioOpen) {
          setIsBioOpen(true);
          setSelectedSpeakerInfo({
            nomeSpeaker: nomeSpeaker,
            imgSrc: imgSrc,
            tag: tag,
            linkTalk: linkTalk,
            bio: bio,
            fotoSidebar: fotoSidebar,
          });
        }
      }}
    >
      <div className="speaker-card" style={{ cursor: "pointer" }}>
        <div className="speaker-card-filter"></div>
        <img
          src={
            year
              ? year === 2022
                ? `/images/speakers22/${imgSrc}`
                : `/images/speakers23/${imgSrc}`
              : imgSrc
          }
          height="300"
          className="speaker-card-image"
          alt={nomeSpeaker}
        />
        {setIsBioOpen ? (
          <p
            className="speaker-card-text"
            style={{
              backgroundColor:
                year === 2023 ? global.COLORS.ROSSO_POSTER : "black",
            }}
          >
            Scopri di più
          </p>
        ) : (
          <></>
        )}
      </div>

      <p
        style={{
          fontSize: "20px",
          textTransform: "uppercase",
          fontFamily: "GothamBold",
          maxWidth: "16ch",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        {(year === 2022) | showName ? nomeSpeaker : " "}
      </p>
      {ruoloSpeaker ? (
        <p
          style={{
            color: global.COLORS.GIALLO_COUNTDOWN,
            maxWidth: "30ch",
            fontFamily: "Anton",
          }}
        >
          {ruoloSpeaker}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
