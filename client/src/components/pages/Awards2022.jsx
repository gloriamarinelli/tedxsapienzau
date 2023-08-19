import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image2 from "../images/awards22/vincitori_full.png";
import Image1 from "../images/awards22/artist1.jpg";
import Image4 from "../images/awards22/speaker1.jpg";
import Image3 from "../images/awards22/speaker2.jpg";
import Image6 from "../images/awards22/speaker3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import logoAwardsBianco from "../images/TEDlogovecchio.png";
import global from "../../resources/global.json";

export default function Awards2022() {
  return (
    <section>
      <header
        className="header-awards22"
        style={{
          textAlign: "center",
          height: "45vh",
          marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
        }}
      ></header>

				<div className="row no-gutters mx-0 where-is-the-event">
					<div className="col-md-6">
						<div className="row">
            <FontAwesomeIcon
              className="col-2"
              icon={faLocationDot}
              style={{ color: "#E62B1E" }}
              size="2x"
            />
            <p className="col-8">
              Università La Sapienza - Nuovo Teatro Ateneo Piazzale Aldo Moro,
              5, 00185 Roma RM
            </p>
          </div>
          <div className="row">
            <FontAwesomeIcon
              className="col-2"
              icon={faCalendar}
              style={{ color: "#E62B1E" }}
              size="2x"
            />
            <p className="col-8">29 Aprile 2022</p>

            <div className="row mt-3"></div>
          </div>
        </div>
        <div className="col-md-6">
          <LazyLoadImage src={logoAwardsBianco} width="300px" />
        </div>
      </div>

      <h1
        className="font-weight-bold mt-5 mb-3"
        style={{
          fontSize: "45px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        I VINCITORI TEDxSAPIENZAU AWARDS 2022
      </h1>
      <div class="container mt-5 mb-5">
        <LazyLoadImage src={Image2} class="winner_22" />
        <div class="row justify-content-center" style={{ gap: "100px" }}>
          <div class="col-sm-4">
            {" "}
            <div class="row-4">
              <LazyLoadImage src={Image3} class="winner_22_small" />
            </div>
            <div class="row-4 winner_22_small">
              <LazyLoadImage src={Image4} class="winner_22_small" />
            </div>
            <div class="row-4 winner_22_small">
              <LazyLoadImage src={Image6} class="winner_22_small" />
            </div>
          </div>
          <div class="col-sm-4">
            {" "}
            <div class="row-4 winner_22_small">
              <LazyLoadImage src={Image1} class="winner_22_small" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
