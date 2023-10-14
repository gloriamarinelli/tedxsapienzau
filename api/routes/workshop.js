import express from "express";
import { getWorkshop } from "../controllers/workshop.js";

const router = express.Router();

router.get("/", getWorkshop);

export default router;
