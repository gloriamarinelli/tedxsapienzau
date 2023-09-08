import React from "react";
import "../../resources/styles/RFWstyle.css";
import global from "../../resources/global.json";
import CountdownTimer from "../components/CountdownTimer";
import { useOutletContext } from "react-router";
import "../../index.css";
import Iframe from "react-iframe";

export default function RFW2023() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <div
          className="header-RFW"
          style={{
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <h1
                  style={{
                    fontSize: "45px",
                    fontFamily: "GothamBold",
                    color: "white",
                  }}
                >
                  Università e Impresa
                </h1>
              </div>

              <div className="col">
                <h1
                  style={{
                    fontSize: "45px",
                    fontFamily: "GothamBold",
                    color: "white",
                  }}
                >
                  Insieme per il futuro
                </h1>
              </div>
            </div>
          </div>

          <div className="event-RFW-section" style={{ marginTop: "70px" }}>
            <div className="row no-gutters mx-0 event-RFW">
              <div className="col">
                <div className="row">
                  <div className="col ">
                    <CountdownTimer />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <a
                  className="btn-RFW-page"
                  style={{
                    fontSize:
                      windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                    fontFamily: "GothamBold",
                  }}
                  href="https://www.eventbrite.it/e/biglietti-universita-e-impresa-insieme-per-il-futuro-703507017427?aff=oddtdtcreator"
                  target="_blank"
                  rel="noreferrer"
                >
                  Partecipa ora!
                </a>
              </div>
            </div>
          </div>
        </div>

        <section
          style={{
            backgroundColor: "#e62153",
          }}
        >
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                    PROGRAMMA
                  </h1>

                  <ul
                    style={{
                      listStyleType: "none",
                      fontSize: "20px",
                      lineHeight: "50px",
                      marginLeft: "-25px",
                      textShadow: "1px 1px 2px black",
                      color: "white",
                    }}
                  >
                    <li>ore 17:00 Accredito</li>
                    <hr />
                    <li>
                      ore 17:15 Introduzione ai lavori e presentazione del
                      TEDxSapienzaU con Ilaria Cataldi{" "}
                    </li>
                    <hr />
                    <li>
                      ore 17:30 Intervento del Prof. Alberto Pastore (Sapienza
                      Università di Roma){" "}
                    </li>
                    <hr />
                    <li>
                      ore 17:45 Intervento della Prof.ssa Daniela De Leo (Rome
                      Technopole)
                    </li>
                    <hr />
                    <li>ore 18:00 Intervento di UniCredit</li>
                    <hr />
                    <li>ore 18:15 Intervento di TIM</li>
                    <hr />
                    <li>ore 18:30 Intervento di Millionaire</li>
                    <hr />
                    <li>ore 18:45 Q&A per il pubblico</li>
                    <hr />
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="p-5 d-flex justify-content-center align-items-center">
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5939.173993766895!2d12.506515243816233!3d41.90173842035876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619da4adeb5d%3A0x8558a2dbf6f699eb!2sPalazzo%20del%20Rettorato!5e0!3m2!1sit!2sit!4v1694173166033!5m2!1sit!2sit"
                    id=""
                    className=""
                    height="400"
                    width="600"
                  />
                </div>
              </div>
            </div>
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
          className="header-RFW-mobile "
          style={{
            textAlign: "left",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-4"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginLeft: "30px",
              color: "white",
            }}
          >
            Università e Impresa
          </h1>
          <h1
            className="font-weight-bold"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginLeft: "30px",
              color: "white",
            }}
          >
            Insieme per il futuro
          </h1>
        </div>
        <div className="container-lg marketing">
          <div className="row featurette mt-5 mb-5">
            <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
              <a
                className="btn-RFW-page-mobile"
                style={{
                  fontSize:
                    windowSize > global.UTILS.TABLET_WIDTH ? "20px" : "15px",
                  fontFamily: "GothamBold",
                }}
                href="https://www.eventbrite.it/e/biglietti-universita-e-impresa-insieme-per-il-futuro-703507017427?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
              >
                Partecipa ora!
              </a>
            </div>
            <div
              className="col-md-7 order-md-2 mt-5"
              style={{ backgroundColor: "#e62153", color: "white" }}
            >
              <h1
                className="mb-3 mt-3 text-center"
                style={{ fontSize: "30px", fontWeight: "bold", color: "black" }}
              >
                PROGRAMMA
              </h1>
              <ul
                style={{
                  textShadow: "1px 1px 2px black",
                  listStyleType: "none",
                  fontSize: "20px",
                  lineHeight: "50px",
                  marginLeft: "-25px",
                }}
              >
                <li>ore 17:00 Accredito</li>
                <hr />
                <li>
                  ore 17:15 Introduzione ai lavori e presentazione del
                  TEDxSapienzaU con Ilaria Cataldi{" "}
                </li>
                <hr />
                <li>
                  ore 17:30 Intervento del Prof. Alberto Pastore (Sapienza
                  Università di Roma){" "}
                </li>
                <hr />
                <li>
                  ore 17:45 Intervento della Prof.ssa Daniela De Leo (Rome
                  Technopole)
                </li>
                <hr />
                <li>ore 18:00 Intervento di UniCredit</li>
                <hr />
                <li>ore 18:15 Intervento di TIM</li>
                <hr />
                <li>ore 18:30 Intervento di Millionaire</li>
                <hr />
                <li>ore 18:45 Q&A per il pubblico</li>
              </ul>
            </div>
          </div>

          <div className="marketing mt-3">
            <div className="row featurette">
              <div className="col-md-5 mb-3 order-md-1 d-flex justify-content-center align-items-center">
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5939.173993766895!2d12.506515243816233!3d41.90173842035876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f619da4adeb5d%3A0x8558a2dbf6f699eb!2sPalazzo%20del%20Rettorato!5e0!3m2!1sit!2sit!4v1694173166033!5m2!1sit!2sit"
                  id=""
                  className=""
                  height="500"
                  width="350"
                />
              </div>
              <div className="col-md-7 order-md-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
