import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
	PerspectiveCamera,
	Environment,
	MeshDistortMaterial,
	ContactShadows,
	Text3D,
	Center,
	OrthographicCamera,
	OrbitControls,
	MeshTransmissionMaterial,
	useHelper,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { SpotLightHelper } from "three";
import global from "../../resources/global.json";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function DynamicBubbleCanvas({ windowSize }) {
	const sphere = useRef();
	const light = useRef();
	const [mode, setMode] = useState(false);
	const [down, setDown] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [distanceX, setDistanceX] = useState(0);
	const [distanceY, setDistanceY] = useState(0);

	const [spherePositionX, setSpherePositionX] = useState(1.8);
	const [spherePositionY, setSpherePositionY] = useState(0);

	window.addEventListener("mousemove", (e) => {
		const { x, y } = e;
		let distanceX =
			((x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
		setDistanceX(distanceX);
		let distanceY =
			((y - window.innerHeight / 2) / (window.innerHeight / 2)) * 100;
		setDistanceY(distanceY);
	});

	// Make the bubble float and follow the mouse
	// This is frame-based animation, useFrame subscribes the component to the render-loop
	useFrame((state) => {
		light.current.position.x = state.mouse.x * 20;
		light.current.position.y = state.mouse.y * 20;
		if (sphere.current) {
			sphere.current.position.x = THREE.MathUtils.lerp(
				spherePositionX + sphere.current.position.x - distanceX / 2000,
				hovered ? state.mouse.x / 2 : 0,
				0.2
			);
			sphere.current.position.y = THREE.MathUtils.lerp(
				spherePositionY + sphere.current.position.y - 0.2 + distanceY / 2000,
				Math.sin(state.clock.elapsedTime / 1.5) / 6 +
					(hovered ? state.mouse.y / 2 : 0),
				0.2
			);
		}
	});

	// Springs for color and overall looks, this is state-driven animation
	// React-spring is physics based and turns static props into animated values
	const [{ wobble, coat, color, ambient, env }] = useSpring(
		{
			wobble: down ? 2.3 : hovered ? 2.15 : 2.1,
			coat: mode && !hovered ? 0.04 : 1,
			// ambient: mode && !hovered ? 1.5 : 0.5,
			// env: mode && !hovered ? 0.4 : 1,
			// color: hovered ? "#E8B059" : mode ? "#202020" : "white",
			config: (n) =>
				n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
		},
		[mode, hovered, down]
	);

	if (windowSize > global.UTILS.TABLET_WIDTH) {
		return (
			<>
				{/* <OrbitControls /> */}
				<OrthographicCamera
					makeDefault
					position={[0, 0, 100]}
					fov={75}
					zoom={35}
				>
					<a.ambientLight intensity={0.4} />
					<a.pointLight
						ref={light}
						position-z={-15}
						intensity={2}
						color="#a42332"
					/>
				</OrthographicCamera>
				<Suspense fallback={null}>
					<a.mesh ref={sphere} scale={wobble} position={[5.3, -0.8, 0]}>
						<sphereGeometry args={[1.2, 64, 64]} />
						<AnimatedMaterial color={"#5272b5"} />
					</a.mesh>
					<a.mesh position={[-20, 3, 4]} scale={6}>
						<sphereGeometry args={[1, 64, 64]} />
						<AnimatedMaterial
							color={"#2e3777"}
							metalness={0.2}
							roughness={0.7}
						/>
					</a.mesh>
					<a.mesh position={[20, -5, 4.5]} scale={6}>
						<sphereGeometry args={[1, 64, 64]} />
						<AnimatedMaterial
							color={"#2e3777"}
							metalness={0.2}
							roughness={0.7}
						/>
					</a.mesh>
					{/* {BackToZeroLetters()} */}
					{Lights()}
				</Suspense>
			</>
		);
	} else {
		return (
			<>
				<OrthographicCamera
					makeDefault
					position={[0, 0, 100]}
					fov={75}
					zoom={35}
				>
					<a.ambientLight intensity={0.4} />
					<a.pointLight
						ref={light}
						position-z={-15}
						intensity={2}
						color="#a42332"
					/>
				</OrthographicCamera>
				<Suspense fallback={null}>
					<a.mesh scale={1.25} position={[3.5, 0.5, 0]}>
						<sphereGeometry args={[1, 64, 64]} />
						<AnimatedMaterial color={"#5272b5"} />
					</a.mesh>
					<a.mesh position={[-8.5, 8, 4]} scale={6}>
						<sphereGeometry args={[1, 64, 64]} />
						<AnimatedMaterial
							color={"#2e3777"}
							metalness={0.2}
							roughness={0.7}
						/>
					</a.mesh>
					<a.mesh position={[8.5, -8, 4.5]} scale={6}>
						<sphereGeometry args={[1, 64, 64]} />
						<AnimatedMaterial
							color={"#2e3777"}
							metalness={0.2}
							roughness={0.7}
						/>
					</a.mesh>
					{MobileLights()}
				</Suspense>
			</>
		);
	}
}

const Lights = () => {
	const spotLightRightRef = useRef();
	const spotLightLeftRef = useRef();
	useHelper(spotLightRightRef, SpotLightHelper, "red");
	useHelper(spotLightLeftRef, SpotLightHelper, "green");

	useFrame(() => {
		if (spotLightRightRef && spotLightLeftRef) {
			spotLightRightRef.current.target.position.set(25, 0, 0);
			spotLightRightRef.current.target.updateMatrixWorld();
			spotLightLeftRef.current.target.position.set(-25, 0, 0);
			spotLightLeftRef.current.target.updateMatrixWorld();
		}
	});

	return (
		<>
			<spotLight
				intensity={30}
				color={"#a42332"}
				position={[10, -20, 15]}
				angle={0.4}
				ref={spotLightRightRef}
			/>
			<spotLight
				intensity={20}
				color={"#a42332"}
				position={[10, -20, 15]}
				angle={0.4}
				ref={spotLightLeftRef}
			/>
			<ambientLight intensity={0.55} />
		</>
	);
};

const MobileLights = () => {
	const spotLightRightRef = useRef();
	const spotLightLeftRef = useRef();
	useHelper(spotLightRightRef, SpotLightHelper, "red");
	useHelper(spotLightLeftRef, SpotLightHelper, "green");

	useFrame(() => {
		if (spotLightRightRef && spotLightLeftRef) {
			spotLightLeftRef.current.target.position.set(-5, 10, 2);
			spotLightLeftRef.current.target.updateMatrixWorld();

			spotLightRightRef.current.target.position.set(5, -8, 7);
			spotLightRightRef.current.target.updateMatrixWorld();
		}
	});

	return (
		<>
			<spotLight
				intensity={20}
				color={"#a42332"}
				position={[-5, -10, 30]}
				angle={0.2}
				ref={spotLightLeftRef}
			/>
			<spotLight
				intensity={40}
				color={"#a42332"}
				position={[-5, -8, 5]}
				angle={0.6}
				ref={spotLightRightRef}
			/>

			<ambientLight intensity={0.55} />
		</>
	);
};

function BackToZeroLetters() {
	const groupRef = useRef();
	return (
		<group
			position={[1, 0, 0]}
			ref={groupRef}
			onPointerEnter={() => console.log("enter group")}
		>
			<Letter
				char={"BACK"}
				position={[-10, 3, 0]}
				font={"/Gotham_Black_Italic.json"}
				scale={0.035}
			/>
			<Letter
				char={"TO"}
				position={[2.3, 3, 0]}
				font={"/Gotham_Black_Italic.json"}
				scale={0.035}
			/>
			<Letter
				char={"ZERO"}
				position={[-10.5, -3, 0]}
				font={"/Gotham_Black_Regular.json"}
				scale={0.055}
			/>
		</group>
	);
}

function Letter({ char, ...props }) {
	const letter = useRef();
	// The letters contents are moved to its whereabouts in world coordinates
	return (
		<Text3D
			bevelEnabled
			smooth={1}
			size={80}
			height={4}
			curveSegments={10}
			bevelThickness={10}
			bevelSize={2}
			bevelOffset={0}
			bevelSegments={5}
			ref={letter}
			{...props}
		>
			<meshBasicMaterial color={"#fff"} />
			{char}
		</Text3D>
	);
}
