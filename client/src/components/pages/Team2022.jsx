import React, { useState, useEffect } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";
import axios from "axios";
import "../../index.css";
import { Buffer } from "buffer";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";

export default function Team2022() {
  const [team, setTeam] = useState([]);
  const [windowSize, setWindowSize] = useOutletContext();

  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "team/2022")
      .then((res, err) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSpeakersCardSection = () => {
    if (team.length === 0) {
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
      // eslint-disable-next-line no-lone-blocks
      {
        team.map((team) => {
          const { id, nome, gruppo, ruolo, image, link } = team;
          let base64StringImage = Buffer.from(image, "binary").toString(
            "base64"
          );
          res.push(
            <ExecutiveTeamCard
              key={id}
              nome={nome}
              gruppo={gruppo}
              ruolo={ruolo}
              image={base64StringImage}
              link={link}
            />
          );
        });
        return res;
      }
    }
  };

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     */
    return (
      <>
        <div
          className="header gradient-background-team2022"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            marginBottom: "10px",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "40vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "120px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            TEAM 2022
          </h1>
        </div>
        <div className="row gap-5 justify-content-center">
          <div className="row">{handleSpeakersCardSection()}</div>
        </div>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="header gradient-background-team2022"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            marginBottom: "10px",            
            height: "40vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            TEAM 2022
          </h1>
        </div>
        <div className="row gap-5 justify-content-center">
          <div className="row">{handleSpeakersCardSection()}</div>
        </div>
      </>
    );
  }
}
