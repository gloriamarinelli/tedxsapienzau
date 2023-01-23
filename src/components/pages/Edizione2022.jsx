import React, { useState, useEffect } from "react";

import "../../index.css";

export default function Edizione2022() {
  return (
    <>
      <div
        className="header gradient-background-team2022"
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: "gray",
          
          marginBottom: "10px",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          height: "25vh",
          display: "grid",
          placeItems: "left",
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5"
          style={{
            color: "white",
            fontSize: "60px",
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          EDIZIONE 2022
        </h1>
      </div>
      <div>
        <h5>
        Guarda i TEDx Talks dell'Edizione 2022

ACT - Lead The Change

Scopri i nostri Speaker
Conoscili meglio
Ti è piaciuto uno degli speech e vuoi conoscere meglio uno dei nostri speaker?
Dai un'occhata qui
        </h5>
      </div>

      </>
  );
}
