import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ExecutiveTeamCard from "../components/ExecutiveTeamCard";

import "../../index.css";

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

import Image2 from "../images/logo-black.png";
import Image3 from "../images/stage2022.jpeg";
import SpeakerCard from "../components/SpeakerCard";

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
      ></header>

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
            fontSize: "20px",
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
            fontSize: "20px",
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
            fontSize: "20px",
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
            <strong style={{ color: "#EB0028", fontSize: "35px" }}>
              ACTION.
            </strong>{" "}
          </p>
          <p>
            La cultura dell'azione contro la cultura dell'inerzia e il ruolo
            della cittadinanza attiva nell'educazione del futuro.{" "}
          </p>
          <p>
            <strong style={{ color: "#EB0028", fontSize: "35px" }}>
              CROSS-FERTILIZATION.
            </strong>{" "}
          </p>
          <p>
            La predisposizione alla creatività ed empatia, la pop education e i
            nuovi orizzonti della contaminazione tra i saperi.{" "}
          </p>
          <p>
            <strong style={{ color: "#EB0028", fontSize: "35px" }}>
              TRANSFORMATION.
            </strong>{" "}
          </p>
          <p>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "70px",
              }}
            >
              <SpeakerCard
                nomeSpeaker="Giovanna Melandri"
                imgSrc={Action1}
                linkTalk="https://youtu.be/MiGjiZrhAeg"
                bio=""
              />
              <SpeakerCard
                nomeSpeaker="Valeria Trombetta"
                imgSrc={Action2}
                linkTalk="https://youtu.be/zTfHpas8FHM"
                bio=""
              />
              <SpeakerCard
                nomeSpeaker="Fasma"
                imgSrc={Action3}
                linkTalk="https://youtu.be/BTTkcs7F1AY"
                bio=""
              />
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
          <strong style={{ color: "#EB0028" }}>C</strong>
          ROSS-FERTILIZATION
        </p>
        <div
          class="container"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "70px",
            }}
          >
            <SpeakerCard
              nomeSpeaker="Viviana Bottaro"
              imgSrc={Cross1}
              linkTalk=""
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Giusy Amoroso"
              imgSrc={Cross2}
              linkTalk="https://youtu.be/CYC8W7UK0mg"
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Mario Baccini"
              imgSrc={Cross3}
              linkTalk="https://youtu.be/gka0xyU2lJo"
              bio=""
            />
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
          <strong style={{ color: "#EB0028" }}>T</strong>
          RANSFORMATION
        </p>
        <div
          class="container"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "70px",
            }}
          >
            <SpeakerCard
              nomeSpeaker="Vittorio Loreto"
              imgSrc={Transf1}
              linkTalk="https://youtu.be/UadTNZPaxF0"
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Valentina Dallari"
              imgSrc={Transf2}
              linkTalk="https://youtu.be/8gfmJP59Y7g"
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Ewelina Jelenkowska-Lucà"
              imgSrc={Transf3}
              linkTalk="https://youtu.be/aCV40aShbbo"
              bio=""
            />
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
          <strong style={{ color: "#EB0028" }}>TED</strong>
          xSapienzaU AWARDS
        </p>
        <div
          class="container"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "70px",
            }}
          >
            <SpeakerCard
              nomeSpeaker="Volosumarte"
              imgSrc={Awards1}
              linkTalk="https://youtu.be/ZBQguIEJFBo"
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Eleonora Pariset"
              imgSrc={Awards2}
              linkTalk="https://youtu.be/OBaW4Inps4o"
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Arianna Peduzzi"
              imgSrc={Awards3}
              linkTalk="https://youtu.be/C19qjBMT_3Y"
              bio=""
            />
            <SpeakerCard
              nomeSpeaker="Serena Spanò"
              imgSrc={Awards4}
              linkTalk="https://youtu.be/Z2UVvrwMEHs"
              bio=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
