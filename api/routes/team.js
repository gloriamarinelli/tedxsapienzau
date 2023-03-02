import express from "express";
import { getTeamYear } from "../controllers/team.js";

const router = express.Router();

router.get("/:anno",  getTeamYear );

export default router;
