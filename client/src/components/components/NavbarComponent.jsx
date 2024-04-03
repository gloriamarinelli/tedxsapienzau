import React, { useContext, useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import Image from "../images/logo-white.png";
import ItalianFlag from "../images/flags/it.png"
import EnglishFlag from "../images/flags/en.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "../../index.css";
import { Button, Row } from "react-bootstrap";

export default function NavbarComponent(props) {
  const [expanded, setExpanded] = useState(false);
  const { currentUser, currentToken } = useContext(AuthContext);
  const { logout, isUserLoggedIn } = useContext(AuthContext);
  const [windowSize, setWindowSize] = useState(props.windowSize);
  const [isAdmin, setIsAdmin] = useState(false);
  const [language, setlanguage] = useState(0);

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

  const navRef = useRef();

  return (
    <>
      <Navbar
        ref={navRef}
        className="navbar navbar-white bg-black static-top "
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
          <Link to="/">
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
                <Col className="col-lg-10 col-md-12 col-sm-11 d-flex align-items-center">
                  <Container>
                    <Row>
                      <Col className="text-center d-flex justify-content-center row">
                        <li className="nav-item dropdown d-flex justify-content-center col-lg-2 col-12 p-0">
                          <a
                            className="navbar-submenu-edition-item"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                            style={{ borderRadius: "5px" }}
                          >
                            Eventi &#709;
                          </a>

                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black p-1 mt-4"
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
                                className="navbar-submenu-edition-item-disabled ms-3 "
                                to="/"
                              >
                                Countdown
                              </Link>
                            </li>
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">
                              2023
                            </span>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/edizione2023"
                                onClick={() => setExpanded(false)}
                              >
                                Back To Zero
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/awards2023"
                                onClick={() => setExpanded(false)}
                              >
                                Awards
                              </Link>
                            </li>
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">
                              2022
                            </span>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/edizione2022"
                                onClick={() => setExpanded(false)}
                              >
                                ACT: Lead The Change
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/awards2022"
                                onClick={() => setExpanded(false)}
                              >
                                Awards
                              </Link>
                            </li>
                            <li>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item d-flex justify-content-center col-lg-1 col-12 p-0">
                          <Link
                            className="navbar-submenu-edition-item"
                            to="/partners"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Partners
                          </Link>
                        </li>

                        <li className="nav-item d-flex justify-content-center col-lg-1 col-12 p-0">
                          <Link
                            className="navbar-submenu-edition-item"
                            to="/team"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Team
                          </Link>
                        </li>

                        <li className="nav-item d-flex justify-content-center col-lg-1 col-12 p-0">
                          <Link
                            className="navbar-submenu-edition-item"
                            to="/blog"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Blog
                          </Link>
                        </li>

                        <li className="nav-item dropdown d-flex justify-content-center col-lg-2 col-sm-2 col-12 p-0">
                          <a
                            className="navbar-submenu-edition-item"
                            data-bs-toggle="dropdown"
                            role="button"
                            style={{ borderRadius: "5px" }}
                          >
                            Chi Siamo &#709;
                          </a>

                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black p-2 ms-2 me-2 mt-4"
                            style={{
                              backgroundColor: "black",
                              borderRadius: "15px",
                            }}
                          >
                            <li className="navbar-submenu-edition-item">
                              <Link
                                className="navbar-submenu-edition-item ms-4 me-4"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                Mission and Vision
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-4 me-4"
                                to="/parlanodinoi"
                                onClick={() => setExpanded(false)}
                              >
                                Parlano di Noi
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-4 me-4"
                                to="/location"
                                onClick={() => setExpanded(false)}
                              >
                                Location
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col className="col-lg-2 col-md-12 col-sm-12 col-11">
                  <Container className="">
                    <Row className="mt-2 mb-2 d-flex justify-content-center">
                      <Col className="col-lg-3 col-md-3 col-sm-3 col-4 text-center d-flex justify-content-start align-items-center">
                      <li className="nav-item dropdown">
                          <a
                            className="navbar-submenu-edition-item d-flex align-items-center  justify-content-start"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                          >
                             IT <img className="rounded ms-1 me-1" src={ItalianFlag} alt="" width="20" height="15" /> &#709;
                          </a>

                          <ul
                            className="dropdown-menu dropdown-menu-new p-0"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.0)",
                              border: "none"
                            }}
                            
                          >
                            <li className="navbar-submenu-edition-item d-flex align-items-center justify-content-start">
                                 EN <img className="rounded ms-1" src={EnglishFlag} alt="" width="20" height="15" />
                            </li>

                          </ul>
                        </li>
                      </Col>

                      <Col className="col-lg-9 col-md-3 col-sm-3 col-4 text-center ">
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
                  </Container>
                </Col>

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
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
