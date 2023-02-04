import express from "express"
import blogRoutes from "./routes/blog.js"

const app = express();

app.use(express.json());
app.use("api/blog", blogRoutes);


app.listen(8800, () => {
  console.log("running server");
});
