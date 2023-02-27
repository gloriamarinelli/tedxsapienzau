import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET =
	"goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

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
			return res.status(400).json("Username o password errati");

		const token = jwt.sign({ username: data[0].username }, JWT_SECRET, {
			expiresIn: "48h",
		});

		res.status(200).json({ userData: other, token: token });
	});
};

export const logout = (req, res) => {
	res.status(200).json("User has been logged out.");
};
