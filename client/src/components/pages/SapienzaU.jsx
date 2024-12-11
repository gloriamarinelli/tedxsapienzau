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
import BasicChips from "../components/BasicChips";
import { set } from "date-fns";

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
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(itMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        itMesh.position.sub(center);
        pivot.add(itMesh);

        // Animate rotation
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
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(dexMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        dexMesh.position.sub(center);
        pivot.add(dexMesh);

        // Animate rotation
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
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(hraMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        hraMesh.position.sub(center);
        pivot.add(hraMesh);

        // Animate rotation
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "-=" + Math.PI * 2, // Full rotation
          z: "-=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const cemMesh = logoRef.current.getObjectByName("CEM:1");

      if (cemMesh) {
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(cemMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        cemMesh.position.sub(center);
        pivot.add(cemMesh);

        // Animate rotation
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
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(laMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        laMesh.position.sub(center);
        pivot.add(laMesh);

        // Animate rotation
        gsap.to(pivot.rotation, {
          x: "-=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "-=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const secMesh = logoRef.current.getObjectByName("SEC");

      if (secMesh) {
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(secMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        secMesh.position.sub(center);
        pivot.add(secMesh);

        // Animate rotation
        gsap.to(pivot.rotation, {
          x: "-=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "+=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const pemMesh = logoRef.current.getObjectByName("PEM:1");

      if (pemMesh) {
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(pemMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        pemMesh.position.sub(center);
        pivot.add(pemMesh);

        // Animate rotation
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "+=" + Math.PI * 2, // Full rotation
          z: "-=" + Math.PI * 2, // Full rotation
          duration: 30,
          repeat: -1, // Infinite rotation
          ease: "linear",
        });
      }

      const ersMesh = logoRef.current.getObjectByName("ERS");

      if (ersMesh) {
        const center = new THREE.Vector3();
        const box = new THREE.Box3().setFromObject(ersMesh);
        box.getCenter(center);

        // Create a pivot group
        const pivot = new THREE.Group();
        logoRef.current.add(pivot);
        pivot.position.copy(center); // Move pivot to the center of the mesh

        // Move the mesh to the pivot
        ersMesh.position.sub(center);
        pivot.add(ersMesh);

        // Animate rotation
        gsap.to(pivot.rotation, {
          x: "+=" + Math.PI * 2, // Full rotation
          y: "-=" + Math.PI * 2, // Full rotation
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

//** Main COMPONENT */
export default function SapienzaU() {
  const [windowSize] = useOutletContext();

  const [showTeamButtons, setShowTeamButtons] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const [cameraSettings, setCameraSettings] = useState({
    position: [50, 10, 20],
    target: [0, 0, 0],
    zoom: 150,
  });

  const ITCameraSetting = {
    position: [190, 30, -8],
    target: [-7.4, 0.0, -0.8],
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
    target: [0.0, 2.3, -1.4],
    zoom: 1000,
  };

  const PEMCameraSetting = {
    position: [50.1, 6, -40],
    target: [0.0, 1.5, 1.8],
    zoom: 860,
  };

  const HRACameraSetting = {
    position: [50.1, 2, 0],
    target: [0.0, 1.5, -3.2],
    zoom: 1000,
  };

  useEffect(() => {
    console.log(selectedTeam);
    if (selectedTeam === null) return;

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

    switch (selectedTeam) {
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
  }, [selectedTeam]);

  const handleDiscoverClick = () => {
    setShowTeamButtons(false);
    setSelectedTeam(null);

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

    const finalPosition = {
      x: 50,
      y: cameraSettings.position[1] == 10 ? 0 : 10,
      z: cameraSettings.position[2] == 20 ? 4 : 20,
    };

    const finalTarget = {
      x: cameraSettings.target[0] == 0 ? 0.6 : 0,
      y: cameraSettings.target[1] == 0 ? 0 : 0,
      z: cameraSettings.target[2] == 0 ? -2.8 : 0,
    };

    const duration = 1.5;

    const ease = "power4.inOut";

    // Animate position
    gsap.to(tempPosition, {
      x: finalPosition.x,
      y: finalPosition.y,
      z: finalPosition.z,
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
      x: finalTarget.x,
      y: finalTarget.y,
      z: finalTarget.z,
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
      zoom: tempZoom == 150 ? 753 : 150,
      duration: duration,
      ease: ease,
      onUpdate: () => {
        setCameraSettings((prev) => ({
          ...prev,
          zoom: cameraSettings.zoom,
        }));
      },
    });
  };

  const { x, y, z, targetX, targetY, targetZ, zoom } = useControls("Camera", {
    x: { value: cameraSettings.position[0], min: -200, max: 200 },
    y: { value: cameraSettings.position[1], min: -200, max: 200 },
    z: { value: cameraSettings.position[2], min: -200, max: 200 },
    targetX: { value: cameraSettings.target[0], min: -10, max: 10 },
    targetY: { value: cameraSettings.target[1], min: -10, max: 10 },
    targetZ: { value: cameraSettings.target[2], min: -10, max: 10 },
    zoom: { value: cameraSettings.zoom, min: 100, max: 1000 },
  });

  useEffect(() => {
    setCameraSettings((prev) => ({
      ...prev,
      position: [x, y, z],
      target: [targetX, targetY, targetZ],
      zoom,
    }));
  }, [x, y, z, targetX, targetY, targetZ, zoom]);

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
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[10]} /> */}
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
          paddingBottom: "50px",
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
                onClick={() => setSelectedTeam("IT")}
              >
                Team IT
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: gialloDEX }}
                onClick={() => setSelectedTeam("DEX")}
              >
                Team DEX
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: rosaERS }}
                onClick={() => setSelectedTeam("ERS")}
              >
                Team ERS
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: rossoCEM }}
                onClick={() => setSelectedTeam("CEM")}
              >
                Team CEM
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: azzurroLA }}
                onClick={() => setSelectedTeam("LA")}
              >
                Team L&A
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: verdeSEC }}
                onClick={() => setSelectedTeam("SEC")}
              >
                Team SEC
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: violaPEM }}
                onClick={() => setSelectedTeam("PEM")}
              >
                Team PEM
              </button>
              <button
                className="animated-button"
                style={{ backgroundColor: bluHRA }}
                onClick={() => setSelectedTeam("HRA")}
              >
                Team HRA
              </button>
            </div>
          )}
        </button>
      </div>
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
          opacity: cameraSettings.zoom === 753 ? 1 : 0,
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
          position: "absolute",
          top: 0,
          maxWidth: "800px",
          height: "100%",
          pointerEvents: "none",
          color: "#fff",
          paddingTop: "8vh",
          paddingRight: "0px",
          opacity: selectedTeam === "IT" ? 1 : 0,
          transition: "all 1s ease-in-out",
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
          Il team IT
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eius
          explicabo veniam corrupti adipisci quae repellat vero nisi maiores. Ea
          itaque repellat, reprehenderit provident fugit iste at animi voluptate
          facere asperiores voluptates, corporis expedita nemo! Doloribus quae
          ipsum asperiores repellendus voluptates fuga consectetur minus nihil
          accusantium beatae est, expedita debitis quas labore quos officiis
          consequatur, quasi ducimus voluptas dicta explicabo. Illo facere
          ratione ut atque! Suscipit consectetur modi assumenda distinctio
          tempora ea voluptatibus! Voluptatem accusantium iure soluta saepe
          deserunt quod minus perferendis provident. Asperiores, non consequatur
          veniam dolor ipsam iure reiciendis ducimus odit aliquid quia
          distinctio quibusdam corporis dolorem. Excepturi, iusto quidem. Cumque
          minus reiciendis, possimus maxime quasi hic sapiente at facilis. Natus
          quod rem temporibus praesentium, rerum a! At quibusdam porro vitae
          accusamus ex provident similique, facilis minima eius, exercitationem
          pariatur molestiae officiis, commodi quod fuga nesciunt laudantium
          placeat iste vel adipisci cupiditate voluptatibus dignissimos eaque.
          Esse, totam suscipit.
        </p>
      </div>
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
          paddingRight: "0px",
          opacity: selectedTeam === "DEX" ? 1 : 0,
          transition: "all 1s ease-in-out",
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
          Il team DEX
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eius
          explicabo veniam corrupti adipisci quae repellat vero nisi maiores. Ea
          itaque repellat, reprehenderit provident fugit iste at animi voluptate
          facere asperiores voluptates, corporis expedita nemo! Doloribus quae
          ipsum asperiores repellendus voluptates fuga consectetur minus nihil
          accusantium beatae est, expedita debitis quas labore quos officiis
          consequatur, quasi ducimus voluptas dicta explicabo. Illo facere
          ratione ut atque! Suscipit consectetur modi assumenda distinctio
          tempora ea voluptatibus! Voluptatem accusantium iure soluta saepe
          deserunt quod minus perferendis provident.
        </p>
      </div>
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
          paddingRight: "0px",
          opacity: selectedTeam === "ERS" ? 1 : 0,
          transition: "all 1s ease-in-out",
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
          Il team ERS
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eius
          explicabo veniam corrupti adipisci quae repellat vero nisi maiores. Ea
          itaque repellat, reprehenderit provident fugit iste at animi voluptate
          facere asperiores voluptates, corporis expedita nemo! Doloribus quae
          ipsum asperiores repellendus voluptates fuga consectetur minus nihil
          accusantium beatae est, expedita debitis quas labore quos officiis
          consequatur, quasi ducimus voluptas dicta explicabo. Illo facere
          ratione ut atque! Suscipit consectetur modi assumenda distinctio
          tempora ea voluptatibus! Voluptatem accusantium iure soluta saepe
          deserunt quod minus perferendis provident. Asperiores, non consequatur
          veniam dolor ipsam iure reiciendis ducimus odit aliquid quia
          distinctio quibusdam corporis dolorem. Excepturi, iusto quidem. Cumque
          minus reiciendis, possimus maxime quasi hic sapiente at facilis.
        </p>
      </div>
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
          paddingRight: "0px",
          opacity: selectedTeam === "CEM" ? 1 : 0,
          transition: "all 1s ease-in-out",
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
          Il team CEM
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eius
          explicabo veniam corrupti adipisci quae repellat vero nisi maiores. Ea
          itaque repellat, reprehenderit provident fugit iste at animi voluptate
          facere asperiores voluptates, corporis expedita nemo! Doloribus quae
          ipsum asperiores repellendus voluptates fuga consectetur minus nihil
          accusantium beatae est, expedita debitis quas labore quos officiis
          consequatur, quasi ducimus voluptas dicta explicabo. Illo facere
          ratione ut atque! Suscipit consectetur modi assumenda distinctio
          tempora ea voluptatibus! Voluptatem accusantium iure soluta saepe
          deserunt quod minus perferendis provident. Asperiores, non consequatur
          veniam dolor ipsam iure reiciendis ducimus odit aliquid quia
          distinctio quibusdam corporis dolorem. Excepturi, iusto quidem. Cumque
          minus reiciendis, possimus maxime quasi hic sapiente at facilis.
        </p>
      </div>
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
          paddingRight: "0px",
          opacity: selectedTeam === "LA" ? 1 : 0,
          transition: "all 1s ease-in-out",
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
          Il team LA
        </h1>
        <p style={{ pointerEvents: "initial" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus eius
          explicabo veniam corrupti adipisci quae repellat vero nisi maiores. Ea
          itaque repellat, reprehenderit provident fugit iste at animi voluptate
          facere asperiores voluptates, corporis expedita nemo! Doloribus quae
          ipsum asperiores repellendus voluptates fuga consectetur minus nihil
          accusantium beatae est, expedita debitis quas labore quos officiis
          consequatur, quasi ducimus voluptas dicta explicabo. Illo facere
          ratione ut atque! Suscipit consectetur modi assumenda distinctio
          tempora ea voluptatibus! Voluptatem accusantium iure soluta saepe
          deserunt quod minus perferendis provident. Asperiores, non consequatur
          veniam dolor ipsam iure reiciendis ducimus odit aliquid quia
          distinctio quibusdam corporis dolorem. Excepturi, iusto quidem. Cumque
          minus reiciendis, possimus maxime quasi hic sapiente at facilis.
        </p>
      </div>
    </div>
  );
}
