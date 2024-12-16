import React, { Suspense, useRef, useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  OrthographicCamera,
  useHelper,
} from "@react-three/drei";
import { PointLightHelper, BoxHelper } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import gsap from "gsap";
import { useControls, Leva } from "leva";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Trans, useTranslation } from "react-i18next";

import "../../resources/styles/sapienzaustyle.css";
import { fill } from "three/src/extras/TextureUtils.js";

const verdeSEC = "#95c459";
const violaPEM = "#bb5c9e";
const azzurroLA = "#21bcef";
const rosaERS = "#f089b7";
const arancioneIT = "#f07e2a";
const gialloDEX = "#fab732";
const bluHRA = "#2884c7";
const rossoCEM = "#e9493a";

const ITDescriptionPosition = [0, 2, -3];
const SECDescriptionPosition = [0, 2, 3];
const DEXDescriptionPosition = [0, 1, -3];
const PEMDescriptionPosition = [0, 1, 3];
const HRADescriptionPosition = [0, 0, -3];
const LADescriptionPosition = [0, 0, 3];
const ERSDescriptionPosition = [0, -1, 3];
const CEMDescriptionPosition = [0, -1, -3];

function ObjModel(props) {
  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3d_models/logo3d_U.obj`
  );
  const logoRef = useRef();
  // useHelper(logoRef, BoxHelper, "red");

  const box = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3();
  box.getSize(size);

  const color_mapping = {
    pem: violaPEM,
    la: azzurroLA,
    it: arancioneIT,
    cem: rossoCEM,
    hra: bluHRA,
    sec: verdeSEC,
    dex: gialloDEX,
    "ers sx": rosaERS,
    "ers dx": rosaERS,
    "IT:1": arancioneIT,
    "HRA:1": bluHRA,
    "DEX:1": gialloDEX,
    "CEM:1": rossoCEM,
    "L&A": azzurroLA,
    SEC: verdeSEC,
    "PEM:1": violaPEM,
    ERS: rosaERS,
  };

  const mobileMeshes = [
    "pem",
    "it",
    "dex",
    "la",
    "sec",
    "ers sx",
    "ers dx",
    "cem",
    "hra",
  ];

  // Animation: Floating effect
  useEffect(() => {
    // if (logoRef.current) {
    //   // Floating effect
    //   gsap.to(logoRef.current.position, {
    //     x: "+=0.015",
    //     duration: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "sine.inOut",
    //   });
    // }

    if (props.cameraState === "discoverTeam") {
      const blinkingMeshes = [];

      obj.traverse((child) => {
        if (child instanceof THREE.Mesh && mobileMeshes.includes(child.name)) {
          const originalColor = new THREE.Color(
            child.material.color.getHex() // Save original diffuse color
          );
          const originalEmissive = new THREE.Color(
            child.material.emissive.getHex() // Save original emissive color
          );

          blinkingMeshes.push({
            mesh: child,
            originalColor,
            originalEmissive,
          });

          // Set up a material with a "radioactive green" effect
          const radioactiveGreen = new THREE.Color("#2CFA1F"); // Bright green (hex code)
          const radioactiveEmissive = new THREE.Color(0x00ff00); // Strong green glow

          const team_delays = {
            it: 1.3,
            sec: 1.3,
            pem: 1.4,
            dex: 1.4,
            hra: 1.5,
            la: 1.5,
            cem: 1.6,
            "ers sx": 1.6,
            "ers dx": 1.6,
          };

          const duration = 0.3;
          const delay = team_delays[child.name];
          const repeatDelay = 0.0;
          const repeat = 1;
          const yoyo = true;
          const ease = "sine.inOut";

          // GSAP animation for blinking effect
          gsap.to(child.material.color, {
            r: radioactiveGreen.r,
            g: radioactiveGreen.g,
            b: radioactiveGreen.b,
            duration: duration,
            delay: delay,
            repeatDelay: repeatDelay,
            repeat: repeat,
            yoyo: yoyo,
            ease: ease,
            onComplete: () => {
              child.material.color.copy(originalColor);
            },
          });

          gsap.to(child.material.emissive, {
            r: radioactiveEmissive.r,
            g: radioactiveEmissive.g,
            b: radioactiveEmissive.b,
            duration: duration,
            delay: delay,
            repeatDelay: repeatDelay,
            repeat: repeat,
            yoyo: yoyo,
            ease: ease,
            onComplete: () => {
              child.material.emissive.copy(originalEmissive);
            },
          });

          // Make the glow more intense
          child.material.emissiveIntensity = 2.5; // Adjust intensity (higher = brighter)
        }
      });

      // Cleanup to revert the color and emissive when the state changes
      return () => {
        blinkingMeshes.forEach(({ mesh, originalColor, originalEmissive }) => {
          gsap.killTweensOf(mesh.material.color);
          gsap.killTweensOf(mesh.material.emissive);
          mesh.material.color.copy(originalColor);
          mesh.material.emissive.copy(originalEmissive);
          mesh.material.emissiveIntensity = 0; // Reset emissive intensity
          mesh.material.needsUpdate = true;
        });
      };
    }
  }, [props.cameraState]);

  // loop through all the object meshes and add a material to them
  obj.traverse((child) => {
    if (props.cameraState === "discoverTeam") {
      // if (child instanceof THREE.Mesh && mobileMeshes.includes(child.name)) {
      //   child.material = new THREE.MeshStandardMaterial({
      //     color: "limegreen",
      //     roughness: 1.0,
      //     metalness: 0.3,
      //   });
      // }
    } else if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color:
          child.name in color_mapping ? color_mapping[child.name] : "white",
        roughness: 1.0,
        metalness: 0.3,
      });
    }
  });

  const scaleRatio = 0.01;

  // Attach the click event only to the specific mesh ("IT:1")
  useEffect(() => {
    const itMesh = obj.getObjectByName("it");
    if (itMesh) {
      itMesh.userData.isClickable = true; // Mark the mesh for debugging
      itMesh.onClick = () => {
        console.log("click on it");
        props.setCameraState("infoIT");
      };
    }

    const dexMesh = obj.getObjectByName("dex");
    if (dexMesh) {
      dexMesh.userData.isClickable = true; // Mark the mesh for debugging
      dexMesh.onClick = () => {
        console.log("click on dex");
        props.setCameraState("infoDEX");
      };
    }

    const laMesh = obj.getObjectByName("la");
    if (laMesh) {
      laMesh.userData.isClickable = true; // Mark the mesh for debugging
      laMesh.onClick = () => {
        console.log("click on la");
        props.setCameraState("infoLA");
      };
    }

    const secMesh = obj.getObjectByName("sec");
    if (secMesh) {
      secMesh.userData.isClickable = true; // Mark the mesh for debugging
      secMesh.onClick = () => {
        console.log("click on sec");
        props.setCameraState("infoSEC");
      };
    }

    const pemMesh = obj.getObjectByName("pem");
    if (pemMesh) {
      pemMesh.userData.isClickable = true; // Mark the mesh for debugging
      pemMesh.onClick = () => {
        console.log("click on pem");
        props.setCameraState("infoPEM");
      };
    }

    const ersSxMesh = obj.getObjectByName("ers sx");
    if (ersSxMesh) {
      ersSxMesh.userData.isClickable = true; // Mark the mesh for debugging
      ersSxMesh.onClick = () => {
        console.log("click on ers sx");
        props.setCameraState("infoERS");
      };
    }

    const ersDxMesh = obj.getObjectByName("ers dx");
    if (ersDxMesh) {
      ersDxMesh.userData.isClickable = true; // Mark the mesh for debugging
      ersDxMesh.onClick = () => {
        console.log("click on ers dx");
        props.setCameraState("infoERS");
      };
    }

    const cemMesh = obj.getObjectByName("cem");
    if (cemMesh) {
      cemMesh.userData.isClickable = true; // Mark the mesh for debugging
      cemMesh.onClick = () => {
        console.log("click on cem");
        props.setCameraState("infoCEM");
      };
    }

    const hraMesh = obj.getObjectByName("hra");
    if (hraMesh) {
      hraMesh.userData.isClickable = true; // Mark the mesh for debugging
      hraMesh.onClick = () => {
        console.log("click on hra");
        props.setCameraState("infoHRA");
      };
    }
  }, [obj]);

  return (
    <primitive
      object={obj}
      ref={logoRef}
      scale={[scaleRatio, scaleRatio, scaleRatio]}
      rotation={[0, -Math.PI / 2, 0]}
      position={[0.55, 5, -2.25]}
      {...props}
      onPointerDown={(event) => {
        // Ensure only interactive meshes trigger the event
        if (event.object.userData.isClickable) {
          event.object.onClick(); // Call the click handler
        }
      }}
    />
  );
}

const CustomCamera = ({ startPosition, startTarget, startZoom, onUpdate }) => {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(...startTarget);
    }
  }, [startTarget]);

  useEffect(() => {
    onUpdate(cameraRef.current);
  }, [onUpdate]);

  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault
      position={startPosition}
      zoom={startZoom}
    />
  );
};

const Lights = () => {
  const pointLightRef = useRef();
  const pointLightRef2 = useRef();
  // useHelper(pointLightRef, PointLightHelper, 1);
  // useHelper(pointLightRef2, PointLightHelper, 1);

  return (
    <>
      <pointLight
        ref={pointLightRef}
        position={[2, 0, -2.3]}
        intensity={5}
        color="#fff"
      />
      <pointLight
        ref={pointLightRef2}
        position={[3, 1, 0]}
        intensity={12}
        color="#fff"
      />
      <pointLight position={[2, 0, 2.3]} intensity={5} color="#fff" />
      <ambientLight intensity={0.8} />
    </>
  );
};

export default function SapienzaUMobile() {
  const [windowSize] = useOutletContext();
  const [cameraState, setCameraState] = useState("default");
  const { t, i18n } = useTranslation();

  // Default camera settings used when the page is loaded
  const [cameraSettings, setCameraSettings] = useState({
    position: [50, 10, 20],
    target: [0, -0.075, 0],
    zoom: 300,
  });

  const discoverCameraSetting = {
    position: [50, 0, 0],
    target: [0, 0, 0],
    zoom: 2500,
  };

  const discoverTeamCameraSetting = {
    position: [50, 0, 0],
    target: [0, -0.075, 0],
    zoom: windowSize < 450 ? 500 : windowSize < 630 ? 750 : 900,
  };

  const ITCameraSetting = {
    position: [50, 0, -200],
    target: ITDescriptionPosition,
    zoom: 900,
  };

  const SECCameraSetting = {
    position: [50, 0, -200],
    target: SECDescriptionPosition,
    zoom: 900,
  };

  const DEXCameraSetting = {
    position: [50, 0, -200],
    target: DEXDescriptionPosition,
    zoom: 900,
  };

  const PEMCameraSetting = {
    position: [50, 0, -200],
    target: PEMDescriptionPosition,
    zoom: 900,
  };

  const HRACameraSetting = {
    position: [50, 0, -200],
    target: HRADescriptionPosition,
    zoom: 900,
  };

  const LACameraSetting = {
    position: [50, 0, -200],
    target: LADescriptionPosition,
    zoom: 900,
  };

  const ERSCameraSetting = {
    position: [50, 0, -200],
    target: ERSDescriptionPosition,
    zoom: 900,
  };

  const CEMCameraSetting = {
    position: [50, 0, -200],
    target: CEMDescriptionPosition,
    zoom: 900,
  };

  const teamInfoCameraSetting = {
    position: [50, 0, -200],
    target: [0, 0, 3.0],
    zoom: 900,
  };

  /**
   * UseEffect to animate the camera when a team is selected
   */

  useEffect(() => {
    if (cameraState === null) return;

    const tempPosition = {
      x: cameraSettings.position[0],
      y: cameraSettings.position[1],
      z: cameraSettings.position[2],
    };
    const tempTarget = {
      x: cameraSettings.target[0],
      y: cameraSettings.target[1],
      z: cameraSettings.target[2],
    };
    const tempZoom = cameraSettings.zoom;

    let finalPosition = [];
    let finalTarget = [];
    let finalZoom = 0;

    switch (cameraState) {
      case "discoverTeam":
        finalPosition = discoverTeamCameraSetting.position;
        finalTarget = discoverTeamCameraSetting.target;
        finalZoom = discoverTeamCameraSetting.zoom;
        break;
      case "discover":
        finalPosition = discoverCameraSetting.position;
        finalTarget = discoverCameraSetting.target;
        finalZoom = discoverCameraSetting.zoom;
        break;
      case "default":
        finalPosition = [50, 10, 20];
        finalTarget = [0, -0.075, 0];
        finalZoom = 500;
        break;
      case "infoIT":
        finalPosition = ITCameraSetting.position;
        finalTarget = ITCameraSetting.target;
        finalZoom = ITCameraSetting.zoom;
        break;
      case "infoDEX":
        finalPosition = DEXCameraSetting.position;
        finalTarget = DEXCameraSetting.target;
        finalZoom = DEXCameraSetting.zoom;
        break;
      case "infoLA":
        finalPosition = LACameraSetting.position;
        finalTarget = LACameraSetting.target;
        finalZoom = LACameraSetting.zoom;
        break;
      case "infoSEC":
        finalPosition = SECCameraSetting.position;
        finalTarget = SECCameraSetting.target;
        finalZoom = SECCameraSetting.zoom;
        break;
      case "infoPEM":
        finalPosition = PEMCameraSetting.position;
        finalTarget = PEMCameraSetting.target;
        finalZoom = PEMCameraSetting.zoom;
        break;
      case "infoERS":
        finalPosition = ERSCameraSetting.position;
        finalTarget = ERSCameraSetting.target;
        finalZoom = ERSCameraSetting.zoom;
        break;
      case "infoCEM":
        finalPosition = CEMCameraSetting.position;
        finalTarget = CEMCameraSetting.target;
        finalZoom = CEMCameraSetting.zoom;
        break;
      case "infoHRA":
        finalPosition = HRACameraSetting.position;
        finalTarget = HRACameraSetting.target;
        finalZoom = HRACameraSetting.zoom;
        break;
      default:
        finalPosition = [50, 10, 20];
        finalTarget = [0, 0, 0];
        finalZoom = 500;
    }

    const duration = 1.5;

    const ease = "power4.inOut";

    // Animate position
    gsap.to(tempPosition, {
      x: finalPosition[0],
      y: finalPosition[1],
      z: finalPosition[2],
      duration: duration,
      ease: ease,
      onUpdate: () => {
        setCameraSettings((prev) => ({
          ...prev,
          position: [tempPosition.x, tempPosition.y, tempPosition.z],
        }));
      },
    });

    // Animate target
    gsap.to(tempTarget, {
      x: finalTarget[0],
      y: finalTarget[1],
      z: finalTarget[2],
      duration: duration,
      ease: ease,
      onUpdate: () => {
        setCameraSettings((prev) => ({
          ...prev,
          target: [tempTarget.x, tempTarget.y, tempTarget.z],
        }));
      },
    });

    // Animate zoom
    gsap.to(cameraSettings, {
      zoom: finalZoom,
      duration: duration,
      ease: ease,
      onUpdate: () => {
        setCameraSettings((prev) => ({
          ...prev,
          zoom: cameraSettings.zoom,
        }));
      },
    });
  }, [cameraState]);

  /**
   * Handle the click on the "Discover" button
   * It moves the camera from the initial position to the "Discover" position next to the logo
   * Or viceversa
   */
  const handleDiscoverClick = () => {
    setCameraState((prev) => (prev === "discover" ? "default" : "discover"));
  };

  const handleDiscoverTeamClick = () => {
    setCameraState((prev) =>
      prev === "discoverTeam" ? "default" : "discoverTeam"
    );
  };

  /**
   * Controls for the camera that can be displayed and used on screen using the Leva library
   */
  const { x, y, z, targetX, targetY, targetZ, zoom } = useControls("Camera", {
    x: { value: cameraSettings.position[0], min: -200, max: 200 },
    y: { value: cameraSettings.position[1], min: -200, max: 200 },
    z: { value: cameraSettings.position[2], min: -200, max: 200 },
    targetX: { value: cameraSettings.target[0], min: -10, max: 10 },
    targetY: { value: cameraSettings.target[1], min: -10, max: 10 },
    targetZ: { value: cameraSettings.target[2], min: -10, max: 10 },
    zoom: { value: cameraSettings.zoom, min: 100, max: 2000 },
  });

  /**
   * This is what allows the camera to move in the scene with Leva
   */
  useEffect(() => {
    setCameraSettings((prev) => ({
      ...prev,
      position: [x, y, z],
      target: [targetX, targetY, targetZ],
      zoom,
    }));
  }, [x, y, z, targetX, targetY, targetZ, zoom]);

  const HtmlTeamDescription = ({ teamName, teamKey, position }) => {
    return (
      <Html
        as="div"
        center
        style={{
          padding: "20px",
          borderRadius: "10px",
          width: "90vw",
          color: "white",
          position: "absolute",
          maxHeight: "60vh",
          overflow: "scroll",
          pointerEvents: "none",
        }}
        position={position}
      >
        <h1 className="team-title">Il team {teamName}</h1>
        <p className="team-description">{t(`joinus.${teamKey}`)}</p>
      </Html>
    );
  };

  /**
   * Main return of the component
   */
  return (
    <div
      style={{
        width: "100vw",
        height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
        marginTop: global.UTILS.NAV_HEIGHT,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
      }}
    >
      <Leva hidden={true} />
      <Canvas>
        {/* <OrbitControls /> */}
        {/* OrbitControls allows to move freely in the scene using the mouse clicks*/}
        {/* <axesHelper args={[10]} /> */}
        {/* AxesHelper shows the lines of the axes x, y, z in the scene*/}
        <CustomCamera
          startPosition={cameraSettings.position}
          startTarget={cameraSettings.target}
          startZoom={cameraSettings.zoom}
          onUpdate={(camera) => {
            if (camera) camera.lookAt(...cameraSettings.target);
          }}
        />
        <Lights />
        <Suspense fallback={null}>
          <ObjModel
            windowSize={windowSize}
            cameraState={cameraState}
            setCameraState={setCameraState}
          />
          <HtmlTeamDescription
            teamName="IT"
            teamKey="IT"
            position={ITDescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="SEC"
            teamKey="SEC"
            position={SECDescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="PEM"
            teamKey="PEM"
            position={PEMDescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="DEX"
            teamKey="DESIGN"
            position={DEXDescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="L&A"
            teamKey="LA"
            position={LADescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="ERS"
            teamKey="ERS"
            position={ERSDescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="CEM"
            teamKey="CEM"
            position={CEMDescriptionPosition}
          />
          <HtmlTeamDescription
            teamName="HRA"
            teamKey="HRA"
            position={HRADescriptionPosition}
          />
        </Suspense>
      </Canvas>
      <div
        id="mobile-overlay-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          pointerEvents: "none",
          gap: "50px",
          zIndex: 100,
        }}
      >
        <div id="mobile-buttons-container">
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: "#eb0028",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
              display:
                cameraState === "default" || cameraState === "discoverTeam"
                  ? "flex"
                  : "none",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cameraState === "default" || cameraState === "discoverTeam" ? (
              "Scopri SapienzaU"
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </button>
          <button
            onClick={handleDiscoverTeamClick}
            style={{
              backgroundColor: "#eb0028",
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cameraState === "default" || cameraState === "discover" ? (
              "Scopri i Team"
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </button>
        </div>
      </div>
      <div
        id="overlay-text"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          maxWidth: "100vw",
          padding: "20px 50px 50px 50px",
          height: `calc(100% - 100px)`,
          pointerEvents: cameraState === "discover" ? "initial" : "none",
          color: "#fff",
          opacity: cameraState === "discover" ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          transitionDelay: cameraState === "discover" ? "1s" : "0.3s",
          fontFamily: "GothamBook",
          overflow: "scroll",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <h1
          style={{
            fontFamily: "GothamBold",
            fontSize: "30px",
          }}
        >
          Chi siamo
        </h1>
        <p>
          SapienzaU è un’associazione studentesca ufficialmente riconosciuta da
          Sapienza Università di Roma, fondata nel 2024 e attiva come Comitato
          TEDxSapienzaU sin dal 2021. Con oltre 110 membri provenienti da quasi
          tutte le Facoltà, ci impegniamo a costruire una comunità accogliente e
          multidisciplinare, dove il dialogo e la crescita collettiva sono al
          centro.
        </p>

        <h1
          style={{
            fontFamily: "GothamBold",
            fontSize: "30px",
          }}
        >
          Cosa facciamo
        </h1>
        <p>
          Il nostro obiettivo è organizzare eventi formativi e culturali che
          arricchiscano l’esperienza universitaria. Ispirata ai principi TED,
          SapienzaU offre contenuti di valore, organizzando iniziative che
          promuovono attivismo civico, diversità e dialogo.
        </p>
        <h1
          style={{
            fontFamily: "GothamBold",
            fontSize: "30px",
          }}
        >
          I nostri valori
        </h1>
        <p>
          Come da statuto, SapienzaU è indipendente da qualsiasi movimento
          elettorale o partitico e opera esclusivamente per scopi educativi e
          culturali. Il nostro regolamento punta a garantire uno spazio
          inclusivo e rispettoso, dove ogni studente possa trovare ispirazione e
          sostegno per crescere sia come individuo, sia come parte della
          comunità della nostra Università.
        </p>
      </div>
    </div>
  );
}
