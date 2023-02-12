import express from "express";
import { getTeam, getTeamYear } from "../controllers/team.js";

const router = express.Router();

router.get("/", getTeam);

router.get("/:anno", getTeamYear);

export default router;
