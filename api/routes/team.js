import express from "express";
import { getBoardYear, getVolunteersYear } from "../controllers/team.js";

const router = express.Router();

router.get("/:anno", getBoardYear);
router.get("/:anno", getVolunteersYear);

export default router;
