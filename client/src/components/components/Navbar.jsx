import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Image from "../images/logo-black.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  /*
	console.log(currentUser.username);
*/
  return (
    <>
      <div className="Navbar">
        {/**
         * SOCIAL HEADER
         */}
        <nav>
          <div
            style={{
              height: global.UTILS.SOCIAL_NAV_HEIGHT,
              width: "100vw",
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
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.facebook.com/tedxsapienzau/"
                    target="_blank"
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
                  >
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faInstagram}
                      size="xl"
                    />
                  </a>
                </li>
                <a
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#fff",
                    color: "#000",
                    textDecoration: "none",
                    fontFamily: "GothamBold",
                  }}
                  className="newsletter"
                  href="#footer"
                >
                  Newsletter
                </a>
              </ul>
            </div>
          </div>
        </nav>

        {/**
         * NAVBAR
         */}

        <nav
          className="navbar navbar-expand-lg navbar-white bg-white static-top"
          style={{ fontFamily: "GothamBold" }}
        >
          <div className="container">
            <Link to="/">
              <LazyLoadImage src={Image} alt="LogoTedx" width="" height="40" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="/join">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        backgroundColor: global.COLORS.ROSSO_TED,
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Join us
                    </button>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-bg-light"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Edizioni
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item text-bg-light"
                        href="/edizione2023"
                      >
                        Edizione 2023
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-bg-light"
                        href="/edizione2022"
                      >
                        Edizione 2022
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-bg-light" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-bg-light" to="/partners">
                    Partners
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-bg-light"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Team
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/team2023"
                      >
                        Team 2023
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-bg-light"
                        to="/team2022"
                      >
                        Team 2022
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-bg-light" to="/about">
                    About
                  </Link>
                </li>

                {currentUser ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link bg-success text-white"
                      to="/write"
                    >
                      Scrivi
                    </Link>
                  </li>
                ) : (
                  <></>
                )}

                {currentUser ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link bg-success text-white"
                      type="submit"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <></>
                )}
                <>
                  <li className="nav-item">
                    <p
                      className=" nav-link"
                      style={{
                        color: "green",
                        fontSize: "15px",
                      }}
                    >
                      {currentUser ? `Benvenuto, ${currentUser.username}` : ""}
                    </p>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
