/* -------------------- React's components import -------------------- */
//import React, { useState, Suspense } from "react";
import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
import global from "../../resources/global.json";
import PartnersMobileLayout24 from "../components/sponsors25/PartnersMobileLayout24"; // Partners 2024
import PartnersDesktopLayout24 from "../components/sponsors25/PartnersDesktopLayout24"; // Partners 2024

/* -------------------- css files import -------------------- */
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Sponsors() {
  //const [activeYear] = useState(24); // active year variable
  const [windowSize] = useOutletContext(); // window's size variable

  return windowSize > global.UTILS.TABLET_WIDTH ? (
    <PartnersDesktopLayout24 />
  ) : (
    <PartnersMobileLayout24 />
  );
}
