import { db } from "../db.js";

export const getTeam = (req, res) => {
	const q = `SELECT * FROM team${req.params.anno}`;
	db.query(q, req.params.anno, (err, data) => {
		if (err) return res.send(err);
		return res.status(200).json(data);
	});
};
