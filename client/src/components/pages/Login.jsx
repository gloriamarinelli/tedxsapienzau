import React, { useState, useContext } from "react";
import axios from "axios";
import "../../resources/styles/loginstyle.css";
import global from "../../resources/global.json";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";

export default function Login() {
	return (
		<div
			style={{
				height: `calc(100vh - ${global.UTILS.NAV_HEIGHT} - ${global.UTILS.SOCIAL_NAV_HEIGHT})`,
			}}
			className="login-main-container"
		>
			<div className="login-container">
				<h1 className="mb-4">LOGIN</h1>
				{LoginForm()}
			</div>
		</div>
	);
}

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// Add your submit logic here
		console.log(`username: ${username} password: ${password}`);
		try {
			login({ username: username, password: password });
			navigate("/blog");
		} catch (err) {
			alert("C'è stato un errore");
		}
	};

	return (
		<form onSubmit={handleSubmit} style={{ width: "70%" }}>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="usernam"
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
			</div>
		</form>
	);
};
