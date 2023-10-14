import { db } from "../db.js";

export const getWorkshop = (req, res) => {
	const q = "SELECT * FROM workshop";

	db.query(q, [], (err, data) => {
		if (err) return res.send(err);
		return res.status(200).json(data);
	});
};