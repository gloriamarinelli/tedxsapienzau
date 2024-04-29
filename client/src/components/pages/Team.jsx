import React, { useRef, useState, useEffect, Component } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard.jsx";
import axios from "axios";
import "../../index.css";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard.jsx";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Info from "../components/Info.jsx";
import Stack from "@mui/material/Stack";
import BasicChips from "../components/BasicChips.jsx";
import { log } from "three/examples/jsm/nodes/Nodes.js";
import "../../resources/styles/team.css";

export default function Team2022() {
  // #region --------------------------------- Constants -------------------------------------
  const [activeYear, setActiveYear] = useState(24);
  const [windowSize, setWindowSize] = useOutletContext();
  const [board, setBoard] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  const teams = {
    24: {
      acronyms: ["it", "pem", "dex", "sec", "ers", "hra", "cam", "la"],
      it: "Team IT & Website",
      pem: "Team Planning & Event Management",
      dex: "Team Design",
      sec: "Team Speakers & Event Curation",
      ers: "Team External Relations & Sponsor",
      hra: "Team Human Resources & Academy",
      cam: "Team Communication & Marketing",
      la: "Team Legal & Administrative",
    },
    23: {
      acronyms: ["dw", "cem", "ers", "la", "pem", "sec"],
      dw: "Team Design & Website",
      cem: "Team Communication, Editorial, Marketing & Media",
      ers: "Team External Relation & Sponsor",
      la: "Team Legal & Administrative",
      pem: "Team Planning & Event Management",
      sec: "Team Speaker & Event Curation",
    },
    22: {
      acronyms: [
        "curator",
        "communication",
        "spe",
        "fundraising",
        "grafica",
        "radio",
        "planning",
      ],
      curator: "Team Curator",
      communication: "Team Communication",
      spe: "Team Speaker Curation",
      fundraising: "Team Fundraising",
      grafica: "Team Grafica",
      radio: "Team Radio",
      planning: "Team Planning",
    },
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
    },
    // Add more person information objects as needed
  ];
  // #endregion

  // #region --------------------------------- UseEffect -------------------------------------

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
  // #endregion

  // #region ---------------------------------- Board ----------------------------------------

  const handleBoardCardSection = (year) => {
    if (board.length === 0) {
      return (
        <div className="boardSpinnerSection">
          <div className="spinner"/>
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
            year={year}
          />
        );
      });
      return (
        <>
          <h1 className="boardNameStyle">Board</h1>
          {res}
        </>
      );
    }
  };
  // #endregion

  // #region -------------------------------- Volunteers -------------------------------------

  const handleVolunteersCardSection = (year) => {
    if (volunteers.length === 0) return;
    const annata = year.toString().slice(-2);

    let photos = teams[annata].acronyms.reduce(
      (acc, acronym) => ({ ...acc, [acronym]: [] }),
      {}
    );

    volunteers.map((vol) => {
      const { id, nome, gruppo, fotoNome, link } = vol;
      if (!photos[gruppo]) {
        photos[gruppo] = [];
      }
      photos[gruppo].push(
        <VolunteerCard
          key={id}
          id={id}
          nome={nome}
          gruppo={gruppo}
          image={fotoNome}
          link={link}
          year={year}
        />
      );
    });

    const sections = Object.entries(photos).map(([key, value]) => (
      <div>
        <h1 className="teamNameStyle" id={key}>
          {teams[annata][key]}
        </h1>
        <div className="row">{value}</div>
      </div>
    ));

    return sections;
  };
  // #endregion

  // #region -------------------------------- Choose Year ------------------------------------

  function chooseYear() {
    if (activeYear === 22) return getTeam2022();
    else if (activeYear === 23) return getTeam2023();
    else return getTeam2024();
  }

  function getTeam2024() {
    return (
      // <>
      //   <ExecutiveTeamCard year={2024} infos={BoardInfos} />
      //   <div className="container-xl">
      //     <div>{handleVolunteersCardSection(2024)}</div>
      //   </div>
      // </>
      <div>{comingSoon()}</div>
    );
  }

  function getTeam2023() {
    return (
      <div className="container-xl">
        <div className="row">{handleBoardCardSection(2023)}</div>
        <div>{handleVolunteersCardSection(2023)}</div>
      </div>
    );
  }

  function getTeam2022() {
    return (
      <>
        <div className="container">
          <div className="row">{handleBoardCardSection(2022)}</div>
          <div className="row">{handleVolunteersCardSection(2022)}</div>
        </div>
      </>
    );
  }
  // #endregion

  // #region ---------------------------------- Chips ----------------------------------------

  function comingSoon() {
    return (
      <div
        className="boardSpinnerSection"
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

  function handleTeamsChips() {
    if (activeYear === 24) {
      return;
    } //TODO: Remove this line when the 2024 team is ready
    var gruppi = teams[activeYear.toString()] || teams["24"];

    const chips = Object.entries(gruppi).map(([key, teamName]) => (
      <BasicChips
        key={key} // Using `teamId` as the key for better stability in re-renders
        teamName={teamName}
        teamId={key}
      />
    ));

    delete chips[0]; // Remove the first chip which represents the acronyms

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
  // #endregion

  // #region ----------------------------------- Views----------------------------------------

  function desktopView() {
    return (
      <>
        <section
          className="headerSection"
          style={{
            backgroundColor: global.COLORS.NERO,
            marginTop: global.UTILS.NAV_HEIGHT,
          }}
        >
          <div>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              useFlexGap
              flexWrap="wrap"
            >
              {handleYearChips()}
            </Stack>
          </div>
          <div
            className="headerTitleSection"
            style={{
              padding: global.UTILS.BENTO_BOX_PADDING,
            }}
          >
            <h1 className="headerTitle">MEET OUR TEAM</h1>
          </div>
          <div className="headerChipsSection">
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              useFlexGap
              flexWrap="wrap"
            >
              {handleTeamsChips()}
            </Stack>
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

  function mobileView() {
    return (
      <>
        <section
          className="headerSectionMobile"
          style={{
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
            marginTop: global.UTILS.NAV_HEIGHT,
          }}
        >
          <div>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              useFlexGap
              flexWrap="wrap"
            >
              {handleYearChips()}
            </Stack>
          </div>
          <div
            className="headerTitleSectionMobile"
            style={{
              padding: global.UTILS.BENTO_BOX_PADDING,
            }}
          >
            <h1 className="font-weight-bold headerTitleMobile">
              MEET OUR TEAM
            </h1>
          </div>
          <div>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              useFlexGap
              flexWrap="wrap"
            >
              {handleTeamsChips()}
            </Stack>
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
  // #endregion

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    return desktopView();
  } else {
    return mobileView();
  }
}
