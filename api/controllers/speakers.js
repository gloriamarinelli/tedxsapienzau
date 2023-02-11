import { db } from "../db.js";

export const getAllSpeakers = (req, res) => {
	console.log("I'm getting all the speakers!");
	const q = req.query.cat
		? "SELECT * FROM speakers WHERE cat=?"
		: "SELECT * FROM speakers";

	db.query(q, [req.query.cat], (err, data) => {
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
