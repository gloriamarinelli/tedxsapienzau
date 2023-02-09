import express from "express";
import mysql from "mysql";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import speakerRoutes from "./routes/speakers.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts", postRoutes);
app.use("/speakers", speakerRoutes);

app.get("/", (req, res) => {
  res.json("Hello backend tedxSapienzaU!");
});

app.listen(8800, () => {
  console.log("Running Server");
});
