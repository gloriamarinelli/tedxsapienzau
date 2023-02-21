import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.js";
import speakerRoutes from "./routes/speakers.js";
import joinRoutes from "./routes/join.js";
import teamRoutes from "./routes/team.js";
import authRoutes from "./routes/auth.js";
import bodyParser from "body-parser";
import newsletterRoutes from "./routes/newsletter.js"

const app = express();

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/blog", blogRoutes);
app.use("/speakers", speakerRoutes);
app.use("/join", joinRoutes);
app.use("/join1", joinRoutes);
app.use("/team", teamRoutes);
app.use("/auth", authRoutes);
app.use("/newsletter", newsletterRoutes);

app.get("/", (req, res) => {
	res.json("Hello backend tedxSapienzaU!");
});

app.listen(8800, () => {
	console.log("Running Server");
});
