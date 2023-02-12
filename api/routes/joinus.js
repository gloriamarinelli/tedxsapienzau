import express from "express";
import { joinus } from "../controllers/joinus.js";

const router = express.Router();

router.post("/joinus", joinus);

export default router;