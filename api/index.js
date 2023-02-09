import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.js";
import speakerRoutes from "./routes/speakers.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/blog", blogRoutes);
app.use("/speakers", speakerRoutes);

app.get("/", (req, res) => {
  res.json("Hello backend tedxSapienzaU!");
});

app.listen(8800, () => {
  console.log("Running Server");
});
