import React from "react";
import { useOutletContext } from "react-router";
import SapienzaUDesktop from "../pages/SapienzaUDesktop";
import SapienzaUMobile from "../pages/SapienzaUMobile";

export default function AssociazioneSapienzaU() {
  const [windowSize] = useOutletContext();

  if (windowSize > 992) {
    return <SapienzaUDesktop />;
  } else {
    return <SapienzaUMobile />;
  }
}
