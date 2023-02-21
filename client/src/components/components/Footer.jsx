import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "../images/logo-white.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import axios from "axios";
import "../../index.css";

function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const submitHandle = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    axios
      .post("http://localhost:8800/newsletter", {
        email,
      })
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <section className="page-section" id="footer">
          <footer className="footer bg-black">
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-4 mt-4 mb-5 mb-lg-0">
                  <LazyLoadImage
                    src={Image}
                    alt="LogoTedx"
                    width=""
                    height="60"
                    style={{
                      marginLeft: "-16px",
                    }}
                  />
                  <p
                    className="mt-3 mb-0 text-white text-sm"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    TEDxSapienzaU è un evento TED organizzato in modo
                    indipendente ed è anche il primo TED Universitario che si
                    terrà nell'Università di Roma “La Sapienza”. I protagonisti
                    sono le idee, gli speakers, i partner e gli studenti che
                    popolano questa grande comunità accademica.
                  </p>

                  <div
                    className="d-flex flex-row justify-content-start mt-4 mb-4"
                    style={{ gap: "60px" }}
                  >
                    <a
                      href="/statuto"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "GothamBold",
                      }}
                    >
                      Statuto
                    </a>

                    <a
                      href="/privacypolicy"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "GothamBold",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 mb-5 mb-lg-0">
                  <h4
                    className="text-white mt-4 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Resta aggiornato
                  </h4>
                  <p
                    className="text-white font-weight-light mt-1 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Iscriviti alla newsletter per rimanere aggiornato sui nostri
                    eventi
                  </p>

                  <form
                    onSubmit={submitHandle}
                    className="row d-flex align-items-center"
                  >
                    <input
                      type="text"
                      id="email"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                      className="btn btn-outline-light btn-social mx-1 col-9"
                      placeholder="Inserisci la tua email...*"
                    ></input>

                    <button
                      type="sumbit"
                      className="button-submit-newsletter text-center col-2"
                    >
                      ➱
                    </button>
                  </form>
                </div>

                <div className="col-lg-4 mb-5 mb-lg-0 ">
                  <h4
                    className="text-white mt-4 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Seguici sui social
                  </h4>
                  <div
                    className="d-flex flex-row justify-content-start"
                    style={{ gap: "30px" }}
                  >
                    <a
                      className=""
                      aria-current="page"
                      href="https://www.facebook.com/tedxsapienzau/"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faFacebook}
                        size="2xl"
                      />
                    </a>
                    <a
                      className=""
                      href="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faLinkedin}
                        size="2xl"
                      />
                    </a>
                    <a
                      className=""
                      href="https://www.instagram.com/tedxsapienzau/"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faInstagram}
                        size="2xl"
                      />
                    </a>
                  </div>
                  <h5
                    className="mt-5 mb-0 text-white"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Cerchi informazioni o vuoi proporre la tua idea? Contattaci!
                  </h5>
                  <p
                    className="text-white font-weight-light mt-3 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    info@tedxsapienzau.com
                  </p>
                </div>
              </div>
            </div>
            <hr className="text-white"></hr>
            <div className="copyright py-4 text-center text-white">
              <div className="container">
                <small>
                  &copy; Copyright 2022 - 2023 | TedxSapienzaU | All Rights
                  Reserved
                </small>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="page-section" id="footer">
          <footer className="footer bg-black">
            <div className="container">
              <div className="row p-3">
                <div className="mt-4 mb-3">
                  <LazyLoadImage
                    src={Image}
                    alt="LogoTedx"
                    width=""
                    height="60"
                    style={{
                      marginLeft: "-16px",
                    }}
                  />
                  <p
                    className="mt-3 mb-0 text-white text-sm"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    TEDxSapienzaU è un evento TED organizzato in modo
                    indipendente ed è anche il primo TED Universitario che si
                    terrà nell'Università di Roma “La Sapienza”. I protagonisti
                    sono le idee, gli speakers, i partner e gli studenti che
                    popolano questa grande comunità accademica.
                  </p>

                  <div
                    className="d-flex flex-row justify-content-start mt-4 mb-4"
                    style={{ gap: "60px" }}
                  >
                    <a
                      href="/statuto"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "GothamBold",
                      }}
                    >
                      Statuto
                    </a>

                    <a
                      href="/privacypolicy"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "GothamBold",
                      }}
                    >
                      Privacy Policy
                    </a>
                  </div>
                </div>

                <div className="mb-3">
                  <h4
                    className="text-white mt-4 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Resta aggiornato
                  </h4>
                  <p
                    className="text-white font-weight-light mt-1 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Iscriviti alla newsletter per rimanere aggiornato sui nostri
                    eventi
                  </p>
                  <div className="row d-flex align-items-center">
                    <form
                      onSubmit={submitHandle}
                      className="row d-flex align-items-center"
                    >
                      <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        className="btn btn-outline-light btn-social mx-1 col-9"
                        placeholder="Inserisci la tua email..*"
                      ></input>

                      <button
                        type="sumbit"
                        className="button-submit-newsletter text-center col-2"
                      >
                        ➱
                      </button>
                    </form>
                  </div>
                </div>

                <div>
                  <h4
                    className="text-white mt-4 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Seguici sui social
                  </h4>
                  <div
                    className="d-flex flex-row justify-content-start"
                    style={{ gap: "30px" }}
                  >
                    <a
                      className=""
                      aria-current="page"
                      href="https://www.facebook.com/tedxsapienzau/"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faFacebook}
                        size="2xl"
                      />
                    </a>
                    <a
                      className=""
                      href="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faLinkedin}
                        size="2xl"
                      />
                    </a>
                    <a
                      className=""
                      href="https://www.instagram.com/tedxsapienzau/"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faInstagram}
                        size="2xl"
                      />
                    </a>
                  </div>
                  <h5
                    className="mt-5 mb-0 text-white"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Cerchi informazioni o vuoi proporre la tua idea? Contattaci!
                  </h5>
                  <p
                    className="text-white font-weight-light mt-3 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    info@tedxsapienzau.com
                  </p>
                </div>
              </div>
            </div>
            <hr className="text-white"></hr>
            <div className="copyright py-4 text-center text-white">
              <div className="container">
                <small>
                  &copy; Copyright 2022 - 2023 | TedxSapienzaU | All Rights
                  Reserved
                </small>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
  }
}

export default Footer;
