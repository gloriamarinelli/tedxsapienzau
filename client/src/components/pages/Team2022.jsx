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
      .get("http://localhost:8800/team/2022")
      .then((res, err) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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

        <section className="page-section" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2
                className="section-heading text-uppercase mb-5"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "3em",
                }}
              >
                Team Esecutivo
              </h2>
            </div>

            <div className="row gap-5 justify-content-center">
              {team.map((team) => {
                const { id, nome, ruolo, image } = team;
                let base64StringImage = Buffer.from(image, "binary").toString(
                  "base64"
                );
                return (
                  <ExecutiveTeamCard
                    key={id}
                    nome={nome}
                    ruolo={ruolo}
                    image={base64StringImage}
                  />
                );
              })}
            </div>
          </div>
        </section>
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
            //clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
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

        <section className="page-section" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h3
                className="section-heading text-uppercase mb-5"
                style={{
                  fontFamily: "GothamBold",
                  fontSize: "3em",
                }}
              >
                Team Esecutivo
              </h3>
            </div>

            <div className="row gap-5 justify-content-center">
              {team.map((team) => {
                const { id, nome, ruolo, image } = team;
                let base64StringImage = Buffer.from(image, "binary").toString(
                  "base64"
                );
                return (
                  <ExecutiveTeamCard
                    key={id}
                    nome={nome}
                    ruolo={ruolo}
                    image={base64StringImage}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
