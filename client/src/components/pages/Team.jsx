import React, { useState, useEffect } from "react";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard.jsx";
import axios from "axios";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import VolunteerCard from "../components/VolunteerCard.jsx";
import Stack from "@mui/material/Stack";
import BasicChips from "../components/BasicChips.jsx";
import "../../resources/styles/team.css";

export default function Team2022() {
  // #region --------------------------------- Constants --------------------------------------
  const [activeYear, setActiveYear] = useState(24);
  const [windowSize] = useOutletContext();
  const [board, setBoard] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [selectedChip, setSelectedChip] = useState(null);

  const teams = {
    24: {
      acronyms: ["board", "it", "pem", "dex", "sec", "ers", "hra", "cem", "la"],
      board: "Board",
      it: "Team IT & Website",
      pem: "Team Planning & Event Management",
      dex: "Team Design",
      sec: "Team Speakers & Event Curation",
      ers: "Team External Relations & Sponsor",
      hra: "Team Human Resources & Academy",
      cem: "Team Communication, Editorial, Marketing & Media",
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

  // #endregion

  // #region --------------------------------- UseEffect --------------------------------------

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

  // #region --------------------------------- Board ------------------------------------------

  const handleBoardCardSection = (year) => {
    if (board.length === 0) {
      return (
        <div className="boardSpinnerSection">
          <div className="spinner" />
        </div>
      );
    } else {
      let res = [];

      /* priority order */
      const priorityOrder = [
        "Ilaria Cataldi",
        "Matteo Orsini",
        "Giulia Riccardi",
        "Gloria Marinelli",
      ];

      /* custom sorting function (priority order) */
      const customSort = (a, b) => {
        const indexA = priorityOrder.indexOf(a.nome);
        const indexB = priorityOrder.indexOf(b.nome);

        /* both names are in the priorityOrder list, the first found has more priority */
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }

        /* just one of the names is in the priorityOrder list */
        if (indexA !== -1) return -1; // "a" has the priority (if it is in the list)
        if (indexB !== -1) return 1; // "b" has the priority (if it is in the list)

        /* none of the names is in the priorityOrder list, and they are sorted alphabetically. */
        return a.nome.localeCompare(b.nome);
      };

      /* board members custom sorting */
      const sortedBoard = board
        .filter((board) => board.gruppo === "board") // "board" elements filtering
        .sort(customSort);

      sortedBoard.forEach((board) => {
        const { id, nome, gruppo, ruolo, fotoNome, link } = board;
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
          <div
            id="board-div"
            style={{
              display: selectedChip
                ? selectedChip !== "board"
                  ? "none"
                  : ""
                : "",
            }}
          >
            <h1 id="board" className="boardNameStyle">
              Board
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>{res}</div>
          </div>
        </>
      );
    }
  };

  // #endregion

  // #region --------------------------------- Volunteers -------------------------------------

  const handleVolunteersCardSection = (year, isMobile) => {
    if (volunteers.length === 0) return;
    const annata = year.toString().slice(-2);

    let photos = teams[annata].acronyms.reduce(
      (acc, acronym) => ({ ...acc, [acronym]: [] }),
      {}
    );

    volunteers.forEach((vol) => {
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
          device={isMobile ? "mobile" : null}
        />
      );
    });

    const sections = Object.entries(photos).map(([key, value]) => (
      <div
        style={{
          display: selectedChip ? (selectedChip == key ? "" : "none") : "",
        }}
      >
        <h1
          className="teamNameStyle"
          id={key}
          style={{ display: key !== "board" ? "" : "none" }}
        >
          {teams[annata][key]}
        </h1>
        <div className="row">{value}</div>
      </div>
    ));

    return sections;
  };
  // #endregion

  // #region --------------------------------- Choose Year ------------------------------------

  function chooseYear(mobile = false) {
    if (activeYear === 22) return getTeam2022();
    else if (activeYear === 23) return getTeam2023();
    else return getTeam2024(mobile);
  }

  function getTeam2024(small = false) {
    if (volunteers.length === 0) {
      return (
        <div className="boardSpinnerSection">
          <div className="spinner" />
        </div>
      );
    } else {
      return (
        <>
          {small ? (
            <>
              <div className="container-xl">
                <div className="row">{handleBoardCardSection(2024)}</div>
                <div>{handleVolunteersCardSection(2024, true)}</div>
              </div>
            </>
          ) : (
            <>
              <ExecutiveTeamCard
                year={2024}
                device={"desktop"}
                selectedChip={selectedChip}
              />
              <div className="container-xl">
                <div>{handleVolunteersCardSection(2024)}</div>
              </div>
            </>
          )}
        </>
      );
    }
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

  // #region --------------------------------- Chips ------------------------------------------

  function handleTeamsChips() {
    const team_strings = teams[activeYear.toString()] || teams["24"];

    const handleChipClick = (teamId) => {
      setSelectedChip(teamId);
    };

    const handleDeselect = () => {
      setSelectedChip(null);
    };

    const chips = Object.entries(team_strings).map(([key, teamName]) => (
      <BasicChips
        key={key}
        teamName={teamName}
        teamId={key}
        onClick={() => handleChipClick(key)} //
      />
    ));

    delete chips[0]; // remove the first chip which contains the acronyms

    if (selectedChip) {
      // if a chip is selected, it will be displayed alongside the 'X' chip
      return (
        <>
          <BasicChips
            key="deselect"
            teamName="X"
            onClick={handleDeselect} // selected chip reset
          />

          <BasicChips
            key={selectedChip}
            teamName={team_strings[selectedChip]} // display selected team's name
            teamId={selectedChip}
          />
        </>
      );
    }

    // if no chip is selected, all chips will be displayed
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

  // #region --------------------------------- Views-------------------------------------------

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
            backgroundColor: global.COLORS.NERO,
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
          {chooseYear(true)}
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
