import React, { Suspense, useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  useHelper,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useTranslation } from "react-i18next";
import { useControls, Leva } from "leva";
import gsap from "gsap";
import * as THREE from "three";
import CorniceParadoxaPersona from "../images/paradoxa25/cornice_paradoxa_persona.webp";

function ObjModel(props) {
  const obj = useLoader(
    OBJLoader,
    `${process.env.PUBLIC_URL}/3d_models/logo3d_paradoxa.obj`
  );
  const groupRef = useRef();
  const modelRef = useRef();
  const scaleRatio = 0.01;

  useEffect(() => {
    // Calculate the bounding box of the model
    const boundingBox = new THREE.Box3().setFromObject(obj);
    const center = boundingBox.getCenter(new THREE.Vector3());

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

export default function ParaDoxa2025() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
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
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
            transition: "background-color 4s ease-in-out",
          }}
        >
          <Leva hidden={true} />
          <Canvas>
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
        </div>
      </section>
    </div>
  );
}
