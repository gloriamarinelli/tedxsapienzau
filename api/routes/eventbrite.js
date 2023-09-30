import express from "express";
import { eventbrite } from "../controllers/eventbrite.js";

const router = express.Router();

router.post("/eventbrite", eventbrite);

export default router;
