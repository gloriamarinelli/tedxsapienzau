import { db } from "../db.js";

export const getAllSpeakers = (req, res) => {
	const q = "SELECT * FROM speakers";

	db.query(q, [], (err, data) => {
		if (err) return res.send(err);
		return res.status(200).json(data);
	});
};

export const getSpeakersYear = (req, res) => {
	const q = "SELECT * FROM speakers WHERE anno = ?";
	db.query(q, req.params.anno, (err, data) => {
		if (err) return res.send(err);
		return res.status(200).json(data);
	});
};
