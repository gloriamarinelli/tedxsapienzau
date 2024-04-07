import React, { useRef, useState, useEffect } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";
import axios from "axios";
import "../../index.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard";

export default function Team2022() {
  const [activeYear, setActiveYear] = useState(24);
  const [windowSize, setWindowSize] = useOutletContext();
  const button2022 = useRef();
  const button2023 = useRef();
  const button2024 = useRef();
  const button2022Mobile = useRef();
  const button2023Mobile = useRef();
  const button2024Mobile = useRef();
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

  const TeamNameStyle = {
    margin: "30px 0",
    fontFamily: "Fira Sans Extra Condensed, sans-serif",
    fontSize: "40px",
    color: "#fff",
  };

  const BoardNameStyle = {
    margin: "30px 0",
    fontFamily: "Fira Sans Extra Condensed, sans-serif",
    fontSize: "50px",
    backgroundColor: global.COLORS.NERO, //! Cambiare colore
    color: "#fff"
  };

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
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
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
            style={BoardNameStyle}
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
            style={BoardNameStyle}
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
          style={TeamNameStyle}
        >
          Team Design & Website
        </h1>
        <div className="row">{dwArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Communication, Editorial, Marketing & Media
        </h1>
        <div className="row">{cemArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team External Relation & Sponsor
        </h1>
        <div className="row">{ersArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Legal & Administrative
        </h1>
        <div className="row">{laArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Planning & Event Management
        </h1>
        <div className="row">{pemArray}</div>
        <h1
          style={TeamNameStyle}
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
          style={TeamNameStyle}
        >
          Team Curator
        </h1>
        <div className="row">{curatorArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Communication
        </h1>
        <div className="row">{communicationArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Speaker Curation
        </h1>
        <div className="row">{speakerArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Fundraising
        </h1>
        <div className="row">{fundArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Grafica
        </h1>
        <div className="row">{graficaArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Radio
        </h1>
        <div className="row">{radioArray}</div>
        <h1
          style={TeamNameStyle}
        >
          Team Planning
        </h1>
        <div className="row">{planArray}</div>
      </>
    );
  };

  function chooseYear() {
    if (activeYear === 22) return getTeam2022();
    else if (activeYear === 23) return getTeam2023();
    else return getTeam2024();
  }

  function getTeam2023() {
    return (
      <div 
        className="container-xl"
      >
        <div className="row">{handleBoardCardSection23()}</div>
        <div>{handleVolunteersCardSection23()}</div>
      </div>
    );
  }

  function getTeam2024() {
    return comingSoon();
  }

  function getTeam2022() {
    return (
      <>
        <div 
          className="container"
        >
          <div className="row">{handleBoardCardSection22()}</div>
        </div>
        <div className="container">
          <div className="row">{handleVolunteersCardSection22()}</div>
        </div>
      </>
    );
  }

  function comingSoon() {
    return (
      <div
        className="coming-soon"
        style={{
          backgroundColor: global.COLORS.NERO,
          padding: "10px",
          fontFamily: "Fira Sans Extra Condensed, sans-serif",
          placeItems: "center",
          display: "grid",
          color: global.COLORS.ROSSO_TED,
        }}
      >
        <h1>COMING SOON . . .</h1>
      </div>
    );
  }


  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     */

    return (
      <>
        <section
          style={{
            backgroundColor: global.COLORS.NERO,
            marginTop: global.UTILS.NAV_HEIGHT,
            padding: "10px",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div
            style={{
              width: "99%",
              height: "80%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: "#191919",
              //marginRight: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1
              className="font-weight-bold mt-5 mb-5"
              style={{
                fontSize: "120px",
                fontWeight: "bold",
                margin: "0",
                color: global.COLORS.ROSSO_TED,
              }}
            >
              TEAM
            </h1>
          </div>
        </section>
        <section
          className="pt-5 pb-5 px-5 d-flex justify-content-between"
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <h3
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
              display: "flex",
              color: "white",
            }}
          >
            Chi ha partecipato:
            <div
              ref={button2024}
              className="year-button underlined"
              type="button"
              style={{ marginLeft: "30px" }}
              onClick={() => {
                button2022.current.classList.remove("underlined");
                button2023.current.classList.remove("underlined");
                button2024.current.classList.add("underlined");
                setActiveYear(24);
              }}
            >
              2024
            </div>
            <div
              ref={button2023}
              className="year-button"
              type="button"
              style={{ marginLeft: "30px" }}
              onClick={() => {
                button2022.current.classList.remove("underlined");
                button2024.current.classList.remove("underlined");
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
                button2024.current.classList.remove("underlined");
                button2022.current.classList.add("underlined");
                setActiveYear(22);
              }}
            >
              2022
            </div>
          </h3>
        </section>
        <section
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
          }}
        >
          {chooseYear()}
        </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <section
          style={{
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
            marginTop: global.UTILS.NAV_HEIGHT,
            padding: "10px",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div
            className="header"
            style={{
              width: "98%",
              height: "80%",
              padding: global.UTILS.BENTO_BOX_PADDING,
              borderRadius: global.UTILS.BENTO_BOX_PADDING,
              backgroundColor: "#191919",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1
              className="font-weight-bold"
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: global.COLORS.ROSSO_TED,
              }}
            >
              TEAM
            </h1>
          </div>
        </section>

        <section
          className="pt-3 pb-5 px-3"
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left",
              color: "#fff",
              display: "flex",
            }}
          >
            Chi ha partecipato:
          </h3>
          <div style={{ display: "flex" }}>
            <div
              ref={button2024Mobile}
              className="year-button underlined px-3"
              type="button"
              style={{ 
                //marginRight: "30px",
                fontSize: "30px",
                color: "white"
              }}
              onClick={() => {
                button2023Mobile.current.classList.remove("underlined");
                button2022Mobile.current.classList.remove("underlined");
                button2024Mobile.current.classList.add("underlined");
                setActiveYear(24);
              }}
            >
              2024
            </div>
            <div
              ref={button2023Mobile}
              className="year-button px-3"
              type="button"
              style={{ 
                //marginRight: "30px",
                fontSize: "30px",
                color: "white"
              }}
              onClick={() => {
                button2024Mobile.current.classList.remove("underlined");
                button2022Mobile.current.classList.remove("underlined");
                button2023Mobile.current.classList.add("underlined");
                setActiveYear(23);
              }}
            >
              2023
            </div>
            <div
              ref={button2022Mobile}
              className="year-button px-3"
              type="button"
              style={{ 
                //marginRight: "30px",
                fontSize: "30px",
                color: "white"
              }}
              onClick={() => {
                button2023Mobile.current.classList.remove("underlined");
                button2024Mobile.current.classList.remove("underlined");
                button2022Mobile.current.classList.add("underlined");
                setActiveYear(22);
              }}
            >
              2022
            </div>
          </div>
        </section>
        <section
          style={{
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
          }}
        >
          {chooseYear()}
        </section>
      </>
    );
  }
}
