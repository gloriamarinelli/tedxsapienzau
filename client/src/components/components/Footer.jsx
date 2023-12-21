import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faFlickr,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "../images/logo-white.png";
import Image1 from "../images/newsletter.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import axios from "axios";
import "../../index.css";

function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const inputRef = useRef();

  const submitHandle = (event) => {
    event.preventDefault();
    let email = inputRef.current.value;
    axios
      .post(global.CONNECTION.ENDPOINT + "newsletter", {
        email,
      })
      .then((response) => {
        console.log(response);
        inputRef.current.value = "";
        inputRef.current.style.borderColor = "green";
        inputRef.current.placeholder = "Email inserita con successo!";
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
    /**
     * DESKTOP
     */
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
                    indipendente gestito su licenza di TED. I protagonisti sono
                    le idee, gli speakers, i partner e gli studenti che popolano
                    questa grande comunità accademica.
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
                  <LazyLoadImage
                    src={Image1}
                    alt="newsletter"
                    width="100"
                    height="100"
                    style={{
                      alignSelf: "center",
                    }}
                  />
                  <a
                    href="/newsletterBrevo"
                    style={{
                      color: "white",
                      marginLeft: "20px",
                      fontFamily: "GothamBold",
                    }}
                  >
                    Clicca qui!
                  </a>
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
                    <a
                      className=""
                      href="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faTiktok}
                        size="2xl"
                      />
                    </a>
                    <a
                      className=""
                      href="https://www.youtube.com/@tedxsapienzau/playlists"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faYoutube}
                        size="2xl"
                      />
                    </a>
                    <a href="https://www.flickr.com/photos/tedxsapienzau/">
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faFlickr}
                        size="2xl"
                      />
                    </a>
                  </div>

                  <h5
                    className="text-white mt-5 mb-0"
                    style={{ fontFamily: "GothamBook" }}
                  >
                    Cerchi informazioni o vuoi proporre la tua idea? Contattaci!
                  </h5>
                  <a
                    className="text-white font-weight-light mt-3 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                    href="mailto:info@tedxsapienzau.com"
                  >
                    info@tedxsapienzau.com
                  </a>
                </div>
              </div>
            </div>
            <hr className="text-white"></hr>
            <div className="copyright py-4 text-center text-white">
              <div className="container">
                <small>
                  &copy; Copyright 2022 - 2023 | TEDxSapienzaU | All Rights
                  Reserved
                </small>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
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

                  <LazyLoadImage
                    src={Image1}
                    alt="newsletter"
                    width="100"
                    height="100"
                    style={{
                      alignSelf: "center",
                    }}
                  />
                  <a
                    href="/newsletterBrevo"
                    style={{
                      color: "white",
                      marginLeft: "20px",
                      fontFamily: "GothamBold",
                    }}
                  >
                    Clicca qui!
                  </a>
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
                    <a
                      className=""
                      href="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faTiktok}
                        size="2xl"
                      />
                    </a>
                    <a
                      className=""
                      href="https://www.youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6"
                    >
                      <FontAwesomeIcon
                        style={{ color: "white" }}
                        icon={faYoutube}
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
                  <a
                    className="text-white font-weight-light mt-3 mb-4"
                    style={{ fontFamily: "GothamBook" }}
                    href="mailto:info@tedxsapienzau.com"
                  >
                    info@tedxsapienzau.com
                  </a>
                </div>
              </div>
            </div>
            <hr className="text-white"></hr>
            <div className="copyright py-4 text-center text-white">
              <div className="container">
                <small>
                  &copy; Copyright 2022 - 2023 | TEDxSapienzaU | All Rights
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
