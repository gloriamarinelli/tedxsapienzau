import React from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import Iframe from "react-iframe";
import { Grid } from "@react-three/drei";
import Card from "react-bootstrap/Card";
import { Color } from "three";

export default function NewsletterBrevo() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.TABLET_WIDTH) {
    /**
     * DESKTOP
     * */
    return (
      <>
        <div style={{ backgroundColor: "#000000" }}>
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
          <div className="container">
            <div className="row">
              <div className="col">
                <Card
                  style={{
                    fontFamily: "Fira Sans Extra Condensed",
                    background: "#191919",
                    maxWidth: "400",
                    maxHeight: "400",
                    borderRadius: "20px",
                    marginTop: "40px",
                    padding: "10px",
                    fontSize: "20px",
                    paddingBottom: "95px",
                  }}
                >
                  <h1
                    class="fira-sans"
                    style={{
                      color: "#FFFFFF",
                      padding: "20px",
                      fontSize: "60px",
                    }}
                  >
                    <extra>
                      <condensed-extrabold>
                        NON PERDERE<br></br> IL NOSTRO <br></br> PROSSIMO EVENTO
                      </condensed-extrabold>
                    </extra>
                  </h1>
                  <h5 style={{ color: "#FFFFFF", padding: "20px" }}>
                    Compila il form per rimanere aggiornato sulle nostre
                    attività{" "}
                  </h5>
                </Card>
              </div>
              <div className="col">
                <Iframe
                  width="100%"
                  height="700px"
                  src="https://31dfcf3b.sibforms.com/serve/MUIFADk8q-909kd_RTTgSFBhqjYmtLW7GUm5kzfIZOBZeTCFkY5_8mGGhZ0dgLLIJz-BhtEElTz-qP_OPFbdktIf9F4waVbrtVpLvaYFLMvVNH8Wm8YHO5Lh6EzAPnVNx0ZgrWUvr9L4Zm4YQ8Z9kDXhvFlRnb410M2sgJuk--XSZCy8jPew7q55QKHmF2lar1OHnqUJ7LrcV5vK"
                  frameborder="0"
                  allowfullscreen
                  style="display: block;margin-top: 0;margin-left: auto;margin-right: auto;max-width: 100%;"
                ></Iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    /**
     * MOBILE
     */
    return (
      <>
        <div style={{ backgroundColor: "#000000" }}>
          <div
            className="gradient-background"
            style={{
              padding: "10px",
              textAlign: "center",
              color: "#fff",
              height: "30vh",
              display: "grid",
              placeItems: "center",
              marginTop: "30px",
            }}
          >
            <h1
              className="font-weight-bold mb-5"
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                fontFamily: "GothamBold",
                marginTop: "80px",
              }}
            >
              Resta aggiornato <br />
              Iscriviti anche tu alla newsletter!{" "}
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="row">
                <Card
                  style={{
                    display: "flex",
                    fontFamily: "Fira Sans Extra Condensed",
                    background: "#191919",
                    //width: "300px",
                    width: "85%",
                    height: "300px",
                    borderRadius: "20px",
                    marginTop: "40px",
                    padding: "0px",
                    fontSize: "20px",
                    paddingBottom: "10px",
                    marginLeft: "30px",
                    marginRight: "30px",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h1
                    class="fira-sans"
                    style={{
                      color: "#FFFFFF",
                      padding: "20px",
                      fontSize: "150%",
                    }}
                  >
                    <extra>
                      <condensed-extrabold>
                        NON PERDERE<br></br> IL NOSTRO <br></br> PROSSIMO EVENTO
                      </condensed-extrabold>
                    </extra>
                  </h1>
                  <h5
                    style={{
                      color: "#FFFFFF",
                      padding: "15px",
                      fontSize: "100%",
                    }}
                  >
                    Compila il form <br></br> qui sotto <br></br> per rimanere
                    aggiornato <br></br> sulle nostre attività{" "}
                  </h5>
                </Card>
              </div>
              <div className="row">
                <Iframe
                  width="100%"
                  height="700px"
                  src="https://31dfcf3b.sibforms.com/serve/MUIFADk8q-909kd_RTTgSFBhqjYmtLW7GUm5kzfIZOBZeTCFkY5_8mGGhZ0dgLLIJz-BhtEElTz-qP_OPFbdktIf9F4waVbrtVpLvaYFLMvVNH8Wm8YHO5Lh6EzAPnVNx0ZgrWUvr9L4Zm4YQ8Z9kDXhvFlRnb410M2sgJuk--XSZCy8jPew7q55QKHmF2lar1OHnqUJ7LrcV5vK"
                  frameborder="0"
                  allowfullscreen
                  style="display: block;margin-top: 0;margin-left: auto;margin-right: auto;max-width: 100%;"
                ></Iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
