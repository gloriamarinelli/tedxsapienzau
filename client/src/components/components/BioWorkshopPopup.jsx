import React, { useEffect } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import global from "../../resources/global.json";

export default function BioWorkshopPopup({
  isBioOpen,
  setIsBioOpen,
  selectedWorkshopInfo,
  windowSize,
}) {
  useEffect(() => {
    if (isBioOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBioOpen]);

  const closeModal = () => {
    setIsBioOpen(false);
  };

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <Modal
        isOpen={isBioOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            maxWidth: "700px",
            maxHeight: "400px",
            margin: "auto",
            backgroundColor: global.COLORS.CELESTE,
            borderRadius: "10px",
            padding: "20px",
            color: "white",
            fontFamily: "GothamBook",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          },
        }}
        contentLabel="Workshop Details"
      >
        <div>
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "black",
              backgroundColor: "white",
              border: "none",
              padding: "3px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <h3 className="mt-3" style={{ fontFamily: "GothamBold" }}>
            {selectedWorkshopInfo.titolo}
          </h3>
          <p>
            {" "}
            <strong>Organizzato da: </strong>
            {selectedWorkshopInfo.organizer}
          </p>
          <p>
            {" "}
            <strong>Consigliato per: </strong>
            {selectedWorkshopInfo.pubblico}
          </p>
          <p>
            {" "}
            <strong>Tematica: </strong>
            {selectedWorkshopInfo.tag}
          </p>
          <p style={{ textAlign: "justify" }}> {selectedWorkshopInfo.text}</p>
          <p>
            {" "}
            <strong>Extra: </strong>
            {selectedWorkshopInfo.extra}
          </p>

          <Button
            onClick={() => (window.location.href = selectedWorkshopInfo.link)}
            style={{
              color: "white",
              backgroundColor: global.COLORS.ROSSO_POSTER,
              marginTop: "10px",
            }}
          >
            Prenota
          </Button>
        </div>
      </Modal>
    );
  } else {
    /**
     * MOBILE / TABLET
     */
    return (
      <Modal
        isOpen={isBioOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            maxWidth: "700px",
            maxHeight: "700px",
            margin: "auto",
            backgroundColor: global.COLORS.CELESTE,
            borderRadius: "10px",
            padding: "20px",
            color: "white",
            fontFamily: "GothamBook",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          },
        }}
        contentLabel="Workshop Details"
      >
        <div>
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
              backgroundColor: global.COLORS.ROSSO_POSTER,
              border: "none",
              padding: "3px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <h1 className="mt-3" style={{ fontFamily: "GothamBold" }}>
            {selectedWorkshopInfo.titolo}
          </h1>
          <p>
            {" "}
            <strong>Organizzato da: </strong>
            {selectedWorkshopInfo.organizer}
          </p>
          <p>
            {" "}
            <strong>Consigliato per: </strong>
            {selectedWorkshopInfo.pubblico}
          </p>
          <p>
            {" "}
            <strong>Tematica: </strong>
            {selectedWorkshopInfo.tag}
          </p>
          <p style={{ textAlign: "justify" }}> {selectedWorkshopInfo.text}</p>
          <p>
            {" "}
            <strong>Extra: </strong>
            {selectedWorkshopInfo.extra}
          </p>
          <Button
            onClick={() => (window.location.href = selectedWorkshopInfo.link)}
            style={{
              color: "white",
              backgroundColor: global.COLORS.ROSSO_POSTER,
              marginTop: "10px",
            }}
          >
            Prenota
          </Button>
        </div>
      </Modal>
    );
  }
}
