import { db } from "../db.js";

export const joinus = (req, res) => {
  const q =
    "INSERT INTO joinus (`email`,`nome`,`cognome`,`interesse`) VALUES (?)";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Controlla i campi!");
  });
};

export const joinus1 = (req, res) => {
  const q =
    "INSERT INTO joinus1 (`email`,`nome`,`telefono`,`messaggio`) VALUES (?)";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Controlla i campi!");
  });
};
