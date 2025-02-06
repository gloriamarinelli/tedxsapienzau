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
import "../../index.css";
import "../../resources/styles/home.css";
import { useTranslation, Trans } from "react-i18next";
import { useControls, Leva } from "leva";
import gsap from "gsap";
import * as THREE from "three";
import CorniceParadoxa from "../images/paradoxa25/cornice_paradoxa_transparent.png";

export default function ParaDoxa2025() {
  const { t, i18n } = useTranslation();
  const [windowSize] = useOutletContext();
  const [objectRotation, setObjectRotation] = useState({
    rotationX: -1.5,
    rotationY: 0,
    rotationZ: 0,
  });
  const [bgColor, setBgColor] = useState("#000");

  useEffect(() => {
    let black = "#000";
    let azzurro = global.COLORS.AZZURRO_PARADOXA;
    let magenta = global.COLORS.MAGENTA_PARADOXA;
    let blu = global.COLORS.BLU_PARADOXA;

    const colors = [black, azzurro, magenta, blu];

    console.log(colors);

    const interval = setInterval(() => {
      setBgColor((prev) => {
        const currentIndex = colors.indexOf(prev);
        const nextIndex = (currentIndex + 1) % colors.length; // Loop back to first color
        console.log(colors[nextIndex]);
        return colors[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // No bgColor in dependencies

  function ObjModel(props) {
    const obj = useLoader(
      OBJLoader,
      `${process.env.PUBLIC_URL}/3d_models/logo3d_paradoxa.obj`
    );
    const logoRef = useRef();

    const scaleRatio = 0.01;
    const floatSpeed = 0.5; // Speed of floating motion
    const rotationSpeed = 0.2; // Speed of rotation

    useEffect(() => {
      if (logoRef.current) {
        gsap.to(logoRef.current.position, {
          y: logoRef.current.position.y + 0.1,
          duration: 5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    }, []);

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
        position={[-2.7, -0.4, -2.15]}
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

  const CustomCamera = ({
    startPosition,
    startTarget,
    startZoom,
    // onUpdate,
  }) => {
    const cameraRef = useRef();

    useEffect(() => {
      if (cameraRef.current) {
        cameraRef.current.lookAt(...startTarget);
      }
    }, [startTarget]);

    // useEffect(() => {
    //   onUpdate(cameraRef.current);
    // }, [onUpdate]);

    return (
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={startPosition}
        zoom={startZoom}
      />
    );
  };

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
            backgroundColor: bgColor,
            backgroundImage: `url(${CorniceParadoxa})`,
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
            {/* <OrbitControls /> */}
            {/* <axesHelper args={[10]} /> */}
            {/* <OrthographicCamera
              makeDefault
              position={[10, 10, 10]}
              zoom={300}
            /> */}
            <CustomCamera
              startPosition={[10, 10, 10]}
              startTarget={[0, 0, 0]}
              startZoom={windowSize > global.UTILS.TABLET_WIDTH ? 330 : 150}
              // onUpdate={(camera) => {
              //   if (camera) camera.lookAt(...cameraSettings.target);
              // }}
            />
            <ambientLight intensity={10} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <ObjModel />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </div>
  );
}
