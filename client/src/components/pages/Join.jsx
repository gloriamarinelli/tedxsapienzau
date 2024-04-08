import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Iframe from "react-iframe";
import backgroundVolunteers from "../images/volunteers.webp"

export default function Join() {
  const state = useLocation().state;
  const [windowSize, setWindowSize] = useOutletContext();
  const [cat, setCat] = useState(state?.cat || "");
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (windowSize > 992) {
    /**
     * DESKTOP
     */
    return (
      <>
        <section
          style={{
            backgroundColor: global.COLORS.NERO,
            marginTop: global.UTILS.NAV_HEIGHT,
            padding: "10px",
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
              //marginRight: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1
              className="font-weight-bold mt-5 mb-5"
              style={{
                fontSize: "120px",
                fontWeight: "bold",
                margin: "0",
                color: global.COLORS.ROSSO_TED,
              }}
            >
              JOIN US
            </h1>
          </div>
        </section>
        <section
          style={{
            backgroundColor: global.COLORS.NERO,
            padding: "10px",
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
              //marginRight: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1
              className="font-weight-bold mt-5 mb-5"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                margin: "0",
                color: global.COLORS.BIANCO,
              }}
            >
              Le candidature per far parte del team sono chiuse, ma non per
            sempre.<br></br> Compila il form qui sotto per essere contattato
            quando riapriremo le candidature!
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
              : `calc(130vh - ${global.UTILS.NAV_HEIGHT})`,
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        
        <div
          id="right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `url(${backgroundVolunteers})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
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
            style="display: block;margin-top: 0;margin-left: auto;margin-right: auto;max-width: 100%;"
          ></Iframe>
        </div>
      </section>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <section
          style={{
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
            marginTop: global.UTILS.NAV_HEIGHT,
            padding: "10px",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div
            className="header"
            style={{
              width: "98%",
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
              className="font-weight-bold"
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: global.COLORS.ROSSO_TED,
              }}
            >
              JOIN US
            </h1>
          </div>
        </section>
        <section
          style={{
            backgroundColor: global.COLORS.NERO, //! Cambiare colore
            padding: "10px",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            placeItems: "center",
            display: "grid",
          }}
        >
          <div
            className="header"
            style={{
              width: "98%",
              height: "100%",
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
              className="font-weight-bold"
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: global.COLORS.BIANCO,
              }}
            >
              Le candidature per far parte del team sono chiuse, ma non per
            sempre.<br></br> Compila il form qui sotto per essere contattato
            quando riapriremo le candidature!
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
              : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        
        <div
          id="right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "100%" : "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `url(${backgroundVolunteers})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            display: "flex",
            
            
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
            style="display: block;margin-top: 0;margin-left: auto;margin-right: auto;max-width: 100%;"
          ></Iframe>
        </div>
      </section>

       
      </>
    );
  }
}
