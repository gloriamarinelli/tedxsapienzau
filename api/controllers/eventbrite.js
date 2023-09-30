import { db } from "../db.js";

export const eventbrite= (req, res) => {
  const q =
    "INSERT INTO evenbrite (`codice`,`nome`,`cognome`,`email`) VALUES (?)";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Controlla i campi!");
  });
};

