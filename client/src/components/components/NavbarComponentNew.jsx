import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import {
  faArrowLeft,
  faAngleRight,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import global from "../../resources/global.json";
import ItalianFlag from "../images/flags/it.png";
import EnglishFlag from "../images/flags/en.png";
import Logo from "../images/logo-white.png";

import "../../resources/styles/mynavbar.css";
import "../../index.css";

export default function NavbarComponentNew() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function changeLanguage() {
    if (i18n.language === "en") {
      i18n.changeLanguage("it");
      localStorage.setItem("language", "it");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  }

  const onEventsClick = () => {
    document.getElementById("events-menu").style.right = 0;
    document.getElementById("events-menu").style.opacity = 1;
  };

  const onBackEventsClick = () => {
    document.getElementById("events-menu").style.right = "-100vw";
  };

  const onAboutClick = () => {
    document.getElementById("aboutus-menu").style.right = 0;
    document.getElementById("aboutus-menu").style.opacity = 1;
  };

  const onBackAboutClick = () => {
    document.getElementById("aboutus-menu").style.right = "-100vw";
  };

  const supStyle = {
    marginLeft: "2px",
    color: "lightgrey",
    fontSize: "18px",
    opacity: 0,
  };

  if (windowSize > 992) {
    /**
     *
     *
     * DESKTOP NAVBAR
     *
     *
     */
    return (
      <nav
        className="my-navbar"
        style={{
          height: global.UTILS.NAV_HEIGHT,
          position: "absolute",
        }}
      >
        <Link to="/">
          <LazyLoadImage src={Logo} alt="LogoTedx" width="" height="40" />
        </Link>
        <section id="middle-section" className="navbar-middle-section">
          <li
            className="nav-item dropdown col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
            id="li-events"
          >
            <div
              className="navbar-submenu-edition-item font-600"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
              id="events-button"
            >
              <a style={{ borderRadius: "5px" }}>{t("navbar.events")}</a>
              <FontAwesomeIcon
                className="fa-angle-right"
                id="fa-angle-right-events"
                icon={faAngleRight}
                style={{ rotate: "90deg", marginLeft: "8px" }}
              />
            </div>

            <ul
              className="dropdown-menu bg-black p-1"
              style={{
                backgroundColor: "black",
                borderRadius: "15px",
              }}
            >
              <span className="ms-3 mb-3 navbar-submenu-edition-year">
                2025
              </span>
              <li>
                <Link
                  // ref={awards24}
                  className="navbar-submenu-edition-item ms-3"
                  to="/eventi/paradoxa2025"
                >
                  Para Doxa
                </Link>
              </li>
              <span className="ms-3 mb-3 navbar-submenu-edition-year">
                2024
              </span>
              <li>
                <Link
                  // ref={awards24}
                  className="navbar-submenu-edition-item ms-3"
                  to="/eventi/awards2024"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  className="navbar-submenu-edition-item ms-3 "
                  to="/eventi/countdown2024"
                  // ref={countdown2024}
                >
                  Countdown
                </Link>
              </li>
              <span className="ms-3 mb-3 navbar-submenu-edition-year">
                2023
              </span>
              <li>
                <Link
                  // ref={back_to_zero}
                  className="navbar-submenu-edition-item ms-3"
                  to="/eventi/edizione2023"
                >
                  Back To Zero
                </Link>
              </li>
              <li>
                <Link
                  // ref={awards23}
                  className="navbar-submenu-edition-item ms-3"
                  to="/eventi/awards2023"
                >
                  Awards
                </Link>
              </li>
              <span className="ms-3 mb-3 navbar-submenu-edition-year">
                2022
              </span>
              <li>
                <Link
                  // ref={act}
                  className="navbar-submenu-edition-item ms-3"
                  to="/eventi/edizione2022"
                >
                  ACT: Lead The Change
                </Link>
              </li>
              <li>
                <Link
                  // ref={awards22}
                  className="navbar-submenu-edition-item ms-3"
                  to="/eventi/awards2022"
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
              // ref={partners}
              className="navbar-submenu-edition-item font-600"
              to="/sponsors"
              style={{ borderRadius: "5px" }}
            >
              {t("navbar.partners")}
            </Link>
          </li>

          {/* <li
            className="nav-item col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
            id="li-team"
          >
            <Link
              // ref={team}
              className="navbar-submenu-edition-item font-600"
              to="/team"
              style={{ borderRadius: "5px" }}
              id="team"
            >
              {t("navbar.team")}
            </Link>
          </li> */}

          {/* <li
            className="nav-item col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
            id="li-blog"
          >
            <Link
              // ref={blog}
              className="navbar-submenu-edition-item font-600"
              to="/blog"
              style={{ borderRadius: "5px" }}
              id="blog"
            >
              {t("navbar.blog")}
            </Link>
          </li> */}

          <li
            className="nav-item dropdown col-xl-2 col-lg-2 col-12 p-0 d-flex align-items-center"
            id="li-about"
          >
            <div
              className="navbar-submenu-edition-item font-600"
              data-bs-toggle="dropdown"
              role="button"
              id="about-button"
            >
              <a style={{ borderRadius: "5px" }}>{t("navbar.about_us")}</a>
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
                  // ref={mission_and_vision}
                  className="navbar-submenu-edition-item ms-2"
                  to="/mission&vision"
                  id="mission_and_vision"
                >
                  {t("navbar.mission_and_vision")}
                </Link>
              </li>
              <li className="mt-2 mb-1">
                <Link
                  // ref={location}
                  className="navbar-submenu-edition-item ms-2"
                  to="/location"
                  id="location"
                >
                  {t("navbar.location")}
                </Link>
              </li>
              <li className="mt-2 mb-1">
                <Link
                  // ref={sapienzau}
                  className="navbar-submenu-edition-item ms-2"
                  to="/sapienzau"
                  id="location"
                >
                  {t("navbar.sapienzau")}
                </Link>
              </li>
            </ul>
          </li>
        </section>
        <section id="right-section" className="navbar-tools-section">
          <li className="nav-item dropdown " data-bs-toggle="dropdown">
            <a
              className="navbar-submenu-edition-item d-flex align-items-center  justify-content-start"
              role="button"
              aria-expanded="false"
            >
              {i18n.language === "it" ? "IT" : "EN"}
              <img
                className="rounded ms-1 me-1"
                src={i18n.language === "it" ? ItalianFlag : EnglishFlag}
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
                    src={i18n.language === "it" ? EnglishFlag : ItalianFlag}
                    alt=""
                    width="20"
                    height="15"
                  />
                </li>
              </ul>
            }

            <div
              className="primary-button"
              style={{ marginLeft: "24px" }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "red";
              }}
              onClick={() => {
                window.location.href = "/Newsletter";
              }}
            >
              JOIN US
            </div>
          </li>
        </section>
      </nav>
    );
  } else {
    /**
     *
     *
     * MOBILE NAVBAR
     *
     *
     */
    return (
      <>
        <nav
          className="my-navbar-mobile"
          style={{
            height: global.UTILS.NAV_HEIGHT,
            position: "fixed",
          }}
        >
          <Link
            to="/"
            onClick={() => {
              setExpanded(false);
              onBackEventsClick();
            }}
          >
            <LazyLoadImage src={Logo} alt="LogoTedx" width="" height="40" />
          </Link>

          <label
            className="burger"
            onClick={(e) => {
              e.preventDefault();
              setExpanded(!expanded);
            }}
          >
            <input type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </nav>
        <section
          id="mobile-menu"
          style={{
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            overflowY: "scroll",
            position: "fixed",
            top: expanded ? global.UTILS.NAV_HEIGHT : "-100vh",
          }}
        >
          <h1 onClick={() => onEventsClick()}>
            <a>{t("navbar.events")}</a>
            <FontAwesomeIcon
              className="fa-angle-right"
              id="fa-angle-right-events"
              icon={faAngleRight}
            />
          </h1>
          <h1>
            <Link
              className="text-decoration-none text-white"
              to="/sponsors"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.partners")}
            </Link>
          </h1>
          <h1>
            <Link
              className="text-decoration-none text-white"
              to="/team"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.team")}
            </Link>
          </h1>
          <h1>
            <Link
              className="text-decoration-none text-white"
              to="/blog"
              onClick={() => setExpanded(false)}
            >
              {t("navbar.blog")}
            </Link>
          </h1>
          <h1 onClick={() => onAboutClick()}>
            <a>{t("navbar.about_us")}</a>
            <FontAwesomeIcon
              className="fa-angle-right"
              id="fa-angle-right-events"
              icon={faAngleRight}
            />
          </h1>
          <h1 onClick={() => changeLanguage()}>
            {i18n.language === "it" ? "Italiano🇮🇹" : "English🇬🇧"}
            <FontAwesomeIcon icon={faGlobe} />
          </h1>
        </section>
        <section
          id="events-menu"
          className="side-menu"
          style={{
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            overflowY: "scroll",
            position: "fixed",
            right: "-100vw",
            top: global.UTILS.NAV_HEIGHT,
          }}
        >
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
                />
                Back
              </a>
            </li>
            <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
              <Link
                className="navbar-submenu-edition-item font-600"
                to="/eventi/paradoxa2025"
                role="button"
                aria-expanded="false"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
                }}
              >
                PARA DOXA
                <sup className="sup-elem" style={supStyle}>
                  2025
                </sup>
              </Link>
            </li>
            <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
              <Link
                className="navbar-submenu-edition-item font-600"
                to="/eventi/awards2024"
                role="button"
                aria-expanded="false"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
                }}
              >
                AWARDS
                <sup className="sup-elem" style={supStyle}>
                  2024
                </sup>
              </Link>
            </li>
            <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
              <Link
                className="navbar-submenu-edition-item font-600"
                to="/eventi/countdown2024"
                role="button"
                aria-expanded="false"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
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
                to="/eventi/edizione2023"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
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
                className="navbar-submenu-edition-item font-600"
                to="/eventi/awards2023"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
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
                className="navbar-submenu-edition-item font-600"
                to="/eventi/edizione2022"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
                }}
              >
                ACT: Lead The Change
                <sup className="sup-elem" style={supStyle}>
                  2022
                </sup>
              </Link>
            </li>
            <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom">
              <Link
                className="navbar-submenu-edition-item font-600"
                to="/eventi/awards2022"
                onClick={() => {
                  setExpanded(false);
                  onBackEventsClick();
                }}
                id="awards2022"
              >
                Awards
                <sup className="sup-elem" style={supStyle}>
                  2022
                </sup>
              </Link>
            </li>
          </ul>
        </section>
        <section
          id="aboutus-menu"
          className="side-menu"
          style={{
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            overflowY: "scroll",
            position: "fixed",
            right: "-100vw",
            top: global.UTILS.NAV_HEIGHT,
          }}
        >
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
                  onBackAboutClick();
                }}
              >
                MISSION AND VISION
              </Link>
            </li>
            <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
              <Link
                className="navbar-submenu-edition-item font-600"
                to="/location"
                onClick={() => {
                  setExpanded(false);
                  onBackAboutClick();
                }}
              >
                LOCATION
              </Link>
            </li>
            <li className="nav-item col-xl-1 col-lg-2 col-12 p-0 pt-3 pb-3 border-bottom ">
              <Link
                className="navbar-submenu-edition-item font-600"
                to="/sapienzau"
                onClick={() => {
                  setExpanded(false);
                  onBackAboutClick();
                }}
              >
                ASSOCIAZIONE SAPIENZAU
              </Link>
            </li>
          </ul>
        </section>
      </>
    );
  }
}
