import React, { useState, useEffect } from "react";
import "../../index.css";
import "../../resources/styles/edizione2022style.css";
import logo from "../images/Logo_BTZ_BLACK.webp";
import WorkshopCard from "../components/WorkshopCard";
import BioWorkshopPopup from "../components/BioWorkshopPopup";
import global from "../../resources/global.json";
import axios from "axios";
import { useOutletContext } from "react-router";

export default function Workshop() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const [selectedWorkshopInfo, setSelectedWorkshopInfo] = useState({});
  const [workshop, setWorkshop] = useState([]);
  const [windowSize, setWindowSize] = useOutletContext();

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "workshop")
      .then((res, err) => {
        setWorkshop(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleWorkshopCardSection = () => {
    if (workshop.length === 0) {
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
      workshop.map((workshop) => {
        const {
          id,
          titolo,
          organizer,
          tag,
          text,
          extra,
          imgSrc,
          data,
          luogo,
          ora,
          link,
          pubblico,
        } = workshop;
        res.push(
          <WorkshopCard
            key={id}
            link={link}
            titolo={titolo}
            imgSrc={imgSrc}
            organizer={organizer}
            text={text}
            extra={extra}
            data={data}
            luogo={luogo}
            ora={ora}
            tag={tag}
            pubblico={pubblico}
            setIsBioOpen={setIsBioOpen}
            setSelectedWorkshopInfo={setSelectedWorkshopInfo}
          />
        );
      });
      return res;
    }
  };

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div
          className="header gradient-background-workshop"
          style={{
            padding: "10px",
            color: "#fff",
            height: "40vh",
            display: "grid",
            placeItems: "center",
            backgroundColor: global.COLORS.CELESTE,
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            Partecipa ai workshop targati{" "}
            <img height="80px" src={logo} alt="" />{" "}
          </h1>

          <p
            style={{
              fontSize: "25px",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Non perdere l'occasione di metterti in gioco. Partecipa al workshop
            che fa te!
          </p>
        </div>

        <div className="container">
          <div className="row">{handleWorkshopCardSection()}</div>
        </div>
        <BioWorkshopPopup
          isBioOpen={isBioOpen}
          setIsBioOpen={setIsBioOpen}
          selectedWorkshopInfo={selectedWorkshopInfo}
          windowSize={windowSize}
        />
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="header gradient-background-workshop-mobile"
          style={{
            padding: "10px",
            color: "#fff",
            height: "40vh",
            display: "grid",
            placeItems: "center",
            backgroundColor: global.COLORS.CELESTE,
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-3"
            style={{
              fontSize: "35px",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            Partecipa ai workshop targati{" "}
            <img className="mt-2" height="60px" src={logo} alt="" />{" "}
          </h1>

          <p
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Non perdere l'occasione di metterti in gioco. Partecipa al workshop
            che fa te!
          </p>
        </div>

        <div className="container">
          <div className="row">{handleWorkshopCardSection()}</div>
        </div>
        <BioWorkshopPopup
          isBioOpen={isBioOpen}
          setIsBioOpen={setIsBioOpen}
          selectedWorkshopInfo={selectedWorkshopInfo}
          windowSize={windowSize}
        />
      </>
    );
  }
}
