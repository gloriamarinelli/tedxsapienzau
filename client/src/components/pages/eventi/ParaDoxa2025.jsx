import React, { Suspense, useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router";
import global from "../../../resources/global.json";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useTranslation, Trans } from "react-i18next";
import { useControls, Leva } from "leva";
import gsap from "gsap";
import * as THREE from "three";
// import CorniceParadoxaPersona from "../images/paradoxa25/cornice_paradoxa_persona.webp";
import CorniceParadoxaPersona from "../../images/paradoxa25/cornice_paradoxa_persona_v3.webp";
import Iframe from "react-iframe";
import "@fontsource-variable/bricolage-grotesque/index.css";
import Nardi from "../../images/paradoxa25/nardi_poster.webp";
import Dapoto from "../../images/paradoxa25/dapoto_poster.webp";
import Saltarelli from "../../images/paradoxa25/saltarelli_poster.webp";
import Pasatu from "../../images/paradoxa25/pasatu_poster.webp";
import Abbozzo from "../../images/paradoxa25/abbozzo_poster.webp";
import Panepinto from "../../images/paradoxa25/panepinto_poster.webp";
import Azzali from "../../images/paradoxa25/azzali_poster.webp";
import Moretti from "../../images/paradoxa25/moretti_poster.webp";
import Kento from "../../images/paradoxa25/kento_poster.webp";
import Armaroli from "../../images/paradoxa25/armaroli_poster.webp";

import SpeakerCard from "../../components/SpeakerCard";

