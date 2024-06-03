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

import "../../index.css";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { Button, Row } from "react-bootstrap";

export default function NavbarComponent(props) {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const { currentUser, currentToken } = useContext(AuthContext);
  const { logout, isUserLoggedIn } = useContext(AuthContext);
  const [windowSize, setWindowSize] = useState(props.windowSize);
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
    if (i18n.language === "en") i18n.changeLanguage("it");
    else i18n.changeLanguage("en");
  }

  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === "null"
    ) {
      return;
    } else {
      const checkIsUserLoggedIn = async () => {
        const status = await isUserLoggedIn(localStorage.getItem("token"));
        return status;
      };

      let status = checkIsUserLoggedIn().catch((err) => logout());
      status.then((res) => {
        if (res.status === 200) {
          console.log(res);
          setIsAdmin(true);
        } else {
          console.log(res);
          logout();
        }
      });
    }
  }, []);

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar navbar-white bg-black static-top"
        expand={"lg"}
        expanded={expanded}
        style={{
          fontFamily: "Fira Sans Extra Condensed",
          fontSize: "medium",
          position: "absolute",
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
            <LazyLoadImage src={Image} alt="LogoTedx" width="" height="45" />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse>
            <Row className="w-100 ps-5">
              <ul
                className={`navbar-nav ${
                  windowSize < global.UTILS.TABLET_WIDTH && "pt-2"
                }`}
                style={{ gap: "10px" }}
              >
                <Col className="col-lg-10 col-md-12 col-sm-12 d-flex align-items-center">
                  <Container>
                    <Row>
                      <Col className="text-center d-flex justify-content-center row gap-1">
                        <li className="nav-item dropdown col-xl-1 col-lg-2 col-md-4 col-12 p-0">
                          <a
                            className="navbar-submenu-edition-item font-600"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                            style={{ borderRadius: "5px" }}
                          >
                            {t("events")} &#709;
                          </a>

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

                        <li className="nav-item d-flex justify-content-center col-xl-1 col-lg-2 col-12 p-0">
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
                            {t("partners")}
                          </Link>
                        </li>

                        <li className="nav-item d-flex justify-content-center col-xl-1 col-lg-2 col-12 p-0">
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
                            {t("team")}
                          </Link>
                        </li>

                        <li className="nav-item d-flex justify-content-center col-xl-1 col-lg-2 col-12 p-0">
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
                            {t("blog")}
                          </Link>
                        </li>
                        {/*
                                              <li class="nav-item dropdown col-xl-1 col-lg-2 col-sm-2 col-12 p-0">
                                  <a class="navbar-submenu-edition-item dropdown-toggle font-600" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  {t("about_us")}
                                  </a>
                                  <ul class="dropdown-menu dropdown-menu-dark bg-black text-center">
                                    <li><a class="dropdown-item" href="/mission&vision">Mission and vision</a></li>
                                    <li><a class="dropdown-item" href="#">Location</a></li>
                                  </ul>
                                </li>
                                */}

                        <li className="nav-item dropdown col-xl-1 col-lg-2 col-sm-2 col-md-2 col-12 p-0">
                          <a
                            className="navbar-submenu-edition-item font-600"
                            data-bs-toggle="dropdown"
                            role="button"
                            style={{ borderRadius: "5px" }}
                          >
                            {t("about_us")} &#709;
                          </a>

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
                                {t("mission_and_vision")}
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
                                {t("location")}
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
                      <li className="nav-item dropdown">
                        {/*data-bs-toggle="dropdown"*/}
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
                            width="20"
                            height="15"
                          />
                          {/*&#709;*/}
                        </a>
                        {/*
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
                              </ul> */}
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
                          window.location.href = "/join";
                        }}
                      >
                        Join us
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
                        Menù Admin
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
