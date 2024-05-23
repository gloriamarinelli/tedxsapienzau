import React from "react";
import "../../index.css";
import global from "../../resources/global.json";
import { set } from "date-fns";

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
}) {
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
      <div className="speaker-card">
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
    </div>
  );
}
