import React, { useState } from "react";

import "../../resources/styles/loginstyle.css";
import global from "../../resources/global.json";

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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Add your submit logic here
		console.log(`email: ${email} password: ${password}`);
	};

	return (
		<form onSubmit={handleSubmit} style={{ width: "70%" }}>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<label htmlFor="email-login">Email:</label>
				<input
					type="text"
					id="email-login"
					className="mb-4"
					placeholder=""
					value={email}
					onChange={(event) => setEmail(event.target.value)}
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
