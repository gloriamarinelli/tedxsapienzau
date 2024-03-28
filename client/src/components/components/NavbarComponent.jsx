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
        className="navbar navbar-white bg-black static-top"
        expand={"lg"}
        expanded={expanded}
        style={{
          fontFamily: "FiraSansRegular",
          fontSize: "medium",
          position: "absolute",
          zIndex: 99,
          width: "100vw",
          top: 0,
          paddingTop: "18px",
          paddingBottom: "18px",
        }}
      >
        <Container>
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
                <Col className="col-lg-9 col-md-12 col-sm-12  col-xs-12">
                  <Container>
                    <Row className="mt-2 mb-2">
                      <Col className="text-center justify-content-center d-flex ">
                        <li className="nav-item dropdown ps-2 pe-2 ">
                          <a
                            className="nav-link dropdown-toggle text-white"
                            data-bs-toggle="dropdown"
                            href="/location"
                            role="button"
                            aria-expanded="false"
                            style={{ borderRadius: "5px" }}
                          >
                            Edizioni
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-new bg-black"
                            style={{
                              backgroundColor: "black",
                              borderRadius: "5px",
                            }}
                          >
                            <li>
                              <Link
                                className="dropdown-item text-white"
                                to="/mission&vision"
                                onClick={() => setExpanded(false)}
                              >
                                Mission & Vision
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item text-white"
                                to="/location"
                                onClick={() => setExpanded(false)}
                              >
                                Location
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item ps-2 pe-2">
                          <Link
                            className="nav-link text-white "
                            to="/partners"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Partners
                          </Link>
                        </li>

                        <li className="nav-item ps-2 pe-2">
                          <Link
                            className="nav-link text-white"
                            to="/team"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Team
                          </Link>
                        </li>

                        <li className="nav-item ps-2 pe-2">
                          <Link
                            className="nav-link text-white"
                            to="/blog"
                            style={{ borderRadius: "5px" }}
                            onClick={() => setExpanded(false)}
                          >
                            Blog
                          </Link>
                        </li>

                        <li className="nav-item ps-2 pe-2">
                          <Link
                            className="nav-link text-white"
                            to="/team"
                            onClick={() => setExpanded(false)}
                          >
                            Chi siamo
                          </Link>
                        </li>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
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

                      <Col className="text-center col-lg-8 col-md-3 col-sm-4 col-xs-3 col-4">
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