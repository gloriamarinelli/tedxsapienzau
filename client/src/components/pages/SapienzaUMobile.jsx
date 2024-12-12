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
    }
  }, []);

  const scaleRatio = 0.01;

  return (
    <primitive
      object={obj}
      ref={logoRef}
      scale={[scaleRatio, scaleRatio, scaleRatio]}
      rotation={[0, -Math.PI / 2, 0]}
      position={[0.55, 5, -2.25]}
      {...props}
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
    setCameraState((prev) => (prev === "default" ? "discover" : "default"));
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
          {cameraState === "default" ? (
            "Scopri cos'è SapienzaU"
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
        </button>
      </div>
    </div>
  );
}
