import { db } from "../db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET =
	"goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

export const getBlog = (req, res) => {
	const q = req.query.cat
		? "SELECT * FROM blog WHERE cat=?"
		: "SELECT * FROM blog";

	db.query(q, [req.query.cat], (err, data) => {
		if (err) return res.send(err);
		return res.status(200).json(data);
	});
};

export const getBlogID = (req, res) => {
	const q =
		"SELECT b.id, `titolo`, `descrizione`, `image`, `data`, `autore` FROM blog b WHERE b.id = ? ";

	db.query(q, [req.params.id], (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data[0]);
	});
};

export const postBlog = (req, res) => {
	const bearerToken = req.headers["authorization"];
	if (bearerToken) {
		const token = bearerToken.split(" ")[1];
		jwt.verify(token, JWT_SECRET, (err, decoded) => {
			if (err) {
				console.log(err);
				return res.status(401).json("Token errato");
			} else {
				const q =
					"INSERT INTO blog (`titolo`, `descrizione`,`autore`, `image`, `data`) VALUES (?)";
				const values = [
					req.body.title,
					req.body.description,
					req.body.autore,
					req.body.image,
					new Date(),
				];
				db.query(q, [values], (err, data) => {
					if (err) return res.json(err);
					return res.json("Inserted BlogPost");
				});
			}
		});
	}
};
