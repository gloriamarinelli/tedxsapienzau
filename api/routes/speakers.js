import express from "express";
import { getAllSpeakers, getSpeakersYear } from "../controllers/speakers.js";

const router = express.Router();

router.get("/", getAllSpeakers);
router.get("/edizione/:anno", getSpeakersYear);

export default router;
