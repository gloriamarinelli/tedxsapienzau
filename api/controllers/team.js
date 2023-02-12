import { db } from "../db.js";

export const getTeam = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM team WHERE cat=?"
    : "SELECT * FROM team";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getTeamYear = (req, res) => {
  const q = "SELECT * FROM team WHERE anno = ?";
  db.query(q, req.params.anno, (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};
