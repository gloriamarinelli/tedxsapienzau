import { db } from "../db.js";

export const getBoardYear = (req, res) => {
  const q = "SELECT * FROM board WHERE anno = ?";
  db.query(q, req.params.anno, (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getVolunteersYear = (req, res) => {
  const q = "SELECT * FROM volontari WHERE anno = ?";
  db.query(q, req.params.anno, (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};
