import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Volunteers from "../images/volunteers.webp";
import Events from "./Events";
import BlogHome from "./BlogHome";
import MvHome from "./MvHome";
import "../../index.css";
import "../../resources/styles/home.css";
import Iframe from "react-iframe";
import backgroundVideo from "../videos/tedx.mp4";
import { Button } from "react-bootstrap";
import { useTranslation, Trans } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();

  return (
    <div style={{ backgroundColor: "#000" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
          width: "100vw",
          backgroundColor: "#000",
          padding:
            windowSize < global.UTILS.BIG_TABLET_WIDTH
              ? "34px 34px 0px 34px"
              : "34px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/** inizio div video **/}
        <div
          id="main-container"
          style={{
            width: "100%",
            height: "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Volunteers})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
          }}
        >
          {windowSize > global.UTILS.TABLET_WIDTH ? (
            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                objectPosition: "center",
                objectFit: "cover",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          ) : (
            <></>
          )}
          <div
            id="video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))",
            }}
          ></div>
          <div
            style={{
              color: "white",
              zIndex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
            }}
          >
            <h2
              className="mb-5 secondary-text"
              style={{
                fontSize:
                  windowSize > global.UTILS.TABLET_WIDTH ? "2vw" : "0.5vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
              }}
            >
              TEDXSAPIENZAU
            </h2>
            <h1
              style={{
                textAlign: "center",
                fontSize:
                  windowSize > 1245
                    ? "14vh"
                    : windowSize > global.UTILS.MOBILE_WIDTH
                    ? "100px"
                    : "50px",
                fontWeight: 700,
                maxWidth: "13ch",
              }}
            >
              LET'S EXPLORE HOW IT WAS
            </h1>
            <h2
              className="mb-5 secondary-text"
              style={{
                fontSize: "2vw",
                visibility:
                  windowSize > global.UTILS.TABLET_WIDTH
                    ? "initial"
                    : " hidden",
              }}
            >
              BACK TO ZERO 2023
            </h2>
          </div>
        </div>
        {/** fine div video **/}
      </section>
      <MvHome />
      <section>
        <Events withTitle={false} />
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          <a href="/edizioni">
            <Button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                fontWeight: "bold",
                padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
              }}
            >
              {t("home.find_out_more")}
            </Button>
          </a>
        </div>
      </section>
      <section>
        <BlogHome withTitle={true} />
        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: global.UTILS.BENTO_BOX_PADDING,
          }}
        >
          <a href="/blog">
            <Button
              style={{
                backgroundColor: global.COLORS.ROSSO_TED_2023,
                borderColor: "red",
                borderRadius: global.UTILS.BENTO_BOX_PADDING,
                fontWeight: "bold",
                padding: `${global.UTILS.HALF_BENTO_BOX_PADDING} ${global.UTILS.BENTO_BOX_PADDING}`,
              }}
            >
              {t("home.find_out_more")}
            </Button>
          </a>
        </div>
      </section>
      <section
        style={{
          display: windowSize > global.UTILS.TABLET_WIDTH ? "flex" : "flow",
          justifyContent: "center",
          alignItems: "center",
          height:
            windowSize > global.UTILS.TABLET_WIDTH
              ? `calc(80vh - ${global.UTILS.NAV_HEIGHT})`
              : `calc(130vh - ${global.UTILS.NAV_HEIGHT})`,
          width: "100vw",
          backgroundColor: "#000",
          padding: global.UTILS.BENTO_BOX_PADDING,
        }}
      >
        <div
          id="left-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            marginRight: "10px",
            justifyContent: "left",
            alignItems: "flex",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
            }}
          >
            <h1
              className="fira-sans"
              style={{
                textAlign: "left",
                fontSize: windowSize > 1245 ? "6vh" : "5vh",
                fontWeight: 700,
                maxWidth: "20ch",
                color: "#FFFFFF",
              }}
            >
              <extra>
                <condensed-extrabold>
                  <Trans i18nKey="home.next_event" />
                </condensed-extrabold>
              </extra>
            </h1>
            <h5
              className="fira-sans"
              style={{
                textAlign: "left",
                fontSize: windowSize > 1245 ? "4vh" : "3vh",
                fontWeight: 300,
                maxWidth: "30ch",
                color: "#FFFFFF",
              }}
            >
              {t("home.next_event_form")}
            </h5>
          </div>
        </div>
        <div
          id="right-container"
          style={{
            width: "100%",
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: "#191919",
            display: "flex",
            marginLeft: windowSize > global.UTILS.TABLET_WIDTH ? "10px" : "0px",
            marginTop: windowSize > global.UTILS.TABLET_WIDTH ? "0px" : "17px",
            marginBottom:
              windowSize > global.UTILS.TABLET_WIDTH ? "0px" : "200vw",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {i18n.language === "it" ? (
            <Iframe
              width="100%"
              height="100%"
              src="https://31dfcf3b.sibforms.com/serve/MUIFAGmJoAVv_QJEw7JN7zjN0ucQ52-6hwypIyMu_k-q54TIIoobWKD0giKOQ8S7YqLCXNB3yUuLxFNlXbl3W8gMyt3XtVqxLzpyj45GmokToGpsRe0GXDv0pHrPyQRx3hid7ViTQxx5IMWLrIE4jxASnL6FsD8KljM7qf4u2BhDOQDyfN8DcMvh8E73bfRYFULDqOzCSc1ThILU"
              frameborder="0"
              allowfullscreen
              position="absolute"
              style={{
                position: "absolute",
                display: "block",
                margin: 0,
                padding: 0,
                top: 0,
                left: 0,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          ) : (
            <Iframe
              width="100%"
              height="100%"
              src="https://31dfcf3b.sibforms.com/serve/MUIFAKnZWxErJcLmuyvzjpWio3_SOy18jxtNLMON5G4GXZ07vtBK-fSmY0LBBp5pIyZKhgR5ynPFkmhJRkAo3lOojEg8azeYnh9sFMM4RsRNHbY7vOYVljvmYhVNmDNqa5GMoqJGIXFd6sYwIYygz9wXcu0m8mYHzXIA4DZv2fSnGI_VxMHLXcU32UR2EtP9h5CYf9l-_zSPuk1t"
              frameborder="0"
              allowfullscreen
              position="absolute"
              style={{
                position: "absolute",
                display: "block",
                margin: 0,
                padding: 0,
                top: 0,
                left: 0,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          )}
        </div>
      </section>
    </div>
  );
}
