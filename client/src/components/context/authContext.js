import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	const [currentToken, setCurrentToken] = useState(
		JSON.parse(localStorage.getItem("token")) || null
	);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	useEffect(() => {
		localStorage.setItem("token", JSON.stringify(currentToken));
	}, [currentToken]);

	const login = async (inputs) => {
		const res = await axios.post("http://localhost:8800/auth/login", inputs);
		setCurrentUser(res.data.userData);
		setCurrentToken(res.data.token);
	};

	const logout = async (inputs) => {
		await axios.post("http://localhost:8800/auth/logout");
		setCurrentUser(null);
		setCurrentToken(null);
	};

	return (
		<AuthContext.Provider value={{ currentUser, currentToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
