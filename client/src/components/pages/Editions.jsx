import React, { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router";
import Cover23 from "../images/cover-edizione23.webp";
import Cover22 from "../images/cover-edizione22.webp";
import CoverAwards23 from "../images/awards23/header_awards23.webp";
import CoverAwards22 from "../images/awards22/awards2022.webp";
import global from "../../resources/global.json";
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../resources/styles/editionsstyle.css";
import "../../index.css";

export default function Editions() {
  const [windowSize, setWindowSize] = useOutletContext();

  const boxHeight = 600;

  const EventBox = ({ date, title, description, photo }) => {
    return (
      <div
        className="bento-box"
        style={{
          width: "%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(${photo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: windowSize > global.UTILS.MOBILE_WIDTH ? boxHeight : 400,
        }}
      >
        <h2>{date}</h2>
        <h1 style={{ fontWeight: 700 }}>{title}</h1>
        {windowSize > global.UTILS.MOBILE_WIDTH ? (
          <p style={{ maxWidth: "50%", fontWeight: 600 }}>{description}</p>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        marginTop: global.UTILS.NAV_HEIGHT,
        fontFamily: "Fira Sans Extra Condensed, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#000",
          height: "100px",
          display: "flex",
          alignItems: "center",
          padding: `0 ${global.UTILS.BENTO_BOX_PADDING}`,
          color: global.COLORS.ROSSO_TED_2023,
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "60px" }}>EDIZIONI</h1>
      </div>
      <section
        id="grid-events-container"
        style={{
          color: "#fff",
          backgroundColor: "#000",
          padding: `0 ${global.UTILS.BENTO_BOX_PADDING}`,
          gap: "15px",
        }}
      >
        <EventBox
          date={"15 Novembre 2023"}
          title={"BACK TO ZERO"}
          description={
            "Il nostro obiettivo è azzerare, ricercare un punto zero: le disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni e i rifiuti. Ridurre quei fattori inquinanti che  rallentano la crescita della nostra società, peggiorando la qualità della nostra vita."
          }
          photo={Cover23}
        />
        <EventBox
          date={"18 Aprile 2023"}
          title={"AWARDS 2023"}
          description={
            "  Il concorso Back to Zero Awards è organizzato dal Comitato TEDxSapienzaU ed ha lo scopo di promuovere idee di valore in linea con il motto TED “Ideas worth spreading”, offrendo ai vincitori la prestigiosa opportunità di esibirsi sul palco dell’edizione 2023 del TEDxSapienzaU."
          }
          photo={CoverAwards23}
        />
        <EventBox
          date={"29 Aprile 2022"}
          title={"ACT: LEAD THE CHANGE"}
          description={
            "Il titolo della prima edizione del TEDxSapienzaU è stato ACT - Lead the change. Come da linee guida TEDx, i dialoghi che sono stati presentati hanno riguardato diverse materie ed aree tematiche interconnesse, prediligendo le migliori idee ed esperienze ispiratrici."
          }
          photo={Cover22}
        />
        <EventBox
          date={"29 Aprile 2022"}
          title={"AWARDS 2022"}
          description={""}
          photo={CoverAwards22}
        />
      </section>
    </div>
  );

  // if (windowSize > 992) {
  //   return (
  //     <>
  //       <div className="container-lg mt-3">
  //         <div class="parent" style={{ fontFamily: "GothamBold" }}>
  //           <div class="text-top-left">
  //             <h2
  //               style={{
  //                 fontSize: "60px",
  //                 color: global.COLORS.ROSSO_TED_2023,
  //               }}
  //             >
  //               BACK TO ZERO
  //             </h2>
  //             <p
  //               style={{
  //                 fontSize: "30px",
  //                 color: global.COLORS.ROSSO_TED_2023,
  //               }}
  //             >
  //               15 Novembre 2023
  //             </p>
  //             <p>
  //               Il nostro obiettivo è azzerare, ricercare un punto zero: le
  //               disuguaglianze, i conflitti, i cattivi stili di vita, le
  //               emissioni e i rifiuti. Ridurre quei fattori inquinanti che
  //               rallentano la crescita della nostra società, peggiorando la
  //               qualità della nostra vita. Riconsiderare noi stessi ed il nostro
  //               modo di confrontarci. Imparare ed interagire con la società
  //               contemporanea, con le arti e le scienze. [...]
  //             </p>
  //             <a className="link" href={"/edizione2023"}>
  //               <button
  //                 style={{
  //                   backgroundColor: global.COLORS.ROSSO_TED_2023,
  //                   padding: "10px 25px",
  //                   color: "white",
  //                   border: "none",
  //                   fontSize: "18px",
  //                   borderRadius: "10px",
  //                   marginBottom: "40px",
  //                 }}
  //               >
  //                 Scopri di più
  //               </button>
  //             </a>
  //           </div>
  //           <div class="image-top-right">
  //             <LazyLoadImage
  //               src={Cover23}
  //               alt="cover edizione 2023"
  //               style={{
  //                 height: "100%",
  //                 boxSizing: "border-box",
  //                 borderRadius: "20px",
  //                 maxWidth: "100%",
  //                 maxHeight: "100%",
  //                 width: "100%",
  //                 objectFit: "cover",
  //               }}
  //             />
  //           </div>
  //           <div class="text-bottom-right">
  //             <h2
  //               style={{
  //                 fontSize: "60px",
  //                 color: global.COLORS.ROSSO_TED_2023,
  //               }}
  //             >
  //               ACT: LEAD THE CHANGE
  //             </h2>
  //             <p
  //               style={{
  //                 fontSize: "30px",
  //                 color: global.COLORS.ROSSO_TED_2023,
  //               }}
  //             >
  //               29 Aprile 2022
  //             </p>
  //             <p>
  //               Il titolo della prima edizione del TEDxSapienzaU è stato ACT -
  //               Lead the change. Come da linee guida TEDx, i dialoghi che sono
  //               stati presentati hanno riguardato diverse materie ed aree
  //               tematiche interconnesse, prediligendo le migliori idee ed
  //               esperienze ispiratrici: Action: La cultura dell'azione contro la
  //               cultura dell'inerzia e il ruolo della cittadinanza attiva
  //               nell'educazione del futuro. [...]
  //             </p>
  //             <a className="link" href={"/edizione2022"}>
  //               <button
  //                 style={{
  //                   backgroundColor: global.COLORS.ROSSO_TED_2023,
  //                   padding: "10px 25px",
  //                   color: "white",
  //                   border: "none",
  //                   fontSize: "18px",
  //                   borderRadius: "10px",
  //                   marginBottom: "40px",
  //                 }}
  //               >
  //                 Scopri di più
  //               </button>
  //             </a>
  //           </div>
  //           <div class="image-bottom-left">
  //             <LazyLoadImage
  //               src={Cover22}
  //               alt="cover edizione 2023"
  //               style={{
  //                 height: "100%",
  //                 boxSizing: "border-box",
  //                 borderRadius: "20px",
  //                 maxWidth: "100%",
  //                 maxHeight: "100%",
  //                 width: "100%",
  //                 objectFit: "cover",
  //               }}
  //             />{" "}
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div
  //         className="header gradient-background-team2023 "
  //         style={{
  //           padding: "10px",
  //           textAlign: "center",
  //           color: "#fff",
  //           height: "30vh",
  //           display: "grid",
  //           placeItems: "center",
  //           marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
  //         }}
  //       >
  //         <h1
  //           className="font-weight-bold mb-5"
  //           style={{
  //             fontSize: "60px",
  //             fontWeight: "bold",
  //             fontFamily: "GothamBold",
  //             marginTop: "100px",
  //           }}
  //         >
  //           EDIZIONI
  //         </h1>
  //       </div>

  //       {/**CONTENT */}

  //       <div
  //         className="container mb-5 mt-5"
  //         style={{ fontFamily: "GothamBold" }}
  //       >
  //         <div class="mb-2">
  //           <h2
  //             style={{
  //               fontSize: "40px",
  //               color: global.COLORS.ROSSO_TED_2023,
  //             }}
  //           >
  //             BACK TO ZERO
  //           </h2>
  //           <p
  //             style={{
  //               fontSize: "20px",
  //               color: global.COLORS.ROSSO_TED_2023,
  //             }}
  //           >
  //             15 Novembre 2023
  //           </p>
  //           <p>
  //             Il nostro obiettivo è azzerare, ricercare un punto zero: le
  //             disuguaglianze, i conflitti, i cattivi stili di vita, le emissioni
  //             e i rifiuti. Ridurre quei fattori inquinanti che rallentano la
  //             crescita della nostra società, peggiorando la qualità della nostra
  //             vita. Riconsiderare noi stessi ed il nostro modo di confrontarci.
  //             Imparare ed interagire con la società contemporanea, con le arti e
  //             le scienze. [...]
  //           </p>
  //           <a className="link" href={"/edizione2023"}>
  //             <button
  //               style={{
  //                 backgroundColor: global.COLORS.ROSSO_TED_2023,
  //                 padding: "10px 25px",
  //                 color: "white",
  //                 border: "none",
  //                 fontSize: "18px",
  //                 borderRadius: "10px",
  //               }}
  //             >
  //               Scopri di più
  //             </button>
  //           </a>
  //         </div>
  //         <div>
  //           <LazyLoadImage
  //             src={Cover23}
  //             alt="cover edizione 2023"
  //             style={{
  //               height: "500px",
  //               boxSizing: "border-box",
  //               borderRadius: "20px",
  //               maxWidth: "100%",
  //               maxHeight: "100%",
  //               width: "100%",
  //               objectFit: "cover",
  //               objectPosition: "center",
  //             }}
  //           />
  //         </div>
  //         <div className="mt-5 mb-2">
  //           <h2
  //             style={{
  //               fontSize: "40px",
  //               color: global.COLORS.ROSSO_TED_2023,
  //             }}
  //           >
  //             ACT: LEAD THE CHANGE
  //           </h2>
  //           <p
  //             style={{
  //               fontSize: "20px",
  //               color: global.COLORS.ROSSO_TED_2023,
  //             }}
  //           >
  //             29 Aprile 2022
  //           </p>
  //           <p>
  //             Il titolo della prima edizione del TEDxSapienzaU è stato ACT -
  //             Lead the change. Come da linee guida TEDx, i dialoghi che sono
  //             stati presentati hanno riguardato diverse materie ed aree
  //             tematiche interconnesse, prediligendo le migliori idee ed
  //             esperienze ispiratrici: Action: La cultura dell'azione contro la
  //             cultura dell'inerzia e il ruolo della cittadinanza attiva
  //             nell'educazione del futuro. [...]
  //           </p>
  //           <a className="link" href={"/edizione2022"}>
  //             <button
  //               style={{
  //                 backgroundColor: global.COLORS.ROSSO_TED_2023,
  //                 padding: "10px 25px",
  //                 color: "white",
  //                 border: "none",
  //                 fontSize: "18px",
  //                 borderRadius: "10px",
  //               }}
  //             >
  //               Scopri di più
  //             </button>
  //           </a>
  //         </div>
  //         <div>
  //           <LazyLoadImage
  //             src={Cover22}
  //             alt="cover edizione 2023"
  //             style={{
  //               height: "500px",
  //               boxSizing: "border-box",
  //               borderRadius: "20px",
  //               maxWidth: "100%",
  //               maxHeight: "100%",
  //               width: "100%",
  //               objectFit: "cover",
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
}
