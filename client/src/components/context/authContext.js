import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}, [currentUser]);

	const login = async (inputs) => {
		const res = await axios.post("http://localhost:8800/auth/login", inputs);
		setCurrentUser(res.data);
	};

	const logout = async (inputs) => {
		await axios.post("http://localhost:8800/auth/logout", inputs);
		setCurrentUser(null);
	};

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
