import { db } from "../db.js";

export const postNewsletter = (req, res) => {
  const q = "INSERT INTO newsletter (`email`) VALUES (?)";
  const values = [req.body.email];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Inserted Email");
  });
};
