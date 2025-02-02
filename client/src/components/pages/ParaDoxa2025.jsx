import React, { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  useHelper,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "../../index.css";
import "../../resources/styles/home.css";
import { useTranslation, Trans } from "react-i18next";
import { useControls, Leva } from "leva";

export default function ParaDoxa2025() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const [objectRotation, setObjectRotation] = useState({
    rotationX: -1.5,
    rotationY: 0,
    rotationZ: 0,
  });

  function ObjModel(props) {
    const obj = useLoader(
      OBJLoader,
      `${process.env.PUBLIC_URL}/3d_models/logo3d_paradoxa.obj`
    );
    const logoRef = useRef();

    const scaleRatio = 0.01;

    return (
      <primitive
        object={obj}
        ref={logoRef}
        scale={[scaleRatio, scaleRatio, scaleRatio]}
        rotation={[
          objectRotation.rotationX,
          objectRotation.rotationY,
          objectRotation.rotationZ,
        ]}
        position={[-2.8, -0.4, -2]}
        {...props}
      />
    );
  }

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

  /**
   * This is what allows the camera to move in the scene with Leva
   */
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
            backgroundColor: "#000",
            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            fontFamily: "Fira Sans Extra Condensed, sans-serif",
            position: "relative",
          }}
        >
          <Leva hidden={true} />
          <Canvas>
            <OrbitControls />
            {/* <axesHelper args={[10]} /> */}
            <OrthographicCamera
              makeDefault
              position={[10, 10, 10]}
              zoom={300}
            />
            <ambientLight intensity={10} />
            <pointLight position={[10, 10, 10]} />
            <ObjModel />
          </Canvas>
        </div>
      </section>
    </div>
  );
}
