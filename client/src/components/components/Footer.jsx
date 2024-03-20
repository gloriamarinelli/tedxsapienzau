import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFlickr,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "../images/logo-white.png";
import Image1 from "../images/newsletter.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import global from "../../resources/global.json";
import "../../index.css";

export default function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  const SocialIcon = ({ icon, link }) => {
    return (
      <a
        className="bento-box-no-padding"
        aria-current="page"
        href={link}
        style={{
          padding: "12px 16px",
          borderRadius: "8px",
          backgroundColor: "#ffffff1a",
        }}
      >
        <FontAwesomeIcon style={{ color: "white" }} icon={icon} size="2xl" />
      </a>
    );
  };

  const WhiteLink = ({ text, link }) => {
    return (
      <a
        style={{
          color: "white",
          textDecoration: "none",
        }}
        href={link}
      >
        {text}
      </a>
    );
  };

  const GreyLink = ({ text, link }) => {
    return (
      <a
        className="secondary-text"
        style={{
          textDecoration: "none",
        }}
        href={link}
      >
        {text}
      </a>
    );
  };

  return (
    <section
      style={{
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "24px",
        gap: "15px",
        fontFamily: "Fira Sans Extra Condensed, sans-serif",
      }}
    >
      <footer
        className="bento-box"
        style={{
          width: windowSize > global.UTILS.MOBILE_WIDTH ? "95%" : "100%",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        <div>
          <LazyLoadImage
            src={Image}
            alt="LogoTedx"
            width={windowSize > global.UTILS.MOBILE_WIDTH ? "385" : "250"}
            style={{
              marginLeft: "-16px",
            }}
          />
          <p
            className="tertiary-text"
            style={{
              maxWidth: "385px",
              fontSize: "16px",
              lineHeight: "20px",
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
            }}
          >
            TEDxSapienzaU è un evento TED organizzato in modo indipendente
            gestito su licenza di TED. I protagonisti sono le idee, gli
            speakers, i partner e gli studenti che popolano questa grande
            comunità accademica.
          </p>
          <b>Seguici sui social</b>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "10px",
            }}
          >
            <SocialIcon
              icon={faFacebook}
              link="https://www.facebook.com/tedxsapienzau/"
            />
            <SocialIcon
              icon={faLinkedin}
              link="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
            />
            <SocialIcon
              icon={faInstagram}
              link="https://www.instagram.com/tedxsapienzau/"
            />
            <SocialIcon
              icon={faTiktok}
              link="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
            />
            <SocialIcon
              icon={faYoutube}
              link="https://www.youtube.com/playlist?list=PL4-t_gJBexTAtUGEpHCVgcV0Zwt8RyYG6"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            fontSize: "20px",
          }}
        >
          <b>
            <WhiteLink
              text="Edizioni"
              link="/edizioni"
              style={{ marginBottom: "10px" }}
            />
          </b>
          <div style={{ lineHeight: "10px", fontSize: "16px" }}>
            <p className="secondary-text" style={{ marginTop: "5px" }}>
              <GreyLink text="Back to Zero 2023" link={"/edizione2023"} />
            </p>
            <p className="secondary-text">
              <GreyLink text="Awards 2023" link={"/awards2023"} />
            </p>
            <p className="secondary-text">
              <GreyLink text="ACT 2022" link={"/edizione2022"} />
            </p>
          </div>
          <b>
            <WhiteLink text="Partners" link="/partners" />
          </b>
          <b>
            <WhiteLink text="Team" link="/team" />
          </b>
          <b>
            <WhiteLink text="Blog" link="/blog" />
          </b>
          <b>
            <WhiteLink text="About Us" link="/mission&vision" />
          </b>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <b>
            Entra anche tu a far parte del <br /> team TEDxSapienzaU!
          </b>
          <a className="link" href={"/join"}>
            <button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                padding: "8px 32px",
                color: "white",
                border: "none",
                fontSize: "12px",
                borderRadius: "8px",
                fontWeight: "bold",
              }}
            >
              Join Us
            </button>
          </a>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <b>Cerchi informazioni?</b>
            <p>
              Contattaci{" "}
              <a className="tertiary-text" href="mailto:info@tedxsapienzau.com">
                info@tedxsapienzau.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          flexWrap: "wrap",
        }}
      >
        <div>
          <small style={{ marginRight: "20px" }} className="tertiary-text">
            <GreyLink text="Privacy Policy" link={"/privacypolicy"} />
          </small>
          <small className="tertiary-text">
            <GreyLink text="Statuto" link={"/statuto"} />
          </small>
        </div>
        <small className="secondary-text">
          &copy; Copyright 2022 - 2023 | TEDxSapienzaU | All Rights Reserved
        </small>
      </div>
    </section>
  );
}
