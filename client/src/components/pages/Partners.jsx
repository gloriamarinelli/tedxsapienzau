/* -------------------- React's components import -------------------- */
//import React, { useState, Suspense } from "react";
//import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
//import global from "../../resources/global.json";
import PartnerCard24 from "../components/PartnerCard24";

/* -------------------- css files import -------------------- */
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Partners() {
  //const [activeYear] = useState(24); // active year variable
  //const [windowSize] = useOutletContext(); // window's size variable

  return (
    <div
      className="headerSection"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <PartnerCard24
        title={"Unicredit"}
        imgName={"unicredit.webp"}
        text={"ciao"}
      />
      <PartnerCard24
        title={"Novo Nordisk"}
        imgName={"novo_nordisk.png"}
        text={"ciao"}
      />
      <PartnerCard24
        title={"Autocentri Balduina"}
        imgName={"balduina.webp"}
        text={"ciao"}
      />
      <PartnerCard24
        title={"Hyper Foundry"}
        imgName={"hyper.jpg"}
        text={"ciao"}
      />
    </div>
  );
}
