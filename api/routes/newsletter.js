import express from "express";
import {postNewsletter} from "../controllers/newsletter.js";

const router = express.Router();

router.post("/", postNewsletter);
router.get("/newsletter", getNewsletter);

export default router;