import React, { useState, useContext } from "react";
import axios from "axios";
import "../../resources/styles/loginstyle.css";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Image from "../images/logo-black.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
	const { currentUser } = useContext(AuthContext);
	const { logout } = useContext(AuthContext);

	return (
		<div
			style={{
				height: `calc(100vh - ${global.UTILS.NAV_HEIGHT} - ${global.UTILS.SOCIAL_NAV_HEIGHT})`,
			}}
			className="login-main-container"
		>
			<div className="login-container">
				<LazyLoadImage src={Image} alt="logo" width="" height="50" />
				<h1
					className="mb-4 mt-4"
					style={{
						fontFamily: "GothamBold",
					}}
				>
					{currentUser ? `Benvenuto, ${currentUser.username}` : "LOGIN"}
				</h1>
				{currentUser ? <div style={{ width: "80%" }}></div> : LoginForm()}
			</div>
		</div>
	);
}

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const { login } = useContext(AuthContext);

	const errorMessageRef = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		await login({ username: username, password: password })
			.then((res) => console.log(res))
			.catch((err) => {
				setError(err.response.data);
				console.log(err);
				errorMessageRef.current.classList.remove("error-animation");
				void errorMessageRef.current.offsetWidth;
				errorMessageRef.current.classList.add("error-animation");
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit} style={{ width: "100%" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						className="mb-4"
						placeholder=""
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						className="mb-5"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<button type="submit" className="button" style={{ width: "100%" }}>
						Login
					</button>
					<span
						className="error-message error-animation mt-3"
						ref={errorMessageRef}
						style={{ display: error ? "initial" : "none" }}
					>
						<FontAwesomeIcon icon={faCircleXmark} /> {error}
					</span>
				</div>
			</form>
		</>
	);
};
