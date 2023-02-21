import express from "express";
import { join } from "../controllers/join.js";
import { join1 } from "../controllers/join.js";

const router = express.Router();

router.post("/join", join);
router.post("/join1", join1);

export default router;