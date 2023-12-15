import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import Cover23 from "../images/cover-edizione23.webp";
import Cover22 from "../images/cover-edizione22.webp";
import global from "../../resources/global.json";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../resources/styles/editionsstyle.css";
import "../../index.css";

export default function Editions() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > 992) {
    return (
      <>
        <div
          className="header gradient-background"
          style={{
            padding: "10px",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            height: "40vh",
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
            EDIZIONI
          </h1>
        </div>
        <div className="container-lg mt-3">
          <div class="parent" style={{ fontFamily: "GothamBold" }}>
            <div class="div1">
              <h2
                style={{
                  fontSize: "60px",
                  color: global.COLORS.ROSSO_TED_2023,
                }}
              >
                BACK TO ZERO
              </h2>
              <p
                style={{
                  fontSize: "30px",
                  color: global.COLORS.ROSSO_TED_2023,
                }}
              >
                15 Novembre 2023
              </p>
              <p>
                Il nostro obiettivo è azzerare, ricercare un punto zero: le
                disuguaglianze, i conflitti, i cattivi stili di vita, le
                emissioni e i rifiuti. Ridurre quei fattori inquinanti che
                rallentano la crescita della nostra società, peggiorando la
                qualità della nostra vita. Riconsiderare noi stessi ed il nostro
                modo di confrontarci. Imparare ed interagire con la società
                contemporanea, con le arti e le scienze. [...]
              </p>
              <a className="link" href={"/edizione2023"}>
                <button
                  style={{
                    backgroundColor: global.COLORS.ROSSO_TED_2023,
                    padding: "10px 25px",
                    color: "white",
                    border: "none",
                    fontSize: "18px",
                    borderRadius: "10px",
                  }}
                >
                  Scopri di più
                </button>
              </a>
            </div>
            <div class="div2">
              <LazyLoadImage
                src={Cover23}
                alt="cover edizione 2023"
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div class="div3">
              <h2
                style={{
                  fontSize: "60px",
                  color: global.COLORS.ROSSO_TED_2023,
                }}
              >
                ACT: LEAD THE CHANGE
              </h2>
              <p
                style={{
                  fontSize: "30px",
                  color: global.COLORS.ROSSO_TED_2023,
                }}
              >
                29 Aprile 2022
              </p>
              <p>
                Il titolo della prima edizione del TEDxSapienzaU è stato ACT -
                Lead the change. Come da linee guida TEDx, i dialoghi che sono
                stati presentati hanno riguardato diverse materie ed aree
                tematiche interconnesse, prediligendo le migliori idee ed
                esperienze ispiratrici: Action: La cultura dell'azione contro la
                cultura dell'inerzia e il ruolo della cittadinanza attiva
                nell'educazione del futuro. [...]
              </p>
              <a className="link" href={"/edizione2022"}>
                <button
                  style={{
                    backgroundColor: global.COLORS.ROSSO_TED_2023,
                    padding: "10px 25px",
                    color: "white",
                    border: "none",
                    fontSize: "18px",
                    borderRadius: "10px",
                  }}
                >
                  Scopri di più
                </button>
              </a>
            </div>
            <div class="div4">
              {" "}
              <LazyLoadImage
                src={Cover22}
                alt="cover edizione 2023"
                style={{
                  height: "100%",
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />{" "}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="header gradient-background-team2023 "
          style={{
            padding: "10px",
            textAlign: "center",
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
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            EDIZIONI
          </h1>
        </div>

        {/**CONTENT */}

        <div
          className="container mb-5 mt-5"
          style={{ fontFamily: "GothamBold" }}
        >
          <div class="mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              BACK TO ZERO
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              15 Novembre 2023
            </p>
            <p>
              Il nostro obiettivo è azzerare, ricercare un punto zero: le
              disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni
              e i rifiuti. Ridurre quei fattori inquinanti che rallentano la
              crescita della nostra società, peggiorando la qualità della nostra
              vita. Riconsiderare noi stessi ed il nostro modo di confrontarci.
              Imparare ed interagire con la società contemporanea, con le arti e
              le scienze. [...]
            </p>
            <a className="link" href={"/edizione2023"}>
              <button
                style={{
                  backgroundColor: global.COLORS.ROSSO_TED_2023,
                  padding: "10px 25px",
                  color: "white",
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
              >
                Scopri di più
              </button>
            </a>
          </div>
          <div>
            <LazyLoadImage
              src={Cover23}
              alt="cover edizione 2023"
              style={{
                height: "500px",
                boxSizing: "border-box",
                borderRadius: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="mt-5 mb-2">
            <h2
              style={{
                fontSize: "40px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              ACT: LEAD THE CHANGE
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              29 Aprile 2022
            </p>
            <p>
              Il titolo della prima edizione del TEDxSapienzaU è stato ACT -
              Lead the change. Come da linee guida TEDx, i dialoghi che sono
              stati presentati hanno riguardato diverse materie ed aree
              tematiche interconnesse, prediligendo le migliori idee ed
              esperienze ispiratrici: Action: La cultura dell'azione contro la
              cultura dell'inerzia e il ruolo della cittadinanza attiva
              nell'educazione del futuro. [...]
            </p>
            <a className="link" href={"/edizione2022"}>
              <button
                style={{
                  backgroundColor: global.COLORS.ROSSO_TED_2023,
                  padding: "10px 25px",
                  color: "white",
                  border: "none",
                  fontSize: "18px",
                  borderRadius: "10px",
                }}
              >
                Scopri di più
              </button>
            </a>
          </div>
          <div>
            <LazyLoadImage
              src={Cover22}
              alt="cover edizione 2023"
              style={{
                height: "500px",
                boxSizing: "border-box",
                borderRadius: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
