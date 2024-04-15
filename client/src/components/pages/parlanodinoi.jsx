import "../../index.css";
import React, { useState } from "react";
import Image11 from "../images/parlanodinoi/TedX Main-25.jpg";
import Image13 from "../images/parlanodinoi/TedX Main-81.jpg";
import Image14 from "../images/parlanodinoi/TedX Main-318.jpg";
import Image15 from "../images/parlanodinoi/TedX Main-314.jpg";

import Carousel from "react-bootstrap/Carousel";
import global from "../../resources/global.json";
import { useOutletContext } from "react-router";

export default function ParlanoDiNoi() {
  const [windowSize, setWindowSize] = useOutletContext();

  if (windowSize > global.UTILS.MOBILE_WIDTH) {
    return (
      <>
        <section
          style={{
            marginTop: "90px",
            marginBottom: "-50px",
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <div className="marketing">
            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center"></div>

              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="paragraph"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "20px",
                  }}
                >
                  <i>
                    “Il TEDx si propone di studiare, discutere, confrontarsi su
                    temi complessi, ragionare, conoscere cose nuove. Tutto
                    questo è un potentissimo motore che muove le menti delle
                    persone e le apre a nuove idee...”
                  </i>
                </p>
                <p
                  className="paragraph"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "16px",
                  }}
                >
                  <i>-Franco Stivali, CEO Gruppo FS italiane</i>
                </p>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="paragraph"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "20px",
                  }}
                >
                  <i>
                    “Lo scopo dell'iniziativa è di riunire menti, idee e storie
                    di successo in modo che possano contaminarsi a vicenda ed
                    essere spunto di riflessione per il pubblico in sala.”
                  </i>
                </p>
                <p
                  className="paragraph"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "16px",
                  }}
                >
                  <i>-Mirko Giustini, Millionare's author</i>
                </p>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center"></div>
              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="paragraph"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "20px",
                  }}
                >
                  <i>
                    “L'obiettivo di TEDxSapienzaU è quello di agire promuovendo,
                    ad esempio, una cultura dell'azione contro quella
                    dell'inerzia. ”
                  </i>
                </p>
                <p
                  className="paragraph"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "16px",
                  }}
                >
                  <i>-Rivista MicroFinanza</i>
                </p>
              </div>
            </div>

            {/** CAROUSEL */}
            <div className="container mb-5 mt-5">{CarouselComponent()}</div>
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
            marginTop: "80px",
            marginBottom: "-50px",
            backgroundColor: global.COLORS.NERO,
          }}
        >
          <div className="marketing">
            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center"></div>

              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="paragraph"
                  style={{
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "18px",
                    color: "#FFF",
                  }}
                >
                  <i>
                    “Il TEDx si propone di studiare, discutere, confrontarsi su
                    temi complessi, ragionare, conoscere cose nuove. Tutto
                    questo è un potentissimo motore che muove le menti delle
                    persone e le apre a nuove idee...”
                  </i>
                </p>
                <p
                  className="paragraph"
                  style={{
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "14px",
                    color: "#FFF",
                  }}
                >
                  <i>-Franco Stivali, CEO Gruppo FS italiane</i>
                </p>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="paragraph"
                  style={{
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "18px",
                    color: "#FFF",
                  }}
                >
                  <i>
                    “Lo scopo dell'iniziativa è di riunire menti, idee e storie
                    di successo in modo che possano contaminarsi a vicenda ed
                    essere spunto di riflessione per il pubblico in sala.”
                  </i>
                </p>
                <p
                  className="paragraph"
                  style={{
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "14px",
                    color: "#FFF",
                  }}
                >
                  <i>-Mirko Giustini, Millionare's author</i>
                </p>
              </div>
            </div>

            <hr className="featurette-divider"></hr>

            <div className="row featurette">
              <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center"></div>
              <div className="col-md-7 order-md-2 mt-3">
                <p
                  className="paragraph"
                  style={{
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "18px",
                    color: "#FFF",
                  }}
                >
                  <i>
                    “L'obiettivo di TEDxSapienzaU è quello di agire promuovendo,
                    ad esempio, una cultura dell'azione contro quella
                    dell'inerzia. ”
                  </i>
                </p>
                <p
                  className="paragraph"
                  style={{
                    textAlign: "center",
                    marginLeft: "30px",
                    marginRight: "30px",
                    fontFamily: "Fira sans Extra Condensed",
                    fontSize: "14px",
                    color: "#FFF",
                  }}
                >
                  <i>-Rivista MicroFinanza</i>
                </p>
              </div>
            </div>

            {/** CAROUSEL */}
            <div className="container mb-5 mt-5">{CarouselComponent()}</div>
          </div>
        </section>
      </>
    );
  }
}

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      variant="black"
      style={{ width: "70%", margin: "auto" }}
    >
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image11}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image13}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image14}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-image"
          src={Image15}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
