import React, { useState, useEffect } from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import global from "../../resources/global.json";
import Chip from "@mui/material/Chip";
import "../../resources/styles/board.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const theme = createTheme({
  palette: {
    it: {
      main: "rgba(240, 126, 42, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    ted: {
      main: "rgba(255,255,255, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    la: {
      main: "rgba(33, 188, 239, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    cemm: {
      main: "rgba(233, 73, 58, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    hra: {
      main: "rgba(40, 132, 199, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    ers: {
      main: "rgba(240, 137, 183, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    sec: {
      main: "rgba(149, 196, 89, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    dex: {
      main: "rgba(250, 183, 50, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    pem: {
      main: "rgba(187, 92, 158, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    segr: {
      main: "rgba(235, 0, 40, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    coorg: {
      main: "rgba(235, 0, 40, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    org: {
      main: "rgba(235, 0, 40, 0.5)",
      light: "#EC6162",
      dark: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
  },
});

const BoardInfos = [
  {
    team: "org",
    name: "Ilaria Cataldi",
    linkedin: "www",
    path: "IlariaCataldi",
    role: "Organizer",
  },
  {
    team: "coorg",
    name: "Matteo Orsini",
    linkedin: "www",
    path: "MatteoOrsini",
    role: "Co-Organizer",
  },
  {
    team: "segr",
    name: "Matilde Bernardini",
    linkedin: "www",
    path: "MatildeBernardini",
    role: "Segreteria Generale",
  },
  {
    team: "it",
    name: "Gloria Marinelli",
    linkedin: "www",
    path: "GloriaMarinelli",
    role: "IT & Website",
  },
  {
    team: "pem",
    name: "Michele Gili",
    linkedin: "www",
    path: "MicheleGili",
    role: "Planning & Event Management",
  },
  {
    team: "dex",
    name: "Enrico Romito",
    linkedin: "www",
    path: "EnricoRomito",
    role: "Design",
  },
  {
    team: "sec",
    name: "Alessandro Paolinelli",
    linkedin: "www",
    path: "AlessandroPaolinelli",
    role: "Speaker & Event Curation",
  },
  {
    team: "ers",
    name: "Alessandra Amicucci",
    linkedin: "www",
    path: "AlessandraAmicucci",
    role: "External Relationships & Sponsor",
  },
  {
    team: "hra",
    name: "Giulia Grasso",
    linkedin: "www",
    path: "GiuliaGrasso",
    role: "Human Resources & Academy",
  },
  {
    team: "cemm",
    name: "Niccolò Testa",
    linkedin: "www",
    path: "NiccoloTesta",
    role: "Communication, Editorial, Marketing & Media",
  },
  {
    team: "la",
    name: "Silvia Scardini",
    linkedin: "www",
    path: "SilviaScardini",
    role: "Legal & Administrative",
  },
];

const BoardNameStyle = {
  margin: "30px 0",
  fontFamily: "Fira Sans Extra Condensed, sans-serif",
  fontSize: "50px",
  backgroundColor: global.COLORS.NERO,
  color: "#fff",
};

