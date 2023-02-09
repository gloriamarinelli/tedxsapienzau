import { db } from "../db.js";

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
    "SELECT b.id, `titolo`, `descrizione`, `image`, `data` FROM blog b WHERE b.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
