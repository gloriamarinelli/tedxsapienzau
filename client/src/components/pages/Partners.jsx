/* -------------------- React's components import -------------------- */
//import React, { useState, Suspense } from "react";
import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
import global from "../../resources/global.json";
import PartnerCard24 from "../components/PartnerCard24";

/* -------------------- css files import -------------------- */
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Partners() {
  //const [activeYear] = useState(24); // active year variable
  const [windowSize] = useOutletContext(); // window's size variable

  return (
    <div
      id="external_div"
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Fira Sans Extra Condensed,  sans-serif",
      }}
    >
      <div
        id="title_div"
        style={{
          color: "white",
          marginTop: "95px",
        }}
      >
        <h1>Partners</h1>
      </div>
      <div
        id="partners_div"
        style={{
          display: "flex",
          //gridTemplateColumns: "repeat(4, 1fr)",
          flexDirection: windowSize > global.UTILS.TABLET_WIDTH ? "row" :"column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "35px 0",
          height: "auto",
          width: "90%", // 110% to match footer's width
        }}
      >
        <PartnerCard24
          title={"Unicredit"}
          imgName={"unicredit.webp"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}
        />
        <PartnerCard24
          title={"Novo Nordisk"}
          imgName={"novo_nordisk.png"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}
        />
        <PartnerCard24
          title={"Autocentri Balduina"}
          imgName={"balduina.webp"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}
        />
        <PartnerCard24
          title={"Hyper Foundry"}
          imgName={"hyper.jpg"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}
        />
        <PartnerCard24
          title={"Your Personal Trainer"}
          imgName={"ytp.png"}
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}
        />
      </div>
    </div>
  );
}
