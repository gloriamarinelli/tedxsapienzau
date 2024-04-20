import React, { useRef, useState, useEffect, Component } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";
import axios from "axios";
import "../../index.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard";
import Countdown from "../components/Countdown";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Info from "../components/Info";
import Stack from '@mui/material/Stack';
import BasicChips from "../components/BasicChips.jsx"
import { log } from "three/examples/jsm/nodes/Nodes.js";






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
  const [hovered, setHovered] = useState(false);

  const teams = {
    "24": {
      "it": ["Team IT & Website", "it"],
      "pem": ["Team Planning & Event Management", "pem"],
      "dex": ["Team Design", "dex"],
      "sec": ["Team Speakers & Event Curation", "sec"],
      "ers": ["Team External Relations & Sponsor", "ers"],
      "hra": ["Team Human Resources & Academy", "hra"],
      "cam": ["Team Communication & Marketing", "cam"],
      "law": ["Team Legal & Administrative", "law"]
    },
    "23": {
      "dw": ["Team Design & Website", "dw"],
      "cem": ["Team Communication, Editorial, Marketing & Media", "cem"],
      "ers": ["Team External Relation & Sponsor", "ers"],
      "law": ["Team Legal & Administrative", "law"],
      "pem": ["Team Planning & Event Management", "pem"],
      "sec": ["Team Speaker & Event Curation", "sec"]
    },
    "22": {
      "cur": ["Team Curator", "cur"],
      "com": ["Team Communication", "com"],
      "spe": ["Team Speaker Curation", "spe"],
      "fund": ["Team Fundraising", "fund"],
      "graf": ["Team Grafica", "graf"],
      "rad": ["Team Radio", "rad"],
      "plan": ["Team Planning", "plan"]
    }
  };

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

  const BoardInfos = [
    {
      team: "IT",
      x: 504,
      y: 620,
      name: "Gloria",
      linkedin: "www",
    },
    {
      team: "Law",
      x: 400,
      y: 500,
      name: "Lucia",
      linkedin: "www",
    }
    // Add more person information objects as needed
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
          id={teams["23"]["dw"][1]}
          style={TeamNameStyle}
        >
          {teams["23"]["dw"][0]}
        </h1>
        <div className="row">{dwArray}</div>
        <h1
          id={teams["23"]["cem"][1]}
          style={TeamNameStyle}
        >
          {teams["23"]["cem"][0]}
        </h1>
        <div className="row">{cemArray}</div>
        <h1
          id={teams["23"]["ers"][1]}
          style={TeamNameStyle}
        >
          {teams["23"]["ers"][0]}
        </h1>
        <div className="row">{ersArray}</div>
        <h1
          id={teams["23"]["law"][1]}
          style={TeamNameStyle}
        >
          {teams["23"]["law"][0]}
        </h1>
        <div className="row">{laArray}</div>
        <h1
          id={teams["23"]["pem"][1]}
          style={TeamNameStyle}
        >
          {teams["23"]["pem"][0]}
        </h1>
        <div className="row">{pemArray}</div>
        <h1
          id={teams["23"]["sec"][1]}
          style={TeamNameStyle}
        >
          {teams["23"]["sec"][0]}
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
          id={teams["22"]["cur"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["cur"][0]}
        </h1>
        <div className="row">{curatorArray}</div>
        <h1
          id={teams["22"]["com"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["com"][0]}
        </h1>
        <div className="row">{communicationArray}</div>
        <h1
          id={teams["22"]["spe"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["spe"][0]}
        </h1>
        <div className="row">{speakerArray}</div>
        <h1
          id={teams["22"]["fund"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["fund"][0]}
        </h1>
        <div className="row">{fundArray}</div>
        <h1
          id={teams["22"]["graf"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["graf"][0]}
        </h1>
        <div className="row">{graficaArray}</div>
        <h1
          id={teams["22"]["rad"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["rad"][0]}
        </h1>
        <div className="row">{radioArray}</div>
        <h1
          id={teams["22"]["plan"][1]}
          style={TeamNameStyle}
        >
          {teams["22"]["plan"][0]}
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

  function handleBoardInfos24() {
    return BoardInfos.map((value, index) => (
      <Info
        key={index} // Ensure each component has a unique key
        x={value.x}
        y={value.y}
        name={value.name}
        team={value.team}
      />
    ));
  }
  
  function handleTeamsChips() {
    if (activeYear === 24) { return } //TODO: Remove this line when the 2024 team is ready
    const gruppi = teams[activeYear.toString()] || teams["24"];

    const chips = Object.entries(gruppi).map(([key, [teamName, teamId]]) => (
      <BasicChips
        key={teamId} // Using `teamId` as the key for better stability in re-renders
        teamName={teamName}
        teamId={teamId}
      />
    ));
  
    return chips;
    
  }

  function handleYearChips() {
    const chips = [24, 23, 22].map((year) => {
      return (
        <BasicChips
          key={year}
          year={year}
          active={year === activeYear}
          onClick={() => year !== activeYear && setActiveYear(year)}
        />
      );
    });
    return chips;
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
            height: "411px",
            top: "124px",
            left: "32px",
            gap: "0px",
            opacity: "0px",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        >
          <table>
            <tr>
              <td>
                <Stack 
                  direction="row" 
                  spacing={1}
                  alignItems = "center"
                  justifyContent="center"
                  useFlexGap
                  flexWrap="wrap" 
                > 
                  {handleYearChips()}
                </Stack>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    padding: global.UTILS.BENTO_BOX_PADDING,
                    //marginRight: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <h1
                    style={{
                      fontSize: "120px",
                      fontWeight: "bold",
                      margin: "0",
                      color: "white",
                    }}
                  >
                    MEET OUR TEAM
                  </h1>
                </div>
              </td>
            </tr>
            <tr>
              <td 
                style={{
                  padding: "10px",
                  width: "851px"
                }}
              >
                <Stack 
                  direction="row" 
                  spacing={1}
                  alignItems = "center"
                  justifyContent="center"
                  useFlexGap
                  flexWrap="wrap" 
                >
                  {handleTeamsChips()}
                </Stack>
              </td>
            </tr>
          </table>
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


