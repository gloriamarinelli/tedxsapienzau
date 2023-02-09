import express from "express";
import { getBlogID, getBlog } from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlog);
router.get("/:id", getBlogID);

export default router;
