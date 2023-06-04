import "../../index.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/sostenibilità.jpg";

import React, { useState } from "react";
import global from "../../resources/global.json";
import "../../resources/styles/missionandvisionstyle.css";
import { useOutletContext } from "react-router";

export default function Sustainability() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <div
          className="header gradient-background-about"
          style={{
            padding: "10px",
            textAlign: "center",
            color: "#fff",
            backgroundColor: "red",
            marginBottom: "10px",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "80vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
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
            SUSTAINABILITY
          </h1>
        </div>

        <div className="container-lg marketing">
          <p
            className="paragraph"
            style={{
              textAlign: "center",
              marginLeft: "50px",
              marginRight: "50px",
              fontFamily: "GothamBook",
              fontSize: "25px",
            }}
          >
            <i>
              “Events have the potential to be model examples of harmonious
              balance between human activity, resource use and environmental
              impact. There is a powerful opportunity, and an urgent imperative,
              for events to leave a lasting positive legacy and social outcomes,
              and to inspire attendees, supply chain and host destinations to
              action”
            </i>
          </p>
          <p
            className="paragraph"
            style={{
              textAlign: "center",
              marginLeft: "50px",
              marginRight: "50px",
              fontFamily: "GothamBook",
              fontSize: "18px",
            }}
          >
            <i>-Sustainaibility and Events (by Meegan Jones)</i>
          </p>
        </div>
        <div className="container-lg marketing">
          <h3
            className="title mt-5"
            style={{
              textAlign: "justify",
              fontFamily: "GothamBold",
            }}
          >
            La nostra idea di SOSTENIBILITÀ
          </h3>
        </div>

        <section style={{ fontSize: "20px" }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Il <strong>Team TEDxSapienzaU</strong> punta ad avere un piano di
              organizzazione sostenibile in tutte e tre le aree che riteniamo
              fondamentali: ambiente, società ed economia.
            </p>
          </div>
        </section>

        <div className="container-lg marketing">
          <h3
            className="title"
            style={{
              textAlign: "justify",
              fontFamily: "GothamBold",
            }}
          >
            I nostri obiettivi 2023
          </h3>
        </div>
        <div></div>

        <section style={{ fontSize: "20px" }}>
          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Ambientali:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Plastic free</li>
              <li>Riduzione/compensazione emissioni di Co2</li>
              <li>Alimenti plant based e prodotti a Km0</li>
              <li>Attenta raccolta differenziata</li>
            </ul>
          </div>

          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Economici:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Ridurre i consumi</li>
              <li>Diminuzione output negativi</li>
              <li>Economia circolare e della condivisione</li>
            </ul>
          </div>

          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Sociali:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Benessere umano</li>
              <li>Inclusività ed equità</li>
              <li>Promozione culturale</li>
            </ul>
          </div>
        </section>

        <section style={{ fontSize: "20px", textAlign: "justify" }}>
          <div className="container-lg marketing mt-5">
            <h3
              className="title"
              style={{
                fontFamily: "GothamBook",
              }}
            >
              Le nostre <strong>LINEE GUIDA</strong>:
            </h3>
          </div>
          <div className="container-lg marketing">
            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                <LazyLoadImage src={Image} alt="Cos'èTED" height="600" />
              </div>
              <div className="col-md-7 order-md-2 mt-3">
                <ol style={{ marginLeft: "30px", lineHeight: "40px" }}>
                  <li>
                    <strong>impatto sociale dell’evento sulla comunità</strong>,
                    contribuendo alla responsabilità sociale, senso di
                    appartenenza e identità culturale
                  </li>
                  <li>
                    <strong>organizzazione sostenibile dell’evento</strong>,
                    tramite reporting e valutazioni
                  </li>
                  <li>
                    <strong>comunicazione</strong> efficace, trasparente e
                    d’ispirazione, capace di suggerire nuove prospettive o
                    metterle in discussione
                  </li>
                  <li>
                    <strong>sede dell’evento</strong>: tutela del contesto
                    territoriale
                  </li>
                  <li>
                    <strong>emissioni</strong>: mitigazione, calcolo e
                    compensazione grazie alla collaborazione con il partner
                    Up2You così da ottenere un evento climaticamente neutro
                  </li>
                  <li>
                    <strong>gestione delle risorse</strong>: processi e
                    materiali di derivazione etica, responsabile e non tossica
                    preferendo le alternative sostenibili quali il riciclaggio e
                    beni di seconda mano
                  </li>
                  <li>
                    <strong>rifiuti e smaltimento</strong>, attuando una diretta
                    riduzione dei rifiuti e applicando corrette pratiche di
                    smaltimento o riuso
                  </li>
                  <li>
                    <strong>acqua</strong>, contrastando lo spreco d’acqua
                    potabile e favorendone un uso responsabile;{" "}
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="container-lg marketing mt-5">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Le nostre <strong>AZIONI SOSTENIBILI</strong>:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>
                Albero di natale TEDxSapienzaU: evento in cui gli studenti
                Sapienza hanno avuto la possibilità di scrivere le proprie idee
                di valore su dei cartoncini in carta riciclata da condividere
                con la comunità Sapienza
              </li>
              <li>
                L’anno scorso, grazie alla collaborazione con Up2U, abbiamo
                raggiunto la compensazione totale della CO2 emessa così da avere
                un evento climaticamente neutro; anche quest’anno contiamo di
                fare lo stesso
              </li>
              <li>Uso di materiali riciclati e gadget sostenibili</li>
            </ul>
          </div>
        </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="header gradient-background"
          style={{
            padding: "10px",
            color: "#fff",
            height: "30vh",
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            SUSTAINABILITY
          </h1>
        </div>
        <div className="container-lg marketing mt-3">
          <p
            className="paragraph"
            style={{
              textAlign: "center",
              marginLeft: "10px",
              marginRight: "10px",
              fontFamily: "GothamBook",
              fontSize: "25px",
            }}
          >
            <i>
              “Events have the potential to be model examples of harmonious
              balance between human activity, resource use and environmental
              impact. There is a powerful opportunity, and an urgent imperative,
              for events to leave a lasting positive legacy and social outcomes,
              and to inspire attendees, supply chain and host destinations to
              action”
            </i>
          </p>
          <p
            className="paragraph"
            style={{
              textAlign: "center",
              marginLeft: "50px",
              marginRight: "50px",
              fontFamily: "GothamBook",
              fontSize: "18px",
            }}
          >
            <i>-Sustainaibility and Events (by Meegan Jones)</i>
          </p>
        </div>
        <div className="container-lg marketing">
          <h3
            className="title mt-5"
            style={{
              fontFamily: "GothamBold",
            }}
          >
            La nostra idea di SOSTENIBILITÀ
          </h3>
        </div>

        <section style={{ fontSize: "20px" }}>
          <div className="container-lg marketing">
            <p
              className="paragraph"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Il <strong>Team TEDxSapienzaU</strong> punta ad avere un piano di
              organizzazione sostenibile in tutte e tre le aree che riteniamo
              fondamentali: ambiente, società ed economia.
            </p>
          </div>
        </section>

        <div className="container-lg marketing">
          <h3
            className="title"
            style={{
              textAlign: "justify",
              fontFamily: "GothamBold",
            }}
          >
            I nostri obiettivi 2023
          </h3>
        </div>
        <div></div>

        <section style={{ fontSize: "20px" }}>
          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Ambientali:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Plastic free</li>
              <li>Riduzione/compensazione emissioni di Co2</li>
              <li>Alimenti plant based e prodotti a Km0</li>
              <li>Attenta raccolta differenziata</li>
            </ul>
          </div>

          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Economici:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Ridurre i consumi</li>
              <li>Diminuzione output negativi</li>
              <li>Economia circolare e della condivisione</li>
            </ul>
          </div>

          <div className="container-lg marketing">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBold",
              }}
            >
              Sociali:
            </h3>
            <ul style={{ marginLeft: "30px", lineHeight: "40px" }}>
              <li>Benessere umano</li>
              <li>Inclusività ed equità</li>
              <li>Promozione culturale</li>
            </ul>
          </div>
        </section>

        <section style={{ fontSize: "20px", textAlign: "justify" }}>
          <div className="container-lg marketing mt-5">
            <h3
              className="title"
              style={{
                fontFamily: "GothamBook",
              }}
            >
              Le nostre <strong>LINEE GUIDA</strong>:
            </h3>
          </div>
          <div className="container-lg marketing">
            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                <LazyLoadImage src={Image} alt="Cos'èTED" height="400" />
              </div>
              <div className="col-md-7 order-md-2 mt-3">
                <ol style={{ lineHeight: "40px", marginRight: "20px" }}>
                  <li>
                    <strong>impatto sociale dell’evento sulla comunità</strong>,
                    contribuendo alla responsabilità sociale, senso di
                    appartenenza e identità culturale
                  </li>
                  <li>
                    <strong>organizzazione sostenibile dell’evento</strong>,
                    tramite reporting e valutazioni
                  </li>
                  <li>
                    <strong>comunicazione</strong> efficace, trasparente e
                    d’ispirazione, capace di suggerire nuove prospettive o
                    metterle in discussione
                  </li>
                  <li>
                    <strong>sede dell’evento</strong>: tutela del contesto
                    territoriale
                  </li>
                  <li>
                    <strong>emissioni</strong>: mitigazione, calcolo e
                    compensazione grazie alla collaborazione con il partner
                    Up2You così da ottenere un evento climaticamente neutro
                  </li>
                  <li>
                    <strong>gestione delle risorse</strong>: processi e
                    materiali di derivazione etica, responsabile e non tossica
                    preferendo le alternative sostenibili quali il riciclaggio e
                    beni di seconda mano
                  </li>
                  <li>
                    <strong>rifiuti e smaltimento</strong>, attuando una diretta
                    riduzione dei rifiuti e applicando corrette pratiche di
                    smaltimento o riuso
                  </li>
                  <li>
                    <strong>acqua</strong>, contrastando lo spreco d’acqua
                    potabile e favorendone un uso responsabile;{" "}
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="container-lg marketing mt-5">
            <h3
              className="title"
              style={{
                textAlign: "justify",
                fontFamily: "GothamBook",
              }}
            >
              Le nostre <strong>AZIONI SOSTENIBILI</strong>:
            </h3>
            <ul style={{ marginRight: "20px", lineHeight: "40px" }}>
              <li>
                Albero di natale TEDxSapienzaU: evento in cui gli studenti
                Sapienza hanno avuto la possibilità di scrivere le proprie idee
                di valore su dei cartoncini in carta riciclata da condividere
                con la comunità Sapienza
              </li>
              <li>
                L’anno scorso, grazie alla collaborazione con Up2U, abbiamo
                raggiunto la compensazione totale della CO2 emessa così da avere
                un evento climaticamente neutro; anche quest’anno contiamo di
                fare lo stesso
              </li>
              <li>Uso di materiali riciclati e gadget sostenibili</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
