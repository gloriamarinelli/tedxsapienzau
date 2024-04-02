import React, { useContext, useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import Image from "../images/logo-white.png";
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
                <Col className="col-lg-10 col-md-12 col-sm-12  col-xs-12 d-flex align-items-center">
                  <Container>
                    <Row className="mt-2 mb-2">
                      <Col className="text-center d-flex justify-content-center">
                        <li className="nav-item dropdown ps-2 pe-2 ">
                          <a
                            className="navbar-submenu-edition-item"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                            style={{ borderRadius: "5px" }}
                          >
                            Eventi v
                          </a>
                          
                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black p-3 mt-3"
                            style={{
                              backgroundColor: "black",
                              borderRadius: "15px",
                            }}
                          >
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">2023</span>
                            <li className="navbar-submenu-edition-item">
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/awards2023"
                                onClick={() => setExpanded(false)}
                              >
                                BACK TO ZERO
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                AWARDS
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                
                              </Link>
                            </li>
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">2022</span>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                ACT: LEAD THE CHANGE
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                AWARDS
                              </Link>
                            </li>
                            <li>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item ps-2 pe-2 d-flex align-items-center">
                          <Link
                            className="navbar-submenu-edition-item"
                            to="/partners"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Partners
                          </Link>
                        </li>

                        <li className="nav-item ps-2 pe-2 d-flex align-items-center">
                          <Link
                            className="navbar-submenu-edition-item"
                            to="/team"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Team
                          </Link>
                        </li>

                        <li className="nav-item ps-2 pe-2 d-flex align-items-center">
                          <Link
                            className="navbar-submenu-edition-item"
                            to="/blog"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Blog
                          </Link>
                        </li>
                        
                        <li className="nav-item dropdown ps-2 pe-2 ">
                          <a
                            className="navbar-submenu-edition-item"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                            style={{ borderRadius: "5px" }}
                          >
                            Chi Siamo v
                          </a>
                          
                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black p-3 mt-3"
                            style={{
                              backgroundColor: "black",
                              borderRadius: "15px",
                            }}
                          >
                            <span className="ms-3 mb-3 navbar-submenu-edition-year">2023</span>
                            <li className="navbar-submenu-edition-item">
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/awards2023"
                                onClick={() => setExpanded(false)}
                              >
                                mission and vision
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                location
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="navbar-submenu-edition-item ms-3"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                 parlano di noi
                              </Link>
                            </li>
                            <li>
                            </li>
                          </ul>
                        </li>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col className="col-lg-2 col-md-12 col-sm-12 col-xs-12 col-4">
                  <Container className="">
                    <Row className="mt-2 mb-2 d-flex justify-content-center">
                      <Col className="text-center col-lg-4 col-md-3 col-sm-4 col-xs-3 col-4">
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                            style={{ borderRadius: "5px" }}
                          >
                            IT
                          </a>
                          <ul className="dropdown-menu bg-black">
                            <li>
                              <Link
                                className="dropdown-item text-white"
                                onClick={() => setExpanded(false)}
                              >
                                EN
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </Col>

                      <Col className="text-center col-lg-8 col-md-3 col-sm-4 col-xs-3 col-8">
                        <Button
                          style={{
                            backgroundColor: "red",
                            borderColor: "red",
                            borderRadius: "30px",
                            width: "100%",
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