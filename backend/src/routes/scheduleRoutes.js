import express from "express";
import { getEvents } from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/events", getEvents);

export default router;
