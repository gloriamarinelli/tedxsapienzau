import "../../index.css";
import React from "react";
import Image from "../images/Cos'è TED.png";
import Image1 from "../images/Cos'è TEDx.png";
import Image2 from "../images/logo-black.png";
import Image3 from "../images/stage2022.jpeg";


import { LazyLoadImage } from "react-lazy-load-image-component";

export default function About() {
  return (
    <>
      <div
        className="header gradient-background-about"
        style={{
          padding: "10px",
          textAlign: "center",
          color: "#fff",
          marginBottom: "10px",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          height: "80vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5"
          style={{
            fontSize: "120px",
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          ABOUT US
          
        </h1>
      </div>
      

      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7 order-md-2 mt-3">
            <p
              className="lead"
              style={{
                textAlign: "justify",
              }}
            >
              TED è un'organizzazione no profit dedicata alla diffusione di
              idee, di solito sotto forma di discorsi brevi e potenti (18 minuti
              o meno). TED è nato nel 1984 come una conferenza in cui
              tecnologia, intrattenimento e design convergevano e oggi copre
              quasi tutti gli argomenti, dalla scienza al business alle
              questioni globali, in più di 100 lingue. L'obiettivo quello di
              diffondere idee di valore e sostenere le idee che cambiano il
              mondo.
            </p>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
            <div>
              <LazyLoadImage src={Image} alt="Cos'èTED" width="" height="50" />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <p
                className="lead"
                style={{
                  textAlign: "justify",
                }}
              >
                Per poter ampliare la diffusione delle Idee di Valore, TED ha
                creato un programma apposito, il TEDx, ossia degli eventi locali
                ed organizzati in modo indipendente, ma con lo spirito di una
                vera e propria conferenza TED, che infatti concede la propria
                licenza.
              </p>
            </div>
            <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
              <LazyLoadImage
                src={Image1}
                alt="Cos'èTEDx"
                width=""
                height="50"
              />
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2 mt-4">
              <LazyLoadImage
                src={Image2}
                alt="TedxSapienzaU"
                width=""
                height="70"
              />
              <p
                className="lead mt-3"
                style={{
                  textAlign: "justify",
                }}
              >
                Il TEDxSapienzaU è il primo TED Universitario che si terrà
                nell’Università di Roma “La Sapienza”. Grazie a questo l’intera
                comunità studentesca e accademica potrà godere di una
                programmazione nuova e di respiro internazionale. L’evento è
                stato fortemente voluto da alcuni studenti dell’Ateneo, che
                grazie al supporto e alla delega della Magnifica Rettrice
                Antonella Polimeni, il Comitato TEDxSapienzaU, composto dagli
                studenti organizzatori, e dall'Area Supporto alla Ricerca e
                Trasferimento Tecnologico, ha ottenuto dalla TED Foundation la
                licenza ufficiale TEDx.
              </p>
            </div>
          </div>

          <div className="col-md-5 order-md-1 mb-4">
            <LazyLoadImage src={Image3} alt="Stage2022" width="" height="400" />
          </div>
        </div>
      </div>

      <div
        class="row mt-10 mb-10"
        style={{
          textAlign: "center",
        }}
      >
        <div class="col">
          <h1
            className="font-weight-bold mt-5 "
            style={{
              color: "rgb(235, 0, 40)",
              fontSize: "100px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            13+
          </h1>
          <h5
            style={{
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            speaker
          </h5>
        </div>
        <div class="col">
          <h1
            className="font-weight-bold mt-5 "
            style={{
              color: "rgb(235, 0, 40)",
              fontSize: "100px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            3k
          </h1>
          <h5
            style={{
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            spettatori
          </h5>
        </div>
        <div class="col">
          <h1
            className="font-weight-bold mt-5 "
            style={{
              color: "rgb(235, 0, 40)",
              fontSize: "100px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            3k+
          </h1>
          <h5
            style={{
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            social followers
          </h5>
        </div>
        <div class="col">
          <h1
            className="font-weight-bold mt-5 "
            style={{
              color: "rgb(235, 0, 40)",
              fontSize: "100px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            15k+
          </h1>
          <h5
            style={{
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            visualizzazioni su youtube
          </h5>
        </div>
      </div>
    </>
  );
}
