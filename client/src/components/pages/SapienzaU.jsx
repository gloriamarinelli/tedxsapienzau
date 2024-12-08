import React, { Suspense, useRef, useEffect, useState } from "react";
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
  const [hoveredMesh, setHoveredMesh] = useState(null);
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

export default function SapienzaU() {
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
      <Leva hidden />
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
          <ObjModel />
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
          left: "40%",
          width: "60%",
          height: "100%",
          pointerEvents: "none",
          color: "#fff",
          paddingTop: "50px",
          paddingRight: "50px",
          opacity: cameraSettings.zoom === 753 ? 1 : 0,
          transition: "all 0.5s ease-in-out",
        }}
      >
        <h1 style={{ fontFamily: "GothamBold" }}>Cos'è SapienzaU?</h1>
        <p style={{ maxWidth: "60ch" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam rerum
          suscipit quo, fuga dolores, accusamus voluptatum labore officiis
          beatae praesentium odit obcaecati dolorem? Laborum error rerum
          quisquam ratione voluptatum perspiciatis quasi voluptates facere nemo!
          Cum earum aperiam eligendi incidunt, rem consectetur error esse porro
          sequi minus cupiditate debitis, dolorum alias commodi ratione quae? At
          quaerat qui optio incidunt adipisci praesentium provident! Sed,
          voluptatum enim. Debitis pariatur rem velit aut iure, inventore alias
          quia? Explicabo commodi maxime sapiente quos, optio iste a officiis
          deserunt tempore in expedita voluptatibus dolorum iusto iure
          voluptatum dicta hic rem temporibus! Natus quasi vitae maiores
          ducimus.
        </p>
      </div>
    </div>
  );
}
