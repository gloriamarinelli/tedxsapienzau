import React, { Suspense, useRef, useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import {
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

const verdeSEC = "#95c459";
const violaPEM = "#bb5c9e";
const azzurroLA = "#21bcef";
const rosaERS = "#f089b7";
const arancioneIT = "#f07e2a";
const gialloDEX = "#fab732";
const bluHRA = "#2884c7";
const rossoCEM = "#e9493a";

/**
 * Function that loads the 3d model from the public folder and applies
 * materials and animations to it
 */
function ObjModel(props) {
  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3d_models/logo3d_v5.obj`
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
    "lettera U",
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

  // if (props.windowSize < 768) {
  //   obj.traverse((child) => {
  //     if (child instanceof THREE.Mesh) {
  //       console.log(child.name);
  //       if (mobileMeshes.includes(child.name)) {
  //         child.visible = true;
  //       } else {
  //         child.visible = false;
  //       }
  //     }
  //   });
  // }

  // loop through all the object meshes and add a material to them
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color:
          child.name in color_mapping ? color_mapping[child.name] : "white",
        roughness: 1.0,
        metalness: 0.3,
      });
    }
  });

  // Animation: Floating effect
  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current.position, {
        y: "+=0.02", // Move up by 0.5 units
        duration: 2, // Duration for one cycle
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation
        ease: "sine.inOut", // Smooth easing
      });

      const itMesh = logoRef.current.getObjectByName("IT:1");

      if (itMesh) {
        let pivot = logoRef.current.getObjectByName("pivotIT");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotIT"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(itMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          itMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(itMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const dexMesh = logoRef.current.getObjectByName("DEX:1");

      if (dexMesh) {
        let pivot = logoRef.current.getObjectByName("pivotDEX");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotDEX"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(dexMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          dexMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(dexMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "-=" + Math.PI * 2, // Full rotation
          y: "-=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const hraMesh = logoRef.current.getObjectByName("HRA:1");

      if (hraMesh) {
        let pivot = logoRef.current.getObjectByName("pivotHRA");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotHRA"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(hraMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          hraMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(hraMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const cemMesh = logoRef.current.getObjectByName("CEM:1");

      if (cemMesh) {
        let pivot = logoRef.current.getObjectByName("pivotCEM");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotCEM"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(cemMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          cemMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(cemMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const laMesh = logoRef.current.getObjectByName("L&A");

      if (laMesh) {
        let pivot = logoRef.current.getObjectByName("pivotLA");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotLA"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(laMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          laMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(laMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const secMesh = logoRef.current.getObjectByName("SEC");

      if (secMesh) {
        let pivot = logoRef.current.getObjectByName("pivotSEC");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotSEC"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(secMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          secMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(secMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const pemMesh = logoRef.current.getObjectByName("PEM:1");

      if (pemMesh) {
        let pivot = logoRef.current.getObjectByName("pivotPEM");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotPEM"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(pemMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          pemMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(pemMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const ersMesh = logoRef.current.getObjectByName("ERS");

      if (ersMesh) {
        let pivot = logoRef.current.getObjectByName("pivotERS");

        if (!pivot) {
          // Create a pivot group if it doesn't exist
          pivot = new THREE.Group();
          pivot.name = "pivotERS"; // Name the pivot for easy identification
          logoRef.current.add(pivot);

          const center = new THREE.Vector3();
          const box = new THREE.Box3().setFromObject(ersMesh);
          box.getCenter(center);

          pivot.position.copy(center); // Move pivot to the center of the mesh
          ersMesh.position.sub(center); // Move the mesh to the pivot
          pivot.add(ersMesh); // Add the mesh to the pivot
        }

        // Animate rotation (apply only once)
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }
    }
  }, []);

  const scaleRatio = 0.01;

  return (
    <primitive
      object={obj}
      ref={logoRef}
      scale={[scaleRatio, scaleRatio, scaleRatio]}
      rotation={[0, -Math.PI / 2, 0]}
      position={[0.3, 4.5, -4.5]}
      {...props}
    />
  );
}

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

//** Main RETURN */
export default function SapienzaUDesktop() {
  const [windowSize] = useOutletContext();
  const [showTeamButtons, setShowTeamButtons] = useState(false);
  // const [selectedTeam, setSelectedTeam] = useState(null);
  const [cameraState, setCameraState] = useState("default");
  const { t, i18n } = useTranslation();

  // Default camera settings used when the page is loaded
  const [cameraSettings, setCameraSettings] = useState({
    position: [50, 10, 20],
    target: [0, 0, 0],
    zoom: 150,
  });

  /**
   * Camera settings for each team
   */
  const ITCameraSetting = {
    position: [190, 30, -8],
    target: [-7.4, 0.0, -0.9],
    zoom: 1000,
  };

  const ERSCameraSetting = {
    position: [50.1, 10.1, 20.1],
    target: [0.1, 1.1, 0.1],
    zoom: 970,
  };

  const DEXCameraSetting = {
    position: [98, 20, 28],
    target: [-4.8, 1.4, -0.6],
    zoom: 924,
  };

  const CEMCameraSetting = {
    position: [38, -22, 16],
    target: [0.0, 1.1, 3.0],
    zoom: 1000,
  };

  const LACameraSetting = {
    position: [50.1, 6, -8],
    target: [0.0, 2.2, 2.8],
    zoom: 1000,
  };

  const SECCameraSetting = {
    position: [106, 22, 4],
    target: [0.0, 2.3, -0.65],
    zoom: 1000,
  };

  const PEMCameraSetting = {
    position: [200, 6, 76],
    target: [0.6, 1.5, 2.6],
    zoom: 924,
  };

  const HRACameraSetting = {
    position: [50.1, 2, 0],
    target: [0.0, 1.5, -3.2],
    zoom: 1000,
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

    let finalPosition = ITCameraSetting.position;
    let finalTarget = ITCameraSetting.target;
    let finalZoom = ITCameraSetting.zoom;

    switch (cameraState) {
      case "IT":
        finalPosition = ITCameraSetting.position;
        finalTarget = ITCameraSetting.target;
        finalZoom = ITCameraSetting.zoom;
        break;
      case "ERS":
        finalPosition = ERSCameraSetting.position;
        finalTarget = ERSCameraSetting.target;
        finalZoom = ERSCameraSetting.zoom;
        break;
      case "DEX":
        finalPosition = DEXCameraSetting.position;
        finalTarget = DEXCameraSetting.target;
        finalZoom = DEXCameraSetting.zoom;
        break;
      case "CEM":
        finalPosition = CEMCameraSetting.position;
        finalTarget = CEMCameraSetting.target;
        finalZoom = CEMCameraSetting.zoom;
        break;
      case "LA":
        finalPosition = LACameraSetting.position;
        finalTarget = LACameraSetting.target;
        finalZoom = LACameraSetting.zoom;
        break;
      case "SEC":
        finalPosition = SECCameraSetting.position;
        finalTarget = SECCameraSetting.target;
        finalZoom = SECCameraSetting.zoom;
        break;
      case "PEM":
        finalPosition = PEMCameraSetting.position;
        finalTarget = PEMCameraSetting.target;
        finalZoom = PEMCameraSetting.zoom;
        break;
      case "HRA":
        finalPosition = HRACameraSetting.position;
        finalTarget = HRACameraSetting.target;
        finalZoom = HRACameraSetting.zoom;
        break;
      case "discover":
        finalPosition = [50, 0, 4];
        finalTarget = [0.6, 0, -2.8];
        finalZoom = 753;
        break;
      case "default":
        finalPosition = [50, 10, 20];
        finalTarget = [0, 0, 0];
        finalZoom = 150;
        break;

      default:
        finalPosition = [50, 10, 20];
        finalTarget = [0, 0, 0];
        finalZoom = 150;
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
    setShowTeamButtons(false);
    setCameraState((prev) => (prev === "default" ? "discover" : "default"));
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
    zoom: { value: cameraSettings.zoom, min: 100, max: 1000 },
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
      }}
    >
      <Leva hidden={true} />
      <Canvas>
        {/* <OrbitControls /> */}{" "}
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
          <ObjModel windowSize={windowSize} />
        </Suspense>
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: "20px",
          pointerEvents: "none",
          gap: "50px",
        }}
      >
        <button
          onClick={handleDiscoverClick}
          style={{
            backgroundColor: "#eb0028",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "0",
            pointerEvents: "initial",
          }}
        >
          {cameraSettings.zoom === 150 ? (
            "Scopri cos'è SapienzaU"
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
        </button>
        <button
          onClick={() => setShowTeamButtons(!showTeamButtons)}
          className="team-button"
          style={{
            backgroundColor: "#eb0028",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "0",
            pointerEvents: "initial",
          }}
        >
          Scopri i Team{" "}
          <FontAwesomeIcon icon={faCaretDown} style={{ rotate: "180deg" }} />
          {showTeamButtons && (
            <div className="extra-buttons">
              <button
                className="animated-button"
                style={{ backgroundColor: arancioneIT }}
                onClick={() => setCameraState("IT")}
              >
                Team IT
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: gialloDEX }}
                onClick={() => setCameraState("DEX")}
              >
                Team DEX
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: rosaERS }}
                onClick={() => setCameraState("ERS")}
              >
                Team ERS
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: rossoCEM }}
                onClick={() => setCameraState("CEM")}
              >
                Team CEM
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: azzurroLA }}
                onClick={() => setCameraState("LA")}
              >
                Team L&A
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: verdeSEC }}
                onClick={() => setCameraState("SEC")}
              >
                Team SEC
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: violaPEM }}
                onClick={() => setCameraState("PEM")}
              >
                Team PEM
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: bluHRA }}
                onClick={() => setCameraState("HRA")}
              >
                Team HRA
              </button>
            </div>
          )}
        </button>
      </div>
      {/** All divs below are the text overlay for each time the camera zooms somewhere */}
      <div
        id="overlay-text"
        style={{
          position: "absolute",
          top: 0,
          maxWidth: "800px",
          height: "100%",
          pointerEvents: "none",
          color: "#fff",
          paddingTop: "8vh",
          paddingRight: "50px",
          opacity: cameraState === "discover" ? 1 : 0,
          transition: "all 0.5s ease-in-out",
          fontFamily: "GothamBook",
        }}
      >
        <h1
          style={{
            fontFamily: "GothamBold",
            pointerEvents: "initial",
            fontSize: "30px",
          }}
        >
          Chi siamo
        </h1>
        <p style={{ pointerEvents: "initial" }}>
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
            pointerEvents: "initial",
            fontSize: "30px",
          }}
        >
          Cosa facciamo
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Il nostro obiettivo è organizzare eventi formativi e culturali che
          arricchiscano l’esperienza universitaria. Ispirata ai principi TED,
          SapienzaU offre contenuti di valore, organizzando iniziative che
          promuovono attivismo civico, diversità e dialogo.
        </p>
        <h1
          style={{
            fontFamily: "GothamBold",
            pointerEvents: "initial",
            fontSize: "30px",
          }}
        >
          I nostri valori
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Come da statuto, SapienzaU è indipendente da qualsiasi movimento
          elettorale o partitico e opera esclusivamente per scopi educativi e
          culturali. Il nostro regolamento punta a garantire uno spazio
          inclusivo e rispettoso, dove ogni studente possa trovare ispirazione e
          sostegno per crescere sia come individuo, sia come parte della
          comunità della nostra Università.
        </p>
      </div>
      <div
        id="overlay-text-left"
        style={{
          opacity: cameraState === "IT" ? 1 : 0,
          transitionDelay: cameraState === "IT" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team IT</h1>
        <p className="team-description">{t("joinus.IT")}</p>
      </div>
      <div
        id="overlay-text"
        style={{
          opacity: cameraState === "DEX" ? 1 : 0,
          transitionDelay: cameraState === "DEX" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team DEX</h1>
        <p className="team-description">{t("joinus.DESIGN")}</p>
      </div>
      <div
        id="overlay-text"
        style={{
          opacity: cameraState === "ERS" ? 1 : 0,
          transitionDelay: cameraState === "ERS" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team ERS</h1>
        <p className="team-description">{t("joinus.ERS")}</p>
      </div>
      <div
        id="overlay-text"
        style={{
          opacity: cameraState === "CEM" ? 1 : 0,
          transitionDelay: cameraState === "CEM" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team CEM</h1>
        <p className="team-description">{t("joinus.CEM")}</p>
      </div>
      <div
        id="overlay-text"
        style={{
          opacity: cameraState === "LA" ? 1 : 0,
          transitionDelay: cameraState === "LA" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team L&A</h1>
        <p className="team-description">{t("joinus.LA")}</p>
      </div>
      <div
        id="overlay-text-left"
        style={{
          opacity: cameraState === "SEC" ? 1 : 0,
          transitionDelay: cameraState === "SEC" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team SEC</h1>
        <p className="team-description">{t("joinus.SEC")}</p>
      </div>
      <div
        id="overlay-text-left"
        style={{
          opacity: cameraState === "PEM" ? 1 : 0,
          transitionDelay: cameraState === "PEM" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team PEM</h1>
        <p className="team-description">{t("joinus.PEM")}</p>
      </div>
      <div
        id="overlay-text"
        style={{
          opacity: cameraState === "HRA" ? 1 : 0,
          transitionDelay: cameraState === "HRA" ? "1s" : "0s",
        }}
      >
        <h1 className="team-title">Il team HRA</h1>
        <p className="team-description">{t("joinus.HRA")}</p>
      </div>
    </div>
  );
}
