import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.js";
import speakerRoutes from "./routes/speakers.js";
import joinusRoutes from "./routes/joinus.js";
import teamRoutes from "./routes/team.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
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
