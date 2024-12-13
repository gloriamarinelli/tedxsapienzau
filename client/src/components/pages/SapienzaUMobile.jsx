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

import "../../resources/styles/sapienzaustyle.css";

const verdeSEC = "#95c459";
const violaPEM = "#bb5c9e";
const azzurroLA = "#21bcef";
const rosaERS = "#f089b7";
const arancioneIT = "#f07e2a";
const gialloDEX = "#fab732";
const bluHRA = "#2884c7";
const rossoCEM = "#e9493a";

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
    if (logoRef.current) {
      // Floating effect
      gsap.to(logoRef.current.position, {
        y: "+=0.02",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

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
          const radioactiveGreen = new THREE.Color(0x39ff14); // Bright green (hex code)
          const radioactiveEmissive = new THREE.Color(0x00ff00); // Strong green glow

          // GSAP animation for blinking effect
          gsap.to(child.material.color, {
            r: radioactiveGreen.r,
            g: radioactiveGreen.g,
            b: radioactiveGreen.b,
            duration: 1.0,
            delay: 1.0,
            repeatDelay: 1.0,
            repeat: 1,
            yoyo: true,
            ease: "sine.inOut",
            onComplete: () => {
              child.material.color.copy(originalColor);
            },
          });

          gsap.to(child.material.emissive, {
            r: radioactiveEmissive.r,
            g: radioactiveEmissive.g,
            b: radioactiveEmissive.b,
            duration: 1.0,
            delay: 1.0,
            repeatDelay: 1.0,
            repeat: 1,
            yoyo: true,
            ease: "sine.inOut",
            onComplete: () => {
              child.material.emissive.copy(originalEmissive);
            },
          });

          // Make the glow more intense
          child.material.emissiveIntensity = 3.5; // Adjust intensity (higher = brighter)
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
      };
    }

    const dexMesh = obj.getObjectByName("dex");
    if (dexMesh) {
      dexMesh.userData.isClickable = true; // Mark the mesh for debugging
      dexMesh.onClick = () => {
        console.log("click on dex");
      };
    }

    const laMesh = obj.getObjectByName("la");
    if (laMesh) {
      laMesh.userData.isClickable = true; // Mark the mesh for debugging
      laMesh.onClick = () => {
        console.log("click on la");
      };
    }

    const secMesh = obj.getObjectByName("sec");
    if (secMesh) {
      secMesh.userData.isClickable = true; // Mark the mesh for debugging
      secMesh.onClick = () => {
        console.log("click on sec");
      };
    }

    const pemMesh = obj.getObjectByName("pem");
    if (pemMesh) {
      pemMesh.userData.isClickable = true; // Mark the mesh for debugging
      pemMesh.onClick = () => {
        console.log("click on pem");
      };
    }

    const ersSxMesh = obj.getObjectByName("ers sx");
    if (ersSxMesh) {
      ersSxMesh.userData.isClickable = true; // Mark the mesh for debugging
      ersSxMesh.onClick = () => {
        console.log("click on ers sx");
      };
    }

    const ersDxMesh = obj.getObjectByName("ers dx");
    if (ersDxMesh) {
      ersDxMesh.userData.isClickable = true; // Mark the mesh for debugging
      ersDxMesh.onClick = () => {
        console.log("click on ers dx");
      };
    }

    const cemMesh = obj.getObjectByName("cem");
    if (cemMesh) {
      cemMesh.userData.isClickable = true; // Mark the mesh for debugging
      cemMesh.onClick = () => {
        console.log("click on cem");
      };
    }

    const hraMesh = obj.getObjectByName("hra");
    if (hraMesh) {
      hraMesh.userData.isClickable = true; // Mark the mesh for debugging
      hraMesh.onClick = () => {
        console.log("click on hra");
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

  // Default camera settings used when the page is loaded
  const [cameraSettings, setCameraSettings] = useState({
    position: [50, 10, 20],
    target: [0, 0, 0],
    zoom: 500,
  });

  const discoverCameraSetting = {
    position: [50, 0, 0],
    target: [0, 0, 0],
    zoom: 2500,
  };

  const discoverTeamCameraSetting = {
    position: [50, 0, 0],
    target: [0, 0, 0],
    zoom: 700,
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
        finalTarget = [0, 0, 0];
        finalZoom = 500;
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
   * This is what moves the camera effectively in the scene
   */
  // useEffect(() => {
  //   setCameraSettings((prev) => ({
  //     ...prev,
  //     position: [x, y, z],
  //     target: [targetX, targetY, targetZ],
  //     zoom,
  //   }));
  // }, [x, y, z, targetX, targetY, targetZ, zoom]);

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
      <Leva hidden={false} />
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
          <ObjModel windowSize={windowSize} cameraState={cameraState} />
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
          paddingBottom: "30px",
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
          {cameraState === "default" || cameraState === "discoverTeam" ? (
            "Scopri cos'è SapienzaU"
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
          }}
        >
          {cameraState === "default" || cameraState === "discover" ? (
            "Scopri i Team"
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
        </button>
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
          pointerEvents: "none",
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
