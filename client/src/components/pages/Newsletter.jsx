import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Iframe from "react-iframe";
import backgroundVolunteers from "../images/volunteers.webp";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

export default function Join() {
  const { i18n } = useTranslation();
  const [windowSize] = useOutletContext();

  return (
    <>
      <section
        style={{
          marginTop: global.UTILS.NAV_HEIGHT,
          backgroundColor: global.COLORS.NERO,
          padding: "10px",
          height: windowSize > global.UTILS.TABLET_WIDTH ? "45vh" : "35vh",
          fontFamily: "Fira Sans Extra Condensed, sans-serif",
          placeItems: "center",
          display: "grid",
        }}
      >
        <div
          style={{
            width: "99%",
            height: "80%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            className="font-weight-bold mt-5 mb-5"
            style={{
              fontSize:
                windowSize > global.UTILS.MOBILE_WIDTH ? "40px" : "20px",
              fontWeight: "bold",
              margin: "0",
              color: global.COLORS.BIANCO,
            }}
          >
            <Trans i18nKey="joinus.closed_title" lang={i18n.language} />
          </h1>
        </div>
      </section>
      <section
        style={{
          display: windowSize > global.UTILS.TABLET_WIDTH ? "flex" : "flow",
          justifyContent: "center",
          alignItems: "center",
          height:
            windowSize > global.UTILS.TABLET_WIDTH
              ? `calc(90vh - ${global.UTILS.NAV_HEIGHT})`
              : `calc(130vh - ${global.UTILS.NAV_HEIGHT})`, //mobile 100vh
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        <div
          id="right-container"
          style={{
            width: "100%",
            height: "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `url(${backgroundVolunteers})`,
            backgroundSize: "cover",
            backgroundPosition:
              windowSize > global.UTILS.MOBILE_WIDTH ? "top" : "center",
            display: "flex",
            marginBottom:
              windowSize > global.UTILS.TABLET_WIDTH ? "0px" : "200vw",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Iframe
            width="100%"
            height="100%"
            src="https://31dfcf3b.sibforms.com/serve/MUIFAGmJoAVv_QJEw7JN7zjN0ucQ52-6hwypIyMu_k-q54TIIoobWKD0giKOQ8S7YqLCXNB3yUuLxFNlXbl3W8gMyt3XtVqxLzpyj45GmokToGpsRe0GXDv0pHrPyQRx3hid7ViTQxx5IMWLrIE4jxASnL6FsD8KljM7qf4u2BhDOQDyfN8DcMvh8E73bfRYFULDqOzCSc1ThILU"
            frameborder="0"
            allowfullscreen
            style={{
              display: "block",
              marginTop: "0",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
          ></Iframe>
        </div>
      </section>
    </>
  );
}
