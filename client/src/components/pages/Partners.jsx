/* -------------------- React's components import -------------------- */
import React, { useState } from "react";
import { useOutletContext } from "react-router";
import Stack from "@mui/material/Stack";

/* -------------------- components and resources import -------------------- */
import global from "../../resources/global.json";
import BasicChips from "../components/BasicChips.jsx";
import PartnersLayout22 from "../components/PartnersLayout22.jsx"; // Partners 2022
import PartnersLayout23 from "../components/PartnersLayout23.jsx"; // Partners 2023
import PartnersMobileLayout24 from "../components/partners24/PartnersMobileLayout24"; // Partners 2024
import PartnersDesktopLayout24 from "../components/partners24/PartnersDesktopLayout24"; // Partners 2024

/* -------------------- css files import -------------------- */
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Partners() {
  const [activeYear, setActiveYear] = useState(24); // active year variable
  const [windowSize] = useOutletContext(); // window's size variable
  const [selectedChip, setSelectedChip] = useState(null);

  function handleYearChips() {
    const chips = [24, 23, 22].map((year) => {
      return (
        <BasicChips
          key={year}
          year={year}
          active={year === activeYear}
          onClick={() => {
            if (year !== activeYear) {
              setActiveYear(year);
              setSelectedChip(null);
            }
          }}
        />
      );
    });
    return chips;
  }

  function chooseYear() {
    if (activeYear === 22) return <PartnersLayout22 />;
    else if (activeYear === 23) return <PartnersLayout23 />;
    else {
      return windowSize > global.UTILS.TABLET_WIDTH ? (
        <PartnersDesktopLayout24 />
      ) : (
        <PartnersMobileLayout24 />
      );
    }
  }

  return (
    <div
      id="partners_ext_div"
      style={{ paddingTop: "100px", background: "black" }}
    >
      <div id="year_chips_div">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          useFlexGap
          flexWrap="wrap"
          paddingBottom="3vh"
        >
          {handleYearChips()}
        </Stack>
      </div>
      {chooseYear()}
    </div>
  );
}