function ObjModel(props) {
  const groupRef = useRef(null);
  const modelRef = useRef(null);

  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3d_models/logo3d_paradoxa.obj`
  );

  const scaleRatio = 0.01;

  useEffect(() => {
    console.log(obj);
    const boundingBox = new THREE.Box3().setFromObject(obj);
    const center = boundingBox.getCenter(new THREE.Vector3());

    console.log(boundingBox);
    console.log(center);

    // Position the model so its center is at the origin of the group
    if (modelRef.current) {
      modelRef.current.position.set(-center.x, -center.y, -center.z);
    }

    // Create burst rotation animation
    if (groupRef.current) {
      const createBurstRotation = () => {
        gsap.to(groupRef.current.rotation, {
          y: `+=${Math.PI * 2}`, // Rotate 360 degrees from current position
          duration: 4,
          ease: "elastic.out(1,0.5)", // Snappy rotation with slight overshoot
          onComplete: () => {
            if (!groupRef.current) return;
            // Ensure rotation value stays manageable
            groupRef.current.rotation.y %= Math.PI * 2;
          },
        });
      };

      // Initial rotation
      createBurstRotation();

      // Set up interval for repeated rotations
      const intervalId = setInterval(createBurstRotation, 8000);

      // Cleanup
      return () => clearInterval(intervalId);
    }
  }, [obj]);

  return (
    <group ref={groupRef} {...props}>
      <primitive
        ref={modelRef}
        object={obj}
        scale={[scaleRatio, scaleRatio, scaleRatio]}
        rotation={[
          props.objectRotation.rotationX,
          props.objectRotation.rotationY,
          props.objectRotation.rotationZ,
        ]}
      />
    </group>
  );
}

const getShowMore = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      color: "#fff",
      fontWeight: "bold",
      fontFamily: "Bricolage Grotesque Variable",
      padding: "0 0 80px 0",
      transition: "0.5s all",
    }}
  >
    <p>Biglietto gratuito disponibile</p>
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 15L13 22L25 15" stroke="white" strokeWidth="2" />
      <path
        d="M1 8L13 15L25 8"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <path
        d="M1 0.999999L13 8L25 1"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const getTickets = (windowSize, bgColor, hover, setHover) => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "#000",
        padding:
          windowSize < global.UTILS.BIG_TABLET_WIDTH
            ? "34px 34px 0px 34px"
            : "34px",
        flexWrap: "wrap",
      }}
    >
      <div
        id="main-container"
        style={{
          width: "100%",
          height: "100%",
          padding: global.UTILS.BENTO_BOX_PADDING,
          borderRadius: global.UTILS.BENTO_BOX_PADDING,
          backgroundColor: bgColor,
          backgroundImage: `url(${CorniceParadoxaPersona})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          fontFamily: "'Bricolage Grotesque', sans-serif",
          position: "relative",
          transition: "background-color 4s ease-in-out",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection:
              windowSize < global.UTILS.BIG_TABLET_WIDTH ? "column" : "row",
            justifyContent:
              windowSize < global.UTILS.BIG_TABLET_WIDTH
                ? "center"
                : "space-between",
            alignItems: "center",
            width: "100%",
            textAlign:
              windowSize < global.UTILS.BIG_TABLET_WIDTH ? "center" : "left",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              padding: "20px",
              paddingLeft:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "0px" : "80px",
            }}
          >
            <h1
              style={{
                fontSize: windowSize > 1245 ? "8vh" : "4vh",
                fontWeight: 700,
                maxWidth: "20ch",
                color: "#FFFFFF",
                marginBottom:
                  windowSize < global.UTILS.BIG_TABLET_WIDTH ? "30px" : "10px",
                marginTop:
                  windowSize < global.UTILS.BIG_TABLET_WIDTH ? "70px" : "0px",
              }}
            >
              <extra>
                <condensed-extrabold>11 Aprile 2025</condensed-extrabold>
              </extra>
            </h1>
            <h1
              style={{
                fontSize: windowSize > 1245 ? "4vh" : "2vh",
                fontWeight: 700,
                maxWidth: "20ch",
                color: "#FFFFFF",
              }}
            >
              <extra>
                <condensed-extrabold>Aula Magna, Rettorato</condensed-extrabold>
              </extra>
            </h1>
            <h1
              style={{
                fontSize: windowSize > 1245 ? "4vh" : "2vh",
                fontWeight: 700,
                maxWidth: "40ch",
                color: "#FFFFFF",
              }}
            >
              <extra>
                <condensed-extrabold>
                  Sapienza Università di Roma
                </condensed-extrabold>
              </extra>
            </h1>
          </div>

          <div
            style={{
              paddingRight:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "0px" : "80px",
              marginTop:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "20px" : "0px",
              marginBottom:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "70px" : "0px",
            }}
          >
            <a
              href="https://www.eventbrite.it/e/biglietti-tedxsapienzau-2025-para-doxa-1267667550769"
              type="button"
              class="btn btn-light"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                width:
                  windowSize < global.UTILS.BIG_TABLET_WIDTH
                    ? "200px"
                    : "400px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                borderRadius: "8px",
                backgroundColor: hover ? "#FF009D" : "white",
                transition: "background-color 0.3s ease",
                color: hover ? "white" : "black",
              }}
            >
              BIGLIETTO GRATUITO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ParaDoxa2025() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const [hover, setHover] = useState(false);
  const [objectRotation, setObjectRotation] = useState({
    rotationX: -1.5,
    rotationY: 0,
    rotationZ: 0,
  });
  const [bgColor, setBgColor] = useState("#000");

  const { rotationX, rotationY, rotationZ } = useControls("Object", {
    rotationX: {
      value: objectRotation.rotationX,
      min: -Math.PI,
      max: Math.PI,
    },
    rotationY: {
      value: objectRotation.rotationY,
      min: -Math.PI,
      max: Math.PI,
    },
    rotationZ: {
      value: objectRotation.rotationZ,
      min: -Math.PI,
      max: Math.PI,
    },
  });

  const CustomCamera = ({ startPosition, startTarget, startZoom }) => {
    const cameraRef = useRef();

    useEffect(() => {
      if (cameraRef.current) {
        cameraRef.current.lookAt(...startTarget);
      }
    }, [startTarget]);

    return (
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={startPosition}
        zoom={startZoom}
      />
    );
  };

  useEffect(() => {
    setObjectRotation({
      rotationX: rotationX,
      rotationY: rotationY,
      rotationZ: rotationZ,
    });
  }, [rotationX, rotationY, rotationZ]);

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
        <div
          id="main-container"
          style={{
            width: "100%",
            height: "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            backgroundColor: bgColor,
            backgroundImage: `url(${CorniceParadoxaPersona})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "'Bricolage Grotesque', sans-serif",
            position: "relative",
            transition: "background-color 4s ease-in-out",
          }}
        >
          <Leva hidden={true} />
          <Canvas gl={{ preserveDrawingBuffer: true }}>
            <CustomCamera
              startPosition={[10, 10, 10]}
              startTarget={[0, 0, 0]}
              startZoom={windowSize > global.UTILS.TABLET_WIDTH ? 330 : 150}
            />
            <ambientLight intensity={10} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <ObjModel objectRotation={objectRotation} />
            </Suspense>
          </Canvas>
          {/* {getShowMore()} */}
        </div>
      </section>
      {/* {getTickets(windowSize, bgColor, hover, setHover)} */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          backgroundColor: "#000",
          padding:
            windowSize < global.UTILS.BIG_TABLET_WIDTH
              ? "34px 34px 0px 34px"
              : "34px",
          flexWrap: "wrap",
        }}
      >
        <div
          id="main-container"
          style={{
            width: "100%",
            height: "100%",
            padding: global.UTILS.BENTO_BOX_PADDING,
            borderRadius: global.UTILS.BENTO_BOX_PADDING,
            fontFamily: "'Bricolage Grotesque', sans-serif",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: windowSize > 1245 ? "6vh" : "3vh",
              fontWeight: 700,
              maxWidth: "20ch",
              color: "#FFFFFF",
              marginBottom:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "30px" : "50px",
              marginTop:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "70px" : "0px",
              paddingLeft:
                windowSize < global.UTILS.BIG_TABLET_WIDTH ? "0px" : "100px",
            }}
          >
            <extra>
              <condensed-extrabold>Gli Speakers</condensed-extrabold>
            </extra>
          </h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            <SpeakerCard
              imgSrc={Nardi}
              nomeSpeaker="Lorenzo Nardi"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Dapoto}
              nomeSpeaker="Alessia Dapoto"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Saltarelli}
              nomeSpeaker="Lorenzo Saltarelli"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Pasatu}
              nomeSpeaker="Pepa Pasatu"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Abbozzo}
              nomeSpeaker="Abbozzo"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Panepinto}
              nomeSpeaker="Carmen Panepinto Zayati"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Azzali}
              nomeSpeaker="Riccardo Azzali"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Moretti}
              nomeSpeaker="Esmeralda Moretti"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Kento}
              nomeSpeaker="Kento"
              showLinkTalk={false}
              event="paradoxa"
            />
            <SpeakerCard
              imgSrc={Armaroli}
              nomeSpeaker="Nicola Armaroli"
              showLinkTalk={false}
              event="paradoxa"
            />
          </div>
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
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%", //la barra bianca sotto dipende dal secondo valore
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
            height: windowSize > global.UTILS.TABLET_WIDTH ? "90%" : "50%", //la barra bianca sotto dipende dal secondo valore
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
