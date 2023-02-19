import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
	return;
	const q = "INSERT INTO users(`username`, `password`) VALUES (?)";
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync("");

	const values = ["tedxAdmin", hash];
	db.query(q, [values], (err, data) => {
		if (err) return res.status(500).json(err);
		return res.status(200).json(data[0]);
	});
};

export const login = (req, res) => {
	const q = "SELECT * FROM users WHERE username = ?";
	db.query(q, [req.body.username], (err, data) => {
		if (err) return res.json(err);
		if (data.length === 0) return res.status(404).json("User not found!");

		const isPasswordCorrect = bcrypt.compareSync(
			req.body.password,
			data[0].password
		);

		const { password, ...other } = data[0];

		if (!isPasswordCorrect)
			return res.status(400).json("Wrong username or password!");

		res.status(200).json(other);
	});
};

export const logout = (req, res) => {};
