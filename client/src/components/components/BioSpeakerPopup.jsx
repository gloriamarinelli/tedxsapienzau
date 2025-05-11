import React, { useEffect } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import global from "../../resources/global.json";
import "../../resources/styles/edizione2022style.css";

export default function BioSpeakerPopup({
  isBioOpen,
  setIsBioOpen,
  selectedSpeakerInfo,
  windowSize,
  year,
}) {
  useEffect(() => {
    if (isBioOpen) {
      document.body.classList.add("overflow-hidden");
      console.log(selectedSpeakerInfo);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <div>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            opacity: isBioOpen ? 1 : 0,
            pointerEvents: isBioOpen ? "initial" : "none",
            transition: "all 0.4s ease-in-out",
            zIndex: 10,
          }}
          onClick={() => setIsBioOpen(false)}
        ></div>
        <div
          style={{
            height: "100vh",
            width: "600px",
            position: "fixed",
            top: 0,
            right: isBioOpen ? 0 : "-100%",
            zIndex: 11,
            background:
              year === 2022
                ? "linear-gradient(307deg, rgb(130, 36, 51) 29%, #E62B1E 98%)"
                : year === 2023
                ? "linear-gradient(307deg, #a42332 5%, #242958 60%)"
                : "linear-gradient(307deg, #ff009c 3%, #0033cb 60%)",
            transition: "all 0.4s ease-in-out",
            overflowY: "scroll",
          }}
        >
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
            style={{
              color: "#fff",
              position: "absolute",
              left: "20px",
              top: "60px",
              cursor: "pointer",
            }}
            onClick={() => setIsBioOpen(false)}
          />
          <iframe
            width="600"
            height="400"
            src={selectedSpeakerInfo.linkTalk}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div
            style={{
              width: "95%",
              margin: "auto",
              color: "#fff",
              fontFamily: "GothamBold",
            }}
          >
            <div className="tag-speaker mt-3 mb-1" style={{ fontSize: "17px" }}>
              {selectedSpeakerInfo.tag}
            </div>
            <h1>{selectedSpeakerInfo.nomeSpeaker}</h1>
            <p
              className="mt-1"
              style={{
                fontSize: "15px",
                fontFamily: "GothamBook",
                textAlign: "justify",
              }}
            >
              {selectedSpeakerInfo.bio}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    /**
     * MOBILE / TABLET
     */
    return (
      <div>
        <div
          style={{
            height: "100%",
            width: "100vw",
            position: "fixed",
            top: 0,
            right: isBioOpen ? 0 : "-100%",
            opacity: isBioOpen ? 1 : 0,
            zIndex: 11,
            background:
              year === 2022
                ? "linear-gradient(307deg, rgb(130, 36, 51) 29%, #E62B1E 98%)"
                : year === 2023
                ? "linear-gradient(307deg, #a42332 5%, #242958 60%)"
                : "linear-gradient(307deg, #ff009c 3%, #0033cb 60%)",
            transition: "all 0.4s ease-in-out",
            overflowY: "scroll",
          }}
        >
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
            style={{
              color: "#fff",
              position: "absolute",
              left: "20px",
              top: "100px",
              cursor: "pointer",
            }}
            onClick={() => setIsBioOpen(false)}
          />
          <iframe
            width="100%"
            height="400"
            textAlign="center"
            src={selectedSpeakerInfo.linkTalk}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div
            style={{
              width: "95%",
              margin: "auto",
              color: "#fff",
              fontFamily: "GothamBold",
            }}
          >
            <div className="tag-speaker mt-3 mb-1">
              {selectedSpeakerInfo.tag}
            </div>
            <h1>{selectedSpeakerInfo.nomeSpeaker}</h1>
            <p
              className="mt-1"
              style={{
                fontSize: "15px",
                fontFamily: "GothamBook",
                textAlign: "justify",
              }}
            >
              {selectedSpeakerInfo.bio}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
