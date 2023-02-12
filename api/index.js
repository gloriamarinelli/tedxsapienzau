import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.js";
import speakerRoutes from "./routes/speakers.js";
import joinusRoutes from "./routes/joinus.js";
import teamRoutes from "./routes/team.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/blog", blogRoutes);
app.use("/speakers", speakerRoutes);
app.use("/joinus", joinusRoutes);
app.use("/team", teamRoutes);


app.get("/", (req, res) => {
  res.json("Hello backend tedxSapienzaU!");
});

app.listen(8800, () => {
  console.log("Running Server");
});
