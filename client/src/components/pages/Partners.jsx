/* -------------------- React's components import -------------------- */
import React, { useState, Suspense } from "react";
import { useOutletContext } from "react-router";

/* -------------------- components and resources import -------------------- */
import global from "../../resources/global.json";
import PartnersMobileLayout24 from "../components/partners24/PartnersMobileLayout24"; // Partners 2024
import PartnersDesktopLayout24 from "../components/partners24/PartnersDesktopLayout24"; // Partners 2024

/* -------------------- css files import -------------------- */
import "../../resources/styles/partnerstyle.css";
import "../../resources/styles/partnercommunity.css";
import "../../index.css";

export default function Partners() {
  const [activeYear] = useState(24); // active year variable
  const [windowSize] = useOutletContext(); // window's size variable
  // #region --- lazy imports ---
  const PartnersLayout22 = React.lazy(() =>
    import("../components/PartnersLayout22")
  );
  const PartnersLayout23 = React.lazy(() =>
    import("../components/PartnersLayout23")
  );
  const ErrorPage = React.lazy(() => import("./ErrorPage"));
  // #endregion

  function selectYear() {
    if (activeYear === 22)
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <PartnersLayout22 />
        </Suspense>
      );
    else if (activeYear === 23)
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <PartnersLayout23 />
        </Suspense>
      );
    else if (activeYear === 24)
      return windowSize > global.UTILS.TABLET_WIDTH ? (
        <PartnersDesktopLayout24 />
      ) : (
        <PartnersMobileLayout24 />
      );
    else
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorPage />
        </Suspense>
      );
  }

  return (
    <>
      {selectYear()}
    </>
  );
}
