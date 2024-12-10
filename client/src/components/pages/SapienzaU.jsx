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
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "../../resources/styles/sapienzaustyle.css";
import BasicChips from "../components/BasicChips";

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

  const [cameraSettings, setCameraSettings] = useState({
    position: [50, 10, 20],
    target: [0, 0, 0],
    zoom: 150,
  });

  const handleDiscoverClick = () => {
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
    x: { value: cameraSettings.position[0], min: -100, max: 100 },
    y: { value: cameraSettings.position[1], min: -100, max: 100 },
    z: { value: cameraSettings.position[2], min: -100, max: 100 },
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
            "Scopri di più"
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
          maxWidth: "800px",
          height: "100%",
          pointerEvents: "none",
          color: "#fff",
          paddingTop: "2em",
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
          SapienzaUè un’associazione studentesca ufficialmente riconosciuta da
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
        <div
          style={{
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            columnGap: "10px",
            rowGap: "10px",
            fontSize: "15px",
          }}
        >
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: arancioneIT,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team IT
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: rosaERS,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team ERS
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: rossoCEM,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team CEM
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: bluHRA,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team HRA
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: gialloDEX,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team DEX
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: azzurroLA,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team L&A
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: verdeSEC,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team SEC
          </button>
          <button
            onClick={handleDiscoverClick}
            style={{
              backgroundColor: violaPEM,
              color: "white",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "0",
              pointerEvents: "initial",
            }}
          >
            team PEM
          </button>
        </div>
      </div>
    </div>
  );
}
