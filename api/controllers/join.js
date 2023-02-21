import { db } from "../db.js";

export const join= (req, res) => {
  const q =
    "INSERT INTO join (`email`,`nome`,`cognome`,`interesse`) VALUES (?)";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Controlla i campi!");
  });
};

export const join1 = (req, res) => {
  const q =
    "INSERT INTO join1 (`email`,`nome`,`telefono`,`messaggio`) VALUES (?)";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Controlla i campi!");
  });
};
