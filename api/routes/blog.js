import express from "express";
import {
	getBlogPostFromID,
	getBlog,
	postBlog,
	countBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/count", countBlog);
router.get("/:id", getBlogPostFromID);
router.post("/", postBlog);
router.get("/", getBlog);

export default router;
