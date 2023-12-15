import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import Cover23 from "../images/cover-edizione23.webp";
import Cover22 from "../images/cover-edizione22.webp";
import global from "../../resources/global.json";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Editions() {
  const [windowSize, setWindowSize] = useOutletContext();

  const EditionCard = ({
    title,
    date,
    description,
    linkTo,
    image,
    imagePosition,
  }) => {
    const imageHeight = "700px";
    const mobileImageHeight = "400px";

    if (windowSize > global.UTILS.TABLET_WIDTH) {
      return (
        <div
          style={{
            width: "100%",
            height: "content",
            padding: "20px",
            fontFamily: "GothamBold",
            display: "flex",
            // backgroundColor: "lightgrey",
          }}
        >
          {imagePosition === "left" ? (
            <div style={{ flex: 1 }}>
              <LazyLoadImage
                src={image}
                alt="Cos'èTED"
                width="95%"
                height={imageHeight}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
            </div>
          ) : (
            <></>
          )}
          <div style={{ maxWidth: "50%" }}>
            <h2
              style={{
                fontSize: "60px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              {title}
            </h2>
            <p
              style={{ fontSize: "30px", color: global.COLORS.ROSSO_TED_2023 }}
            >
              {date}
            </p>
            <p>{description}</p>
            <a className="link" href={linkTo}>
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
          {imagePosition === "right" ? (
            <div style={{ flex: 1 }}>
              <LazyLoadImage
                src={image}
                alt="Cos'èTED"
                width="95%"
                height={imageHeight}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "10px",
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    } else {
      /** MOBILE */
      return (
        <div
          style={{
            width: "100%",
            height: "content",
            padding: "20px",
            fontFamily: "GothamBold",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: "lightgrey",
          }}
        >
          <div style={{ flex: 1 }}>
            <LazyLoadImage
              src={image}
              alt="Cos'èTED"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
                width: "550px",
                height: "350px",
              }}
            />
          </div>
          <div style={{ maxWidth: "80%" }}>
            <h2
              style={{
                fontSize: "60px",
                color: global.COLORS.ROSSO_TED_2023,
              }}
            >
              {title}
            </h2>
            <p
              style={{ fontSize: "30px", color: global.COLORS.ROSSO_TED_2023 }}
            >
              {date}
            </p>
            <p>{description}</p>
            <a className="link" href={linkTo}>
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
        </div>
      );
    }
  };

  if (windowSize > global.UTILS.TABLET_WIDTH) {
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
        <div className="container marketing mb-5 d-flex flex-column gap-2">
          <EditionCard
            title="BACK TO ZERO"
            date="15 Novembre 2023"
            description="Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che rallentano la crescita della nostra società, peggiorando la qualità della nostra vita. Riconsiderare noi stessi ed il nostro modo di confrontarci. Imparare ed interagire con la società contemporanea, con le arti e le scienze. [...]"
            linkTo="/edizione2023"
            image={Cover23}
            imagePosition="left"
          />
          <EditionCard
            title="ACT: LEAD THE CHANGE"
            date="29 Aprile 2022"
            description="Il titolo della prima edizione del TEDxSapienzaU è stato ACT - Lead the change. Come da linee guida TEDx, i dialoghi che sono stati presentati hanno riguardato diverse materie ed aree tematiche interconnesse, prediligendo le migliori idee ed esperienze ispiratrici: Action: La cultura dell'azione contro la cultura dell'inerzia e il ruolo della cittadinanza attiva nell'educazione del futuro. [...]"
            linkTo="/edizione2022"
            image={Cover22}
            imagePosition="right"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="header gradient-background-team2023"
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
        <div className="marketing mb-5 d-flex flex-column gap-2">
          <EditionCard
            title="BACK TO ZERO"
            date="15 Novembre 2023"
            description="Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che rallentano la crescita della nostra società, peggiorando la qualità della nostra vita. Riconsiderare noi stessi ed il nostro modo di confrontarci. Imparare ed interagire con la società contemporanea, con le arti e le scienze. [...]"
            linkTo="/edizione2023"
            image={Cover23}
          />
          <EditionCard
            title="ACT: LEAD THE CHANGE"
            date="29 Aprile 2022"
            description="Il titolo della prima edizione del TEDxSapienzaU è stato ACT - Lead the change. Come da linee guida TEDx, i dialoghi che sono stati presentati hanno riguardato diverse materie ed aree tematiche interconnesse, prediligendo le migliori idee ed esperienze ispiratrici: Action: La cultura dell'azione contro la cultura dell'inerzia e il ruolo della cittadinanza attiva nell'educazione del futuro. [...]"
            linkTo="/edizione2022"
            image={Cover22}
          />
        </div>
      </>
    );
  }
}
