import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";

import "../../index.css";

import Image from "../images/ACT2022.gif";

import Action1 from "../images/Giovanna Melandri.jpg";
import Action2 from "../images/Valeria Trombetta.jpg";
import Action3 from "../images/Fasma.jpg";

import Cross1 from "../images/Viviana Bottaro.jpg";
import Cross2 from "../images/Giusy Amoroso.jpg";
import Cross3 from "../images/Mario Baccini.jpg";

import Transf1 from "../images/Vittorio Loreto.jpg";
import Transf2 from "../images/Valentina Dallari.jpg";
import Transf3 from "../images/Ewelina Jelenkowska-Lucà.jpg";

import Awards1 from "../images/Volosumarte.jpg";
import Awards2 from "../images/Eleonora Pariset.jpg";
import Awards3 from "../images/Arianna Peduzzi.jpg";
import Awards4 from "../images/Serena Spanò.jpg";

import Image2 from "../images/LogoNERO.png";
import Image3 from "../images/stage2022.jpeg";

export default function Edizione2022() {
  return (
    <>
      <header
        className="header ed2022"
        style={{
          padding: "10px",
          textAlign: "center",
          marginBottom: "10px",
          height: "40vh",
        }}
      >
        <LazyLoadImage src={Image} alt="ACT2022" />
      </header>

      <hr className="featurette-divider"></hr>

      <div
        className="header"
        style={{
         
          textAlign: "left",
          display: "grid",
          height: "100",
        }}
      >
        <h1
          className="font-weight-bold"
          style={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "bold",
            color: "#EB0028",
            fontFamily: "GothamBold",
          }}
        >
          Venerdì 29 aprile
        </h1>

        <h1
          className="font-weight-bold "
          style={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          Università "La Sapienza" - Aula Magna Rettorato
        </h1>

        <h1
          className="font-weight-bold"
          style={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          Piazzale Aldo Moro 5, Roma
        </h1>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="container">
        <h1
          className="font-weight-bold mt-5 mb-3"
          style={{
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
            marginLeft: "30px",
          }}
        >
          IL TEMA DELL'EVENTO
        </h1>

        <div
          className="mb-5"
          style={{
            textAlign: "justify",
            fontSize: "20px",
            marginLeft: "30px",
          }}
        >
          <p>
            Il titolo della prima edizione del TEDxSapienzaU sarà{" "}
            <strong>ACT - Lead the change</strong>.{" "}
          </p>

          <p>
            Come da linee guida TEDx, i dialoghi che verranno presentati
            riguarderanno diverse materie ed aree tematiche interconnesse,
            prediligendo le migliori idee ed esperienze ispiratrici:
          </p>
          <p>
            <strong style={{ color: "#EB0028", fontSize: "30px" }}>
              ACTION.
            </strong>{" "}
            La cultura dell'azione contro la cultura dell'inerzia e il ruolo
            della cittadinanza attiva nell'educazione del futuro.{" "}
          </p>
          <p>
            <strong style={{ color: "#EB0028", fontSize: "30px" }}>
              CROSS-FERTILIZATION.
            </strong>{" "}
            La predisposizione alla creatività ed empatia, la pop education e i
            nuovi orizzonti della contaminazione tra i saperi.{" "}
          </p>
          <p>
            <strong style={{ color: "#EB0028", fontSize: "30px" }}>
              TRANSFORMATION.
            </strong>{" "}
            Il digitale e la realtà integrata, la trasformazione dei modelli
            educativi e il valore dell'esperienza nella crescita dell'individuo.
          </p>
        </div>

        <div className="container">
          <h1
            className="font-weight-bold mt-5 mb-3"
            style={{
              fontSize: "45px",
              textAlign: "center",
              fontWeight: "bold",
              marginLeft: "30px",
            }}
          >
            GLI SPEAKER
          </h1>
          <p
            style={{
              fontSize: "60px",
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            <strong style={{ color: "#EB0028" }}>A</strong>CTION
          </p>
          <div
            class="container"
            style={{
              textAlign: "center",
            }}
          >
            <div class="content-section" id="portfolio">
              <div class="row">
                <div class="col-sm">
                  <a class="portfolio-item" href="https://youtu.be/MiGjiZrhAeg">
                    <div class="caption">
                      <div class="caption-content">
                        <p class="mb-0">Giovanna Melandri</p>
                      </div>
                    </div>
                    <LazyLoadImage src={Action1} alt="Melandri" height="300" />
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    class="portfolio-item"
                    href="https://youtu.be/zTfHpas8FHM"
                    target="_self"
                  >
                    <div class="caption">
                    <div class="caption-content">
                        <p class="mb-0">Valeria Trombetta</p>
                      </div>
                    </div>
                    <LazyLoadImage src={Action2} alt="Trombetta" height="300" />
                  </a>
                </div>
                <div class="col-sm">
                  <a
                    class="portfolio-item"
                    href="https://youtu.be/BTTkcs7F1AY"
                    target="_self"
                  >
                    <div class="caption">
                    <div class="caption-content">
                        <p class="mb-0">Fasma</p>
                      </div>
                    </div>
                    <LazyLoadImage src={Action3} alt="Fasma" height="300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "50px",
              fontSize: "60px",
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            <strong style={{ color: "#EB0028" }}>C</strong>ROSS-FERTILIZATION
          </p>
          <div
            class="container"
            style={{
              textAlign: "center",
            }}
          >
            <div class="row">
              <div class="col-sm">
                <a href="" target="_self">
                  <LazyLoadImage src={Cross1} alt="Bottaro" height="300" />
                </a>
              </div>
              <div class="col-sm">
                <a href="https://youtu.be/CYC8W7UK0mg" target="_self">
                  <LazyLoadImage src={Cross2} alt="Amoroso" height="300" />
                </a>
              </div>
              <div class="col-sm">
                <a href="https://youtu.be/8gfmJP59Y7g" target="_self">
                  <LazyLoadImage src={Cross3} alt="Baccini" height="300" />
                </a>
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "50px",
              fontSize: "60px",
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            <strong style={{ color: "#EB0028" }}>T</strong>RANSFORMATION
          </p>
          <div
            class="container"
            style={{
              textAlign: "center",
            }}
          >
            <div class="row">
              <div class="col-sm">
                <a href="https://youtu.be/UadTNZPaxF0" target="_self">
                  <LazyLoadImage src={Transf1} alt="Loreto" height="300" />
                </a>
              </div>
              <div class="col-sm">
                <a href="https://youtu.be/8gfmJP59Y7g" target="_self">
                  <LazyLoadImage src={Transf2} alt="Dallari" height="300" />
                </a>
              </div>
              <div class="col-sm">
                <a href="https://youtu.be/aCV40aShbbo" target="_self">
                  <LazyLoadImage
                    src={Transf3}
                    alt="Jelenkowska-Lucà"
                    height="300"
                  />
                </a>
              </div>
            </div>
          </div>
          <p
            style={{
              marginTop: "50px",
              fontSize: "60px",
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            <strong style={{ color: "#EB0028" }}>TED</strong>xSapienzaU AWARDS
          </p>
          <div
            class="container"
            style={{
              textAlign: "center",
            }}
          >
            <div class="row">
              <div class="col-sm">
                <a
                  class="portfolio-item"
                  href="https://youtu.be/ZBQguIEJFBo"
                  target="_self"
                >
                  <LazyLoadImage src={Awards1} alt="Volosumarte" height="250" />
                </a>
              </div>
              <div class="col-sm">
                <a
                  class="portfolio-item"
                  href="https://youtu.be/OBaW4Inps4o"
                  target="_self"
                >
                  <LazyLoadImage src={Awards2} alt="Pariset" height="250" />
                </a>
              </div>
              <div class="col-sm">
                <a
                  class="portfolio-item"
                  href="https://youtu.be/C19qjBMT_3Y"
                  target="_self"
                >
                  <LazyLoadImage src={Awards3} alt="Peduzzi" height="250" />
                </a>
              </div>
              <div class="col-sm">
                <a
                  class="portfolio-item"
                  href="https://youtu.be/Z2UVvrwMEHs"
                  target="_self"
                >
                  <LazyLoadImage src={Awards4} alt="Spanò" height="250" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