export default function BoardCard({
  id,
  nome,
  gruppo,
  ruolo,
  image,
  link,
  year,
  device,
  selectedChip,
}) {
  const [currentInfo, setCurrentInfo] = useState(null); // currently clicked chip information
  const [timerId, setTimerId] = useState(null); // timer ID
  const css_fade_in_class = "fade-in"; // css class from "../../resources/styles/board.css"
  const css_fade_out_class = "fade-out"; // css class from "../../resources/styles/board.css"
  const [imageClass, setImageClass] = useState(css_fade_in_class); // State for the image animation class
  const fadeOutDuration = 500; // animation from "../../resources/styles/board.css"

  const handleClick = (info) => {
    // clear the existing timer if one is active
    if (timerId) {
      clearTimeout(timerId);
    }

    setCurrentInfo(info); // set the current info to the clicked chip
    setImageClass(css_fade_in_class); // set the image class to "fade-in"

    // set a new timer to change the class to "fade-out" after 5 seconds
    const newTimerId = setTimeout(() => {
      setImageClass(css_fade_out_class); // change the class to "fade-out"

      // set another timer to reset the image to the default after the "fade-out" duration
      const resetTimerId = setTimeout(() => {
        setImageClass(css_fade_in_class); // reset to "fade-in" for the default image
        setCurrentInfo(null); // reset current info to show the default picture (board picture)
      }, fadeOutDuration); // duration of the "fade-out" animation

      setTimerId(resetTimerId); // save the reset timer ID
    }, 5000); // wait for 5 seconds before starting the "fade-out"

    setTimerId(newTimerId); // save the new timer ID
  };

  /* timer resets when a new chip is clicked */
  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  function fromGruppoToTeamAcronym(gruppo) {
    let team_acronym;

    switch (gruppo) {
      case "IT & Website":
        team_acronym = "it";
        break;
      case "Design":
        team_acronym = "dex";
        break;
      case "Legal & Administrative":
        team_acronym = "la";
        break;
      case "Communication, Editorial, Marketing & Media":
        team_acronym = "cemm";
        break;
      case "Co-organizer":
        team_acronym = "coorg";
        break;
      case "Organizer":
        team_acronym = "org";
        break;
      case "Speakers & Event Curation":
        team_acronym = "sec";
        break;
      case "External Relationships & Sponsor":
        team_acronym = "ers";
        break;
      case "Human Resources & Academy":
        team_acronym = "hra";
        break;
      case "Segreteria Generale":
        team_acronym = "segr";
        break;
      case "Plannig & Event Management":
        team_acronym = "pem";
        break;
      default:
        team_acronym = "empty";
        break;
    }

    return team_acronym;
  }

  if (year === 2024) {
    if (device === "desktop") {
      return (
        <>
          <div
            id="board-ext-div-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              backgroundColor: "black",
            }}
          >
            <div
              id="board-int-div-desktop"
              style={{
                display: selectedChip
                  ? selectedChip !== "board"
                    ? "none"
                    : "flex"
                  : "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
                backgroundColor: "black",
              }}
            >
              <h1 id="board" style={BoardNameStyle}>
                Board
              </h1>
              <div className="mt-3 md-3">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  useFlexGap
                  flexWrap="wrap"
                >
                  {BoardInfos.map((info, index) => (
                    <ThemeProvider theme={theme} key={index}>
                      <Chip
                        sx={{
                          "&:hover": {
                            backgroundColor: "#191919",
                          },
                        }}
                        label={info.name}
                        color={info.team}
                        onClick={() => handleClick(info)}
                      />
                    </ThemeProvider>
                  ))}
                </Stack>
              </div>

              {!currentInfo ? (
                <img
                  src={"/images/team24/board.webp"}
                  alt="Board"
                  style={{
                    maxWidth: "70%",
                    height: "auto",
                  }}
                />
              ) : (
                <div
                  className={imageClass}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "50px",
                    height: "auto",
                  }}
                >
                  <img
                    src={`/images/team24/${currentInfo?.path}.webp`}
                    alt={currentInfo?.path}
                    style={{
                      height: "500px",
                    }}
                  />
                  <div style={{ marginLeft: "20px" }}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "35px",
                        fontWeight: "bold",
                      }}
                    >
                      {currentInfo?.name}
                      {link && (
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="m"
                          style={{ marginLeft: "20px" }}
                        />
                      )}
                    </a>
                    <p
                      style={{
                        color: theme.palette[currentInfo?.team]?.main,
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {currentInfo?.role}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      );
    }
    return (
      <div
        key={id}
        className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
        style={{
          position: "relative",
          backgroundColor: global.COLORS.NERO, //! Cambiare colore
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            border: "2px solid transparent",
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              textDecoration: "none",
              color: "white",
            }}
          >
            {link && <FontAwesomeIcon icon={faLinkedin} size="xl" />}
          </a>

          <img
            src={`/images/team24/${image}`}
            width="245px"
            height="350px"
            alt="foto board"
            style={{
              borderRadius: "20px 20px 0 0",
              objectFit: "contain",
              //backgroundColor: "#1f1f1f",
            }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
              backgroundColor: "#000",
              color: "#fff",
              width: "245px",
              borderRadius: "0 0 20px 20px",
              padding: "20px 0",
              height: "120px",
            }}
          >
            <div
              className="portfolio-caption-heading"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "23px",
                color: "#fff",
              }}
            >
              {nome}
            </div>

            <div
              className="portfolio-caption-heading"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "bold",
                color:
                  theme.palette[fromGruppoToTeamAcronym(ruolo)]?.main ||
                  "white",
              }}
            >
              {ruolo}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (year === 2023) {
    return (
      <div
        key={id}
        className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
        style={{
          position: "relative",
          backgroundColor: global.COLORS.NERO, //! Cambiare colore
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            border: "2px solid transparent",
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              textDecoration: "none",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>

          <img
            src={`/images/team23/${image}`}
            width="245px"
            height="350px"
            alt="foto board"
            style={{
              borderRadius: "20px 20px 0 0",
              objectFit: "cover",
              //backgroundColor: "#1f1f1f",
            }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
              backgroundColor: "#000",
              color: "#fff",
              width: "245px",
              borderRadius: "0 0 20px 20px",
              padding: "20px 0",
              height: "120px",
            }}
          >
            <div
              className="portfolio-caption-heading"
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "23px",
                color: "#fff",
              }}
            >
              {nome}
            </div>

            <div
              className="portfolio-caption-heading"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {ruolo}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (year === 2022) {
    return (
      <>
        <div
          key={id}
          className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={
              year === 2022
                ? `/images/team22/${image}`
                : `data:image/*;base64,${image}`
            }
            width="245px"
            height="350px"
            alt="foto board"
            style={{ borderRadius: "20px 20px 0 0", objectFit: "cover" }}
          />

          <div
            className="portfolio-caption"
            style={{
              justifyContent: "center",
              backgroundColor: "#000",
              color: "#fff",
              width: "245px",
              borderRadius: "0 0 20px 20px",
              padding: "20px 0",
              height: "120px",
            }}
          >
            <a
              href={link}
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <div
                className="portfolio-caption-heading"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "23px",
                }}
              >
                {nome}
              </div>
            </a>
            <div
              className="portfolio-caption-heading"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              {ruolo}
            </div>
          </div>
        </div>
      </>
    );
  }
}
