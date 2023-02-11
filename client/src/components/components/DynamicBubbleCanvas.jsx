import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
	PerspectiveCamera,
	Environment,
	MeshDistortMaterial,
	ContactShadows,
	Text3D,
	MeshTransmissionMaterial,
	Center,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function DynamicBubbleCanvas({ setBg }) {
	const sphere = useRef();
	const light = useRef();
	const [mode, setMode] = useState(false);
	const [down, setDown] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [distanceX, setDistanceX] = useState(0);
	const [distanceY, setDistanceY] = useState(0);

	// Change cursor on hovered state
	useEffect(() => {
		// document.body.style.cursor = hovered
		// 	? "none"
		// 	: `url('data:image/svg+xml;base64,${btoa(
		// 			'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#a42332"/></svg>'
		// 	  )}'), auto`;
	}, [hovered]);

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
				sphere.current.position.x - distanceX / 2000,
				hovered ? state.mouse.x / 2 : 0,
				0.2
			);
			sphere.current.position.y = THREE.MathUtils.lerp(
				sphere.current.position.y + distanceY / 2000,
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
			wobble: down ? 2.2 : hovered ? 2.05 : 2,
			coat: mode && !hovered ? 0.04 : 1,
			// ambient: mode && !hovered ? 1.5 : 0.5,
			// env: mode && !hovered ? 0.4 : 1,
			// color: hovered ? "#E8B059" : mode ? "#202020" : "white",
			config: (n) =>
				n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
		},
		[mode, hovered, down]
	);

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={75}>
				<a.ambientLight intensity={0.4} />
				<a.pointLight
					ref={light}
					position-z={-15}
					intensity={2}
					color="#a42332"
				/>
			</PerspectiveCamera>
			<Suspense fallback={null}>
				<a.mesh
					ref={sphere}
					scale={wobble}
					onPointerOver={() => setHovered(true)}
					onPointerOut={() => setHovered(false)}
					onPointerDown={() => setDown(true)}
					onPointerUp={() => {
						setDown(false);
						// Toggle mode between dark and bright
						setMode(!mode);
						setBg({
							background: !mode ? "#202020" : "#f0f0f0",
							fill: !mode ? "#f0f0f0" : "#202020",
						});
					}}
				>
					<sphereGeometry args={[1, 64, 64]} />
					<AnimatedMaterial color={"#2e3777"} metalness={0.2} roughness={0.9} />
				</a.mesh>
				<a.mesh position={[2, 1.2, 4]}>
					<sphereGeometry args={[1, 64, 64]} />
					<AnimatedMaterial color={"#2e3777"} metalness={0.2} roughness={0.9} />
				</a.mesh>
				<a.mesh position={[-2, -0.7, 4.5]}>
					<sphereGeometry args={[1, 64, 64]} />
					<AnimatedMaterial color={"#2e3777"} metalness={0.2} roughness={0.9} />
				</a.mesh>
				<ContactShadows
					rotation={[Math.PI / 2, 0, 0]}
					position={[0, -1.6, 0]}
					opacity={mode ? 0.8 : 0.4}
					width={15}
					height={15}
					blur={2.5}
					far={1.6}
				/>

				<directionalLight
					intensity={12}
					color={"#a42332"}
					position={[0, -10, -3]}
				/>
				<hemisphereLight
					groundColor={"#a42332"}
					color={"#2e3777"}
					intensity={5}
				/>
			</Suspense>
		</>
	);
}
