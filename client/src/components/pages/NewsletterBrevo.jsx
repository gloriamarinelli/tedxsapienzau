import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Iframe from "react-iframe";

export default function NewsletterBrevo() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    /**
     * DESKTOP
     * */
    return (
      <>
        <div
          className="gradient-background"
          style={{
            backgroundColor: "red",
            textAlign: "left",
            display: "grid",
            height: "40vh",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5 text-center"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            Resta aggiornato <br />
            Iscriviti anche tu alla newsletter!{" "}
          </h1>
        </div>

        <Iframe
          width="100%"
          height="500"
          src="https://31dfcf3b.sibforms.com/serve/MUIFABcw3TcswjVPMUoHXOXckrtQCP6iHRcUAW_DcMk5loXFpS5fIABCYq42tF7CbyK6_t5hFbETlmDJwDorjy7D3bOmkYFp1Xa3vPmk5CzLH8VGQgnPDYIoerKjrt53a26iGQZwlLPIg9ebQAL9j71Ct1E57ld052nEwl2D1X1pVhvYyEIALI65JapHoA1INZcH9W843TTUhogb"
        ></Iframe>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div
          className="gradient-background"
          style={{
            backgroundColor: "red",
            textAlign: "left",
            display: "grid",
            height: "40vh",
            color: "#fff",
            clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
            placeItems: "center",
            marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5 text-center"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "GothamBold",
            }}
          >
            Resta aggiornato <br />
            Iscriviti anche tu alla newsletter!{" "}
          </h1>
        </div>

        <Iframe
          width="100%"
          height="450"
          src="https://31dfcf3b.sibforms.com/serve/MUIFABcw3TcswjVPMUoHXOXckrtQCP6iHRcUAW_DcMk5loXFpS5fIABCYq42tF7CbyK6_t5hFbETlmDJwDorjy7D3bOmkYFp1Xa3vPmk5CzLH8VGQgnPDYIoerKjrt53a26iGQZwlLPIg9ebQAL9j71Ct1E57ld052nEwl2D1X1pVhvYyEIALI65JapHoA1INZcH9W843TTUhogb"
        ></Iframe>
      </>
    );
  }
}
