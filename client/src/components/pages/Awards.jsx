import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import Cover23 from "../images/awards23/header_awards23.webp";
import Cover22 from "../images/awards22/awards2022.webp";
import global from "../../resources/global.json";
import "../../resources/styles/awardsstyle.css";
import "../../index.css";

export default function Awards() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > 992) {
    return (
      <>
        <div
          className="header gradient-background-awards"
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
            AWARDS
          </h1>
        </div>

        <div className="container-lg mt-3">
          <div class="parent-aw" style={{ fontFamily: "GothamBold" }}>
            <div class="text-top-left-aw">
              <h2
                style={{
                  fontSize: "60px",
                  color: "black",
                }}
              >
                AWARDS 2023
              </h2>
              <p
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              >
                18 Aprile 2023
              </p>
              <p>
                Il concorso Back to Zero Awards è organizzato dal Comitato
                TEDxSapienzaU ed ha lo scopo di promuovere idee di valore in
                linea con il motto TED “Ideas worth spreading”, offrendo ai
                vincitori la prestigiosa opportunità di esibirsi sul palco
                dell’edizione 2023 del TEDxSapienzaU. I 5 vincitori del concorso
                TEDxSapienzaU Awards, 3 Speaker e 2 Artist, vengono premiati sul
                palco della finale e hanno l’occasione di esibirsi durante
                l’evento TEDxSapienzaU 2023!
              </p>
              <a className="link" href={"/awards2023"}>
                <button
                  style={{
                    backgroundColor: global.COLORS.GIALLO_AWARDS,
                    padding: "10px 25px",
                    color: "black",
                    border: "none",
                    fontSize: "18px",
                    borderRadius: "10px",
                    marginBottom: "40px",
                  }}
                >
                  Scopri di più
                </button>
              </a>
            </div>
            <div class="image-top-right-aw">
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
            <div class="text-bottom-right-aw">
              <h2
                style={{
                  fontSize: "60px",
                  color: "black",
                }}
              >
                AWARDS 2022
              </h2>
              <p
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              >
                29 Aprile 2022
              </p>
              <p></p>
              <a className="link" href={"/awards2022"}>
                <button
                  style={{
                    backgroundColor: global.COLORS.GIALLO_AWARDS,
                    padding: "10px 25px",
                    color: "black",
                    border: "none",
                    fontSize: "18px",
                    borderRadius: "10px",
                    marginBottom: "40px",
                  }}
                >
                  Scopri di più
                </button>
              </a>
            </div>
            <div class="image-bottom-left-aw">
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
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="header gradient-background-awards "
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
            className="font-weight-bold mb-5"
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
              marginTop: "100px",
            }}
          >
            AWARDS
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
              AWARDS 2023
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              18 Aprile 2023
            </p>
            <p>
              Il concorso Back to Zero Awards è organizzato dal Comitato
              TEDxSapienzaU ed ha lo scopo di promuovere idee di valore in linea
              con il motto TED “Ideas worth spreading”, offrendo ai vincitori la
              prestigiosa opportunità di esibirsi sul palco dell’edizione 2023
              del TEDxSapienzaU. I 5 vincitori del concorso TEDxSapienzaU
              Awards, 3 Speaker e 2 Artist, vengono premiati sul palco della
              finale e hanno l’occasione di esibirsi durante l’evento
              TEDxSapienzaU 2023!
            </p>
            <a className="link" href={"/edizione2023"}>
              <button
                style={{
                  backgroundColor: global.COLORS.GIALLO_AWARDS,
                  padding: "10px 25px",
                  color: "black",
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
              AWARDS 2022
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              29 Aprile 2022
            </p>
            <p></p>
            <a className="link" href={"/edizione2022"}>
              <button
                style={{
                  backgroundColor: global.COLORS.GIALLO_AWARDS,
                  padding: "10px 25px",
                  color: "black",
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
