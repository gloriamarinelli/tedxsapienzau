/* -------------------- React's components import -------------------- */
//import React, { useState, Suspense } from "react";
import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
import global from "../../resources/global.json";
import SponsorsMobileLayout25 from "../components/sponsors25/SponsorsMobileLayout25"; // Partners 2024
import SponsorsDesktopLayout25 from "../components/sponsors25/SponsorsDesktopLayout25"; // Partners 2024

/* -------------------- css files import -------------------- */
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Sponsors() {
  //const [activeYear] = useState(24); // active year variable
  const [windowSize] = useOutletContext(); // window's size variable

  return windowSize > global.UTILS.TABLET_WIDTH ? (
    <SponsorsDesktopLayout25 />
  ) : (
    <SponsorsMobileLayout25 />
  );
}
