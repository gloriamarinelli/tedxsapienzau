import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Image from "../images/logo-black.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import "../../index.css";

export default function NavbarComponent(props) {
  const [expanded, setExpanded] = useState(false);
  const { currentUser, currentToken } = useContext(AuthContext);
  const { logout, isUserLoggedIn } = useContext(AuthContext);
  const [windowSize, setWindowSize] = useState(props.windowSize);
  const [isAdmin, setIsAdmin] = useState(false);

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

      let status = checkIsUserLoggedIn().catch((err) => console.log(err));
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

  const navRef = useRef();

  return (
    <>
      <div className="Navbar">
        {/**
         * SOCIAL HEADER
         */}
        {/* <nav>
          <div
            style={{
              height: global.SOCIAL_NAV_HEIGHT,
              width: "100%",
              display: "flex",
              backgroundColor: "#000",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div className="container-xl nav justify-content-end">
              <ul className="nav d-flex align-items-center justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="https://www.facebook.com/tedxsapienzau/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faFacebook}
                      size="xl"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faLinkedin}
                      size="xl"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/tedxsapienzau/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faInstagram}
                      size="xl"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faTiktok}
                      size="lg"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.youtube.com/@tedxsapienzau/playlists"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faYoutube}
                      size="lg"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/newsletterBrevo">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "white" }}
                      size="xl"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/**
         * NAVBAR
         */}

        <Navbar
          ref={navRef}
          className="navbar navbar-white bg-white static-top"
          expand={"lg"}
          expanded={expanded}
          style={{
            fontFamily: "GothamBold",
            position: "absolute",
            zIndex: 99,
            width: "100vw",
          }}
        >
          <Container>
            <Link to="/">
              <LazyLoadImage src={Image} alt="LogoTedx" width="" height="55" />
            </Link>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse>
              <ul
                className={`navbar-nav ms-auto ${
                  windowSize < global.UTILS.TABLET_WIDTH && "pt-2"
                }`}
              >
                <li className="nav-item ">
                  <Link
                    className="nav-link text-light"
                    to="/joinus"
                    style={{ borderRadius: "5px", backgroundColor: global.COLORS.ROSSO_TED, }}
                    onClick={() => setExpanded(false)}
                  >
                    Join Us
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-bg-light"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    style={{ borderRadius: "5px" }}
                  >
                    Past Events
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/workshop"
                        onClick={() => setExpanded(false)}
                      >
                        Workshop
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/rfw23"
                        onClick={() => setExpanded(false)}
                      >
                        Rome Future Week
                      </Link>
                    </li>
                  </ul>
                </li>

                {/*<li className="nav-item">
                  <Link to="/workshop" onClick={() => setExpanded(false)}>
                    <button
                      type="button"
                      className="btn"
                      style={{
                        backgroundColor: global.COLORS.CELESTE,
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Workshop{" "}
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-bg-light"
                    to="/rfw23"
                    style={{ borderRadius: "5px" }}
                    onClick={() => setExpanded(false)}
                  >
                    Rome Future Week
                  </Link>
                    </li>*/}

                <li className="nav-item">
                  <Link
                    className="nav-link text-bg-light"
                    to="/edizioni"
                    style={{ borderRadius: "5px" }}
                    onClick={() => setExpanded(false)}
                  >
                    Edizioni
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-bg-light"
                    to="/awards"
                    style={{ borderRadius: "5px" }}
                    onClick={() => setExpanded(false)}
                  >
                    Awards
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-bg-light"
                    to="/blog"
                    style={{ borderRadius: "5px" }}
                    onClick={() => setExpanded(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-bg-light"
                    to="/partners"
                    style={{ borderRadius: "5px" }}
                    onClick={() => setExpanded(false)}
                  >
                    Partners
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-bg-light"
                    to="/team"
                    style={{ borderRadius: "5px" }}
                    onClick={() => setExpanded(false)}
                  >
                    Team
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-bg-light"
                    data-bs-toggle="dropdown"
                    href="/location"
                    role="button"
                    aria-expanded="false"
                    style={{ borderRadius: "5px" }}
                  >
                    About us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/mission&vision"
                        onClick={() => setExpanded(false)}
                      >
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/location"
                        onClick={() => setExpanded(false)}
                      >
                        Location
                      </Link>
                    </li>
                    {/*
										<li>
											<Link
												className="dropdown-item text-bg-light"
												to="/"
												onClick={() => setExpanded(false)}
											>
												History
											</Link>
										</li>
										
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/sustainability"
                        onClick={() => setExpanded(false)}
                      >
                        Sustainability
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/parlanodinoi"
                        onClick={() => setExpanded(false)}
                      >
                        Parlano di Noi
                      </Link>
                  </li>*/}
                  </ul>
                </li>

                {isAdmin && (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle bg-success text-white"
                      data-bs-toggle="dropdown"
                      href=""
                      role="button"
                      aria-expanded="false"
                      style={{ borderRadius: "5px" }}
                    >
                      Menù Admin
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="nav-link bg-success text-white"
                          to="/write"
                          onClick={() => setExpanded(false)}
                        >
                          Nuovo articolo
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="nav-link bg-success text-white"
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
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
