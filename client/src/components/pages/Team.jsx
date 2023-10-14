import React, { useRef, useState, useEffect } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";
import axios from "axios";
import "../../index.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard";

export default function Team2022() {
  const [activeYear, setActiveYear] = useState(23);
  const [windowSize, setWindowSize] = useOutletContext();
  const button2022 = useRef();
  const button2023 = useRef();
  const button2022Mobile = useRef();
  const button2023Mobile = useRef();
  const [board, setBoard] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  const gruppi23 = ["dw", "cem", "ers", "la", "pem", "sec"];

  const gruppi22 = [
    "communication",
    "curator",
    "fundraising",
    "grafica",
    "marketing",
    "planning",
    "radio",
    "speaker curator",
  ];

  useEffect(() => {
    setBoard([]);
    setVolunteers([]);
    setTimeout(() => {
      axios
        .get(global.CONNECTION.ENDPOINT + `team/${activeYear}`)
        .then((res, err) => {
          const data = res.data;
          let newBoard = [];
          let newVolunteers = [];
          data.forEach((item) => {
            if (item.gruppo === "board") newBoard.push(item);
            else newVolunteers.push(item);
          });
          setBoard(newBoard);
          setVolunteers(newVolunteers);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 200);
  }, [activeYear]);

  const handleBoardCardSection23 = () => {
    if (board.length === 0) {
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

      board.map((board) => {
        const { id, nome, gruppo, ruolo, fotoNome, link } = board;
        if (gruppo != "board") return;
        res.push(
          <ExecutiveTeamCard
            key={id}
            nome={nome}
            gruppo={gruppo}
            ruolo={ruolo}
            image={fotoNome}
            link={link}
            year={2023}
          />
        );
      });
      return (
        <>
          <h1
            style={{
              margin: "30px 0",
              fontFamily: "GothamBold",
              fontSize: "50px",
            }}
          >
            Board
          </h1>
          {res}
        </>
      );
    }
  };

  const handleBoardCardSection22 = () => {
    if (board.length === 0) {
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

      board.map((board) => {
        const { id, nome, gruppo, ruolo, fotoNome, link } = board;
        if (gruppo != "board") return;
        res.push(
          <ExecutiveTeamCard
            key={id}
            nome={nome}
            gruppo={gruppo}
            ruolo={ruolo}
            image={fotoNome}
            link={link}
            year={2022}
          />
        );
      });
      return (
        <>
          <h1
            style={{
              margin: "30px 0",
              fontFamily: "GothamBold",
              fontSize: "50px",
            }}
          >
            Board
          </h1>
          {res}
        </>
      );
    }
  };

  const handleVolunteersCardSection23 = () => {
    if (volunteers.length === 0) return;

    let dwVolunteers = [];
    let cemVolunteers = [];
    let ersVolunteers = [];
    let pemVolunteers = [];
    let secVolunteers = [];
    let laVolunteers = [];

    volunteers.map((vol) => {
      switch (vol.gruppo) {
        case "dw":
          dwVolunteers.push(vol);
          break;
        case "cem":
          cemVolunteers.push(vol);
          break;
        case "ers":
          ersVolunteers.push(vol);
          break;
        case "pem":
          pemVolunteers.push(vol);
          break;
        case "sec":
          secVolunteers.push(vol);
          break;
        case "la":
          laVolunteers.push(vol);
          break;
      }
    });

    let dwArray = [];
    let cemArray = [];
    let ersArray = [];
    let laArray = [];
    let pemArray = [];
    let secArray = [];

    dwVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      dwArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2023}
        />
      );
    });

    cemVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      cemArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2023}
        />
      );
    });

    ersVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      ersArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2023}
        />
      );
    });

    laVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      laArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2023}
        />
      );
    });

    pemVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      pemArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2023}
        />
      );
    });

    secVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      secArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2023}
        />
      );
    });

    return (
      <>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Design & Website
        </h1>
        <div className="row">{dwArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Communication, Editorial, Marketing & Media
        </h1>
        <div className="row">{cemArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team External Relation & Sponsor
        </h1>
        <div className="row">{ersArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Legal & Administrative
        </h1>
        <div className="row">{laArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Planning & Event Management
        </h1>
        <div className="row">{pemArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Speakers & Event Curation
        </h1>
        <div className="row">{secArray}</div>
      </>
    );
  };

  const handleVolunteersCardSection22 = () => {
    if (volunteers.length === 0) return;

    let curatorVolunteers = [];
    let communicationVolunteers = [];
    let speakerVolunteers = [];
    let fundVolunteers = [];
    let graficaVolunteers = [];
    let radioVolunteers = [];
    let planVolunteers = [];

    volunteers.map((vol) => {
      // eslint-disable-next-line default-case
      switch (vol.gruppo) {
        case "curator":
          curatorVolunteers.push(vol);
          break;
        case "communication":
          communicationVolunteers.push(vol);
          break;
        case "speaker curator":
          speakerVolunteers.push(vol);
          break;
        case "fundraising":
          fundVolunteers.push(vol);
          break;
        case "grafica":
          graficaVolunteers.push(vol);
          break;
        case "radio":
          radioVolunteers.push(vol);
          break;
        case "planning":
          planVolunteers.push(vol);
          break;
      }
    });

    let curatorArray = [];
    let communicationArray = [];
    let speakerArray = [];
    let fundArray = [];
    let graficaArray = [];
    let radioArray = [];
    let planArray = [];

    curatorVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      curatorArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    communicationVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      communicationArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    speakerVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      speakerArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    fundVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      fundArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    graficaVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      graficaArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    radioVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      radioArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    planVolunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      planArray.push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={2022}
        />
      );
    });

    return (
      <>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Curator
        </h1>
        <div className="row">{curatorArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Communication
        </h1>
        <div className="row">{communicationArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Speaker Curation
        </h1>
        <div className="row">{speakerArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Fundraising
        </h1>
        <div className="row">{fundArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Grafica
        </h1>
        <div className="row">{graficaArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Radio
        </h1>
        <div className="row">{radioArray}</div>
        <h1
          style={{
            margin: "30px 0",
            fontFamily: "GothamBold",
            fontSize: "40px",
          }}
        >
          Team Planning
        </h1>
        <div className="row">{planArray}</div>
      </>
    );
  };

  function chooseYear() {
    if (activeYear === 22) return getTeam2022();
    else return getTeam2023();
  }

  function getTeam2023() {
    return (
      <div className="container-xl">
        <div className="row">{handleBoardCardSection23()}</div>
        <div>{handleVolunteersCardSection23()}</div>
      </div>
    );
  }

  function getTeam2022() {
    return (
      <>
        <div className="container">
          <div className="row">{handleBoardCardSection22()}</div>
        </div>
        <div className="container">
          <div className="row">{handleVolunteersCardSection22()}</div>
        </div>
      </>
    );
  }

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */

    return (
      <>
        <div
          className="header gradient-background-team2023"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            marginBottom: "10px",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "40vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
            TEAM
          </h1>
        </div>
        <section
          className="mt-5 mb-5 d-flex justify-content-between"
          style={{
            width: "95vw",
            margin: "auto",
            fontFamily: "GothamBold",
          }}
        >
          <h3
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
              display: "flex",
            }}
          >
            Chi ha partecipato:
            <div
              ref={button2023}
              className="year-button underlined"
              type="button"
              style={{ marginLeft: "30px" }}
              onClick={() => {
                button2022.current.classList.remove("underlined");
                button2023.current.classList.add("underlined");
                setActiveYear(23);
              }}
            >
              2023
            </div>
            <div
              ref={button2022}
              className="year-button"
              type="button"
              style={{ marginLeft: "30px" }}
              onClick={() => {
                button2023.current.classList.remove("underlined");
                button2022.current.classList.add("underlined");
                setActiveYear(22);
              }}
            >
              2022
            </div>
          </h3>
        </section>

        {chooseYear()}
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="header gradient-background-team2023"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            height: "30vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
            TEAM
          </h1>
        </div>

        <section
          className="mt-3 mb-5"
          style={{
            width: "95vw",
            margin: "auto",
            fontFamily: "GothamBold",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left",
              color: "black",
              display: "flex",
            }}
          >
            Chi ha partecipato:
          </h3>
          <div style={{ display: "flex" }}>
            <div
              ref={button2022Mobile}
              className="year-button underlined"
              type="button"
              style={{ marginRight: "30px", fontSize: "30px" }}
              onClick={() => {
                button2023Mobile.current.classList.remove("underlined");
                button2022Mobile.current.classList.add("underlined");
                setActiveYear(23);
              }}
            >
              2023
            </div>
            <div
              ref={button2023Mobile}
              className="year-button"
              type="button"
              style={{ marginRight: "30px", fontSize: "30px" }}
              onClick={() => {
                button2022Mobile.current.classList.remove("underlined");
                button2023Mobile.current.classList.add("underlined");
                setActiveYear(22);
              }}
            >
              2022
            </div>
          </div>
        </section>
        {chooseYear()}
      </>
    );
  }
}
