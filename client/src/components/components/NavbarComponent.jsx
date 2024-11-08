import React, { useContext, useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import Image from "../images/logo-white.png";
import ItalianFlag from "../images/flags/it.png";
import EnglishFlag from "../images/flags/en.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { faArrowLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../index.css";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { Button, Row } from "react-bootstrap";

export default function NavbarComponent(props) {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const { logout, isUserLoggedIn } = useContext(AuthContext);
  const [windowSize] = useState(props.windowSize);
  const [isAdmin, setIsAdmin] = useState(false);
  const [previousOption, setOption] = useState(undefined); //set selected navbar option

  const navRef = useRef();
  const team = useRef();
  const partners = useRef();
  const blog = useRef();
  const mission_and_vision = useRef();
  const location = useRef();
  const back_to_zero = useRef();
  const awards23 = useRef();
  const act = useRef();
  const awards22 = useRef();
  const countdown2024 = useRef();

  const options = {
    team: team,
    partners: partners,
    blog: blog,
    mission_and_vision: mission_and_vision,
    location: location,
    back_to_zero: back_to_zero,
    awards23: awards23,
    act: act,
    awards22: awards22,
    countdown2024: countdown2024,
  };

  function selectOption(option) {
    //option is simply the string that will be used in the options (key:value object) to index the correct ref
    if (previousOption)
      options[previousOption].current.classList.remove(
        "navbar-submenu-edition-item-red"
      );
    if (!option) return;
    setOption(option);
    options[option].current.classList.add("navbar-submenu-edition-item-red");
  }

  function changeLanguage() {
    if (i18n.language === "en") {
      i18n.changeLanguage("it");
      localStorage.setItem("language", "it");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  }

  useEffect(() => {
    // Retrieve the previously set language from localStorage
    let lan = localStorage.getItem("language");

    // If a language was found in localStorage, change the app's language accordingly
    if (lan) i18n.changeLanguage(lan);

    // Define an asynchronous function to check if the user is logged in
    const checkIsUserLoggedIn = async () => {
      // Check if a token exists in localStorage; if not, exit early
      if (
        localStorage.getItem("token") === null || // Check if token is null
        localStorage.getItem("token") === undefined || // Check if token is undefined
        localStorage.getItem("token") === "null" // Check if token is a string literal "null"
      ) {
        return;
      }

      // If a token exists, check the user's authentication status
      try {
        const status = await isUserLoggedIn(localStorage.getItem("token")); // Check if the token is valid

        // If the user is logged in successfully (status 200), set them as an admin
        if (status.status === 200) {
          setIsAdmin(true);
        } else {
          // If the status is anything other than 200, log the user out
          logout();
        }
      } catch (err) {
        // If an error occurs during the authentication check, log the user out
        logout();
      }
    };

    // Call the function to check the user's login status
    checkIsUserLoggedIn();

    // Add dependencies: This ensures the effect only re-runs if i18n, isUserLoggedIn, or logout changes
  }, [i18n, isUserLoggedIn, logout]);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setExpanded(false);
    }
  });

  // see the style changes while the navbar is collapsing
  useEffect(() => {
    const pt = "pt-3";
    const pb = "pb-3";
    if (expanded) {
      const navbarNav = document.getElementById("navbar-nav");
      navbarNav.style.fontSize = "32px";
      navbarNav.style.textTransform = "uppercase";
      navbarNav.style.height = `calc(100vh - ${global.UTILS.NAV_HEIGHT})`;

      const columnContainer = document.getElementById("column-container");
      columnContainer.classList.remove("text-center");
      columnContainer.classList.remove("gap-1");

      const mainContainer = document.getElementById("main-container");
      mainContainer.classList.add("justify-content-center");
      mainContainer.classList.remove("align-items-center");

      const liEvents = document.getElementById("li-events");
      liEvents.classList.add("border-bottom");
      liEvents.classList.add(pt);
      liEvents.classList.add(pb);
      liEvents.classList.remove("justify-content-center");
      liEvents.classList.add("justify-content-between");
      const supEvents = document.getElementById("sup-events");
      if (supEvents) supEvents.style.opacity = 1;
      const faAngleRightEvents = document.getElementById(
        "fa-angle-right-events"
      );
      faAngleRightEvents.style.rotate = "0deg";
      faAngleRightEvents.style.paddingRight = "10px";
      const eventsButton = document.getElementById("events-button");
      eventsButton.style.display = "flex";
      eventsButton.style.justifyContent = "space-between";
      eventsButton.style.width = "100%";

      const liPartners = document.getElementById("li-partners");
      liPartners.classList.add("border-bottom");
      liPartners.classList.add(pt);
      liPartners.classList.add(pb);
      liPartners.classList.remove("justify-content-center");

      const liTeam = document.getElementById("li-team");
      liTeam.classList.add("border-bottom");
      liTeam.classList.add(pt);
      liTeam.classList.add(pb);
      liTeam.classList.remove("justify-content-center");

      const liBlog = document.getElementById("li-blog");
      liBlog.classList.add("border-bottom");
      liBlog.classList.add(pt);
      liBlog.classList.add(pb);
      liBlog.classList.remove("justify-content-center");

      const liAbout = document.getElementById("li-about");
      liAbout.classList.add("border-bottom");
      liAbout.classList.add(pt);
      liAbout.classList.add(pb);
      liAbout.classList.remove("justify-content-center");
      liAbout.classList.add("justify-content-between");

      const faAngleRightAbout = document.getElementById("fa-angle-right-about");
      faAngleRightAbout.style.rotate = "0deg";
      faAngleRightAbout.style.paddingRight = "10px";

      const aboutButton = document.getElementById("about-button");
      aboutButton.style.display = "flex";
      aboutButton.style.justifyContent = "space-between";
      aboutButton.style.width = "100%";

      const sups = document.getElementsByClassName("sup-elem");
      if (sups) {
        for (let i = 0; i < sups.length; i++) {
          sups[i].style.opacity = 1;
        }
      }
    } else {
      document.getElementById("navbar-overlay-events").style.right = "-100%";
      document.getElementById("navbar-overlay-events").style.opacity = 0;
      document.getElementById("navbar-overlay-about").style.right = "-100%";
      document.getElementById("navbar-overlay-about").style.opacity = 0;

      //wait 0.3s before removing the classes
      setTimeout(() => {
        const navbarNav = document.getElementById("navbar-nav");
        navbarNav.style.fontSize = "16px";
        navbarNav.style.textTransform = "none";
        navbarNav.style.height = "auto";

        const columnContainer = document.getElementById("column-container");
        columnContainer.classList.add("text-center");
        columnContainer.classList.add("gap-1");

        const mainContainer = document.getElementById("main-container");
        mainContainer.classList.add("align-items-center");

        const liEvents = document.getElementById("li-events");
        liEvents.classList.remove("border-bottom");
        liEvents.classList.remove(pt);
        liEvents.classList.remove(pb);
        liEvents.classList.add("justify-content-center");
        liEvents.classList.remove("justify-content-between");
        const supEvents = document.getElementById("sup-events");
        if (supEvents) supEvents.style.opacity = 0;

        const faAngleRightEvents = document.getElementById(
          "fa-angle-right-events"
        );
        faAngleRightEvents.style.rotate = "90deg";
        faAngleRightEvents.style.paddingRight = "0px";
        const eventsButton = document.getElementById("events-button");
        eventsButton.style.display = "block";
        eventsButton.style.justifyContent = "center";
        eventsButton.style.width = "auto";

        const liPartners = document.getElementById("li-partners");
        liPartners.classList.remove("border-bottom");
        liPartners.classList.remove(pt);
        liPartners.classList.remove(pb);
        liPartners.classList.add("justify-content-center");

        const liTeam = document.getElementById("li-team");
        liTeam.classList.remove("border-bottom");
        liTeam.classList.remove(pt);
        liTeam.classList.remove(pb);
        liTeam.classList.add("justify-content-center");

        const liBlog = document.getElementById("li-blog");
        liBlog.classList.remove("border-bottom");
        liBlog.classList.remove(pt);
        liBlog.classList.remove(pb);
        liBlog.classList.add("justify-content-center");

        const liAbout = document.getElementById("li-about");
        liAbout.classList.remove("border-bottom");
        liAbout.classList.remove(pt);
        liAbout.classList.remove(pb);
        liAbout.classList.add("justify-content-center");
        liAbout.classList.remove("justify-content-between");

        const faAngleRightAbout = document.getElementById(
          "fa-angle-right-about"
        );
        faAngleRightAbout.style.rotate = "90deg";
        faAngleRightAbout.style.paddingRight = "0px";

        const aboutButton = document.getElementById("about-button");
        aboutButton.style.display = "block";
        aboutButton.style.justifyContent = "center";
        aboutButton.style.width = "auto";
      }, 300);
    }
  }, [expanded]);

  const onEventsClick = () => {
    document.getElementById("navbar-overlay-events").style.right = "0";
    document.getElementById("navbar-overlay-events").style.opacity = 1;
  };

  const onBackEventsClick = () => {
    document.getElementById("navbar-overlay-events").style.right = "-100vw";
  };

  const onAboutClick = () => {
    document.getElementById("navbar-overlay-about").style.right = "0";
    document.getElementById("navbar-overlay-about").style.opacity = 1;
  };

  const onBackAboutClick = () => {
    document.getElementById("navbar-overlay-about").style.right = "-100vw";
  };

  const supStyle = {
    marginLeft: "2px",
    color: "lightgrey",
    fontSize: "18px",
    opacity: 0,
  };

  return (
    <>
      <Container
        id="navbar-overlay-events"
        style={{
          width: "100vw",
          minWidth: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          backgroundColor: "black",
          position: "fixed",
          top: global.UTILS.NAV_HEIGHT,
          right: "-100%",
          zIndex: 100,
          fontFamily: "Fira Sans Extra Condensed",
          fontSize: "medium",
          transition: "all 0.4s cubic-bezier(.27,1.08,.24,1)",
        }}
      >
        <Row className="ps-4">
          <Col className="d-flex row">
            <ul className="navbar-nav" style={{ fontSize: "32px" }}>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-1 pb-3 border-bottom">
                <a
                  className="navbar-submenu-edition-item font-600"
                  role="button"
                  aria-expanded="false"
                  style={{ fontSize: "18px", color: "grey" }}
                  onClick={() => onBackEventsClick()}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Back
                </a>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
                <Link
                  className="navbar-submenu-edition-item font-600"
                  to="/eventi/countdown2024"
                  role="button"
                  aria-expanded="false"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("countdown2024");
                  }}
                >
                  COUNTDOWN{" "}
                  <sup className="sup-elem" style={supStyle}>
                    2024
                  </sup>
                </Link>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
                <Link
                  className="navbar-submenu-edition-item font-600"
                  ref={back_to_zero}
                  to="/eventi/edizione2023"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("back_to_zero");
                  }}
                >
                  BACK TO ZERO{" "}
                  <sup className="sup-elem" style={supStyle}>
                    2023
                  </sup>
                </Link>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
                <Link
                  ref={awards23}
                  className="navbar-submenu-edition-item font-600"
                  to="/eventi/awards2023"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("awards23");
                  }}
                >
                  AWARDS{" "}
                  <sup className="sup-elem" style={supStyle}>
                    2023
                  </sup>
                </Link>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom">
                <Link
                  ref={act}
                  className="navbar-submenu-edition-item font-600"
                  to="/eventi/edizione2022"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("act");
                  }}
                >
                  ACT: Lead The Change{" "}
                  <sup className="sup-elem" style={supStyle}>
                    2022
                  </sup>
                </Link>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom">
                <Link
                  ref={awards22}
                  className="navbar-submenu-edition-item font-600"
                  to="/eventi/awards2022"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("awards22");
                  }}
                  id="awards2022"
                >
                  Awards{" "}
                  <sup className="sup-elem" style={supStyle}>
                    2022
                  </sup>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container
        id="navbar-overlay-about"
        style={{
          width: "100vw",
          minWidth: "100vw",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          backgroundColor: "black",
          position: "fixed",
          top: global.UTILS.NAV_HEIGHT,
          right: "-100%",
          zIndex: 100,
          fontFamily: "Fira Sans Extra Condensed",
          fontSize: "medium",
          transition: "all 0.4s cubic-bezier(.27,1.08,.24,1)",
        }}
      >
        <Row className="ps-4">
          <Col className="d-flex row">
            <ul className="navbar-nav" style={{ fontSize: "32px" }}>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-1 pb-3 border-bottom">
                <a
                  className="navbar-submenu-edition-item font-600"
                  role="button"
                  aria-expanded="false"
                  style={{ fontSize: "18px", color: "grey" }}
                  onClick={() => onBackAboutClick()}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ marginRight: "5px" }}
                  />{" "}
                  Back
                </a>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
                <Link
                  className="navbar-submenu-edition-item font-600"
                  to="/mission&vision"
                  role="button"
                  aria-expanded="false"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("mission_and_vision");
                  }}
                >
                  MISSION AND VISION
                </Link>
              </li>
              <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
                <Link
                  className="navbar-submenu-edition-item font-600"
                  ref={back_to_zero}
                  to="/location"
                  onClick={() => {
                    setExpanded(false);
                    selectOption("location");
                  }}
                >
                  LOCATION
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/**
       *
       *
       *
       * Navbar
       *
       *
       *
       */}
      <Navbar
        ref={navRef}
        className="navbar navbar-white bg-black static-top"
        expand={"lg"}
        expanded={expanded}
        style={{
          fontFamily: "Fira Sans Extra Condensed",
          fontSize: "medium",
          position:
            windowSize > global.UTILS.MOBILE_WIDTH ? "absolute" : "fixed",
          zIndex: 99,
          width: "100vw",
          top: 0,
          paddingTop: "18px",
          paddingBottom: "18px",
        }}
      >
        <Container fluid>
          <Link
            to="/"
            onClick={() => {
              selectOption(undefined);
            }}
          >
            <LazyLoadImage
              src={Image}
              alt="LogoTedx"
              width=""
              height="40"
              onClick={() => setExpanded(false)}
            />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
            style={{ border: 0, fontSize: "24px" }}
          />
          <Navbar.Collapse>
            <Row className={expanded ? "" : "w-100"}>
              <ul
                className={`navbar-nav d-flex p-0 m-0 ${
                  windowSize < global.UTILS.TABLET_WIDTH && "pt-2 ps-4 pe-4"
                }`}
                id="navbar-nav"
              >
                <Col
                  id="main-container"
                  className="col-lg-10 col-md-12 col-sm-12 d-flex align-items-center"
                >
                  <Container>
                    <Row>
                      <Col
                        id="column-container"
                        className="d-flex justify-content-center row m-0 p-2"
                      >
                        <li
                          className="nav-item dropdown col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
                          id="li-events"
                        >
                          <div
                            className="navbar-submenu-edition-item font-600"
                            data-bs-toggle={expanded ? "" : "dropdown"}
                            role="button"
                            aria-expanded="false"
                            onClick={() => (expanded ? onEventsClick() : {})}
                            id="events-button"
                          >
                            <a style={{ borderRadius: "5px" }}>
                              {t("navbar.events")}
                            </a>
                            <FontAwesomeIcon
                              className="fa-angle-right"
                              id="fa-angle-right-events"
                              icon={faAngleRight}
                              style={{ rotate: "90deg", marginLeft: "8px" }}
                            />
                          </div>

                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black p-1"
                            style={{
                              backgroundColor: "black",
                              borderRadius: "15px",
                            }}
                          >
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">
                              2024
                            </span>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3 "
                                to="/eventi/countdown2024"
                                ref={countdown2024}
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("countdown2024");
                                }}
                              >
                                Countdown
                              </Link>
                            </li>
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">
                              2023
                            </span>
                            <li>
                              <Link
                                ref={back_to_zero}
                                className="navbar-submenu-edition-item ms-3"
                                to="/eventi/edizione2023"
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("back_to_zero");
                                }}
                              >
                                Back To Zero
                              </Link>
                            </li>
                            <li>
                              <Link
                                ref={awards23}
                                className="navbar-submenu-edition-item ms-3"
                                to="/eventi/awards2023"
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("awards23");
                                }}
                              >
                                Awards
                              </Link>
                            </li>
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">
                              2022
                            </span>
                            <li>
                              <Link
                                ref={act}
                                className="navbar-submenu-edition-item ms-3"
                                to="/eventi/edizione2022"
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("act");
                                }}
                              >
                                ACT: Lead The Change
                              </Link>
                            </li>
                            <li>
                              <Link
                                ref={awards22}
                                className="navbar-submenu-edition-item ms-3"
                                to="/eventi/awards2022"
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("awards22");
                                }}
                                id="awards2022"
                              >
                                Awards
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li
                          className="nav-item col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
                          id="li-partners"
                        >
                          <Link
                            ref={partners}
                            className="navbar-submenu-edition-item font-600"
                            to="/partners"
                            style={{ borderRadius: "5px" }}
                            onClick={() => {
                              setExpanded(false);
                              selectOption("partners");
                            }}
                          >
                            {t("navbar.partners")}
                          </Link>
                        </li>

                        <li
                          className="nav-item col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
                          id="li-team"
                        >
                          <Link
                            ref={team}
                            className="navbar-submenu-edition-item font-600"
                            to="/team"
                            style={{ borderRadius: "5px" }}
                            onClick={() => {
                              setExpanded(false);
                              selectOption("team");
                            }}
                            id="team"
                          >
                            {t("navbar.team")}
                          </Link>
                        </li>

                        <li
                          className="nav-item col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
                          id="li-blog"
                        >
                          <Link
                            ref={blog}
                            className="navbar-submenu-edition-item font-600"
                            to="/blog"
                            style={{ borderRadius: "5px" }}
                            onClick={() => {
                              setExpanded(false);
                              selectOption("blog");
                            }}
                            id="blog"
                          >
                            {t("navbar.blog")}
                          </Link>
                        </li>

                        <li
                          className="nav-item dropdown col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
                          id="li-about"
                        >
                          <div
                            className="navbar-submenu-edition-item font-600"
                            data-bs-toggle={expanded ? "" : "dropdown"}
                            role="button"
                            onClick={() => (expanded ? onAboutClick() : {})}
                            id="about-button"
                          >
                            <a style={{ borderRadius: "5px" }}>
                              {t("navbar.about_us")}
                            </a>
                            <FontAwesomeIcon
                              className="fa-angle-right"
                              id="fa-angle-right-about"
                              icon={faAngleRight}
                              style={{ rotate: "90deg", marginLeft: "8px" }}
                            />
                          </div>

                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black p-1"
                            style={{
                              borderRadius: "5px",
                            }}
                          >
                            <li className="mt-2">
                              <Link
                                ref={mission_and_vision}
                                className="navbar-submenu-edition-item ms-2"
                                to="/mission&vision"
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("mission_and_vision");
                                }}
                                id="mission_and_vision"
                              >
                                {t("navbar.mission_and_vision")}
                              </Link>
                            </li>
                            <li className="mt-2 mb-1">
                              <Link
                                ref={location}
                                className="navbar-submenu-edition-item ms-2"
                                to="/location"
                                onClick={() => {
                                  setExpanded(false);
                                  selectOption("location");
                                }}
                                id="location"
                              >
                                {t("navbar.location")}
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col className="col-lg-2 col-md-12 col-sm-12 col-12">
                  <Row className="mt-2 mb-2 d-flex justify-content-center">
                    <Col className="col-lg-3 col-md-3 col-sm-6 col-6 text-center d-flex justify-content-start align-items-center">
                      <li
                        className="nav-item dropdown "
                        data-bs-toggle="dropdown"
                      >
                        <a
                          className="navbar-submenu-edition-item d-flex align-items-center  justify-content-start"
                          role="button"
                          aria-expanded="false"
                          onClick={() => {}}
                        >
                          {i18n.language === "it" ? "IT" : "EN"}
                          <img
                            className="rounded ms-1 me-1"
                            src={
                              i18n.language === "it" ? ItalianFlag : EnglishFlag
                            }
                            alt="flags"
                            width="20"
                            height="15"
                          />
                          &#709;
                        </a>
                        {
                          <ul
                            className="dropdown-menu dropdown-menu-new p-0"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.0)",
                              border: "none",
                            }}
                            onClick={() => {
                              changeLanguage();
                            }}
                          >
                            <li className="navbar-submenu-edition-item d-flex align-items-center justify-content-start">
                              {i18n.language === "it" ? "EN" : "IT"}
                              <img
                                className="rounded ms-1"
                                src={
                                  i18n.language === "it"
                                    ? EnglishFlag
                                    : ItalianFlag
                                }
                                alt=""
                                width="20"
                                height="15"
                              />
                            </li>
                          </ul>
                        }
                      </li>
                    </Col>

                    <Col className="col-lg-9 col-md-3 col-sm-6 col-6 text-center ">
                      <Button
                        style={{
                          backgroundColor: global.COLORS.ROSSO_TED_2023,
                          borderColor: "red",
                          borderRadius: "30px",
                          fontWeight: "bold",
                          width: "90%",
                          marginLeft: "24px",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = "red";
                        }}
                        onClick={() => {
                          setExpanded(false);
                          window.location.href = "/Newsletter";
                        }}
                      >
                        Join Us
                      </Button>
                    </Col>
                  </Row>
                  {isAdmin && (
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle bg-success d-flex justify-content-center align-items-center text-white"
                        data-bs-toggle="dropdown"
                        role="button"
                      >
                        Menu Admin
                      </a>
                      <ul className="dropdown-menu bg-success">
                        <li>
                          <Link
                            className="nav-link text-white"
                            to="/write"
                            onClick={() => setExpanded(false)}
                          >
                            Nuovo articolo
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav-link text-white"
                            type="submit"
                            onClick={logout}
                            to="/"
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}
                </Col>
              </ul>
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
