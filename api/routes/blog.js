import express from "express";
import { getBlogID, getBlog, postBlog } from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlog);
router.get("/:id", getBlogID);
router.post("/", postBlog);

export default router;
