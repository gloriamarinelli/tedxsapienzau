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
		return new Promise((res, rej) => {
			axios
				.post("http://localhost:8800/auth/login", inputs)
				.then((result) => {
					setCurrentUser(result.data.userData);
					setCurrentToken(result.data.token);
					res(result);
				})
				.catch((err) => {
					rej(err);
				});
		});
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
