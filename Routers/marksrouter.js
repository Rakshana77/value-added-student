import express from "express";
import { createmark, getmarks } from "../Controllers/markscontroller.js";

const router = express.Router();

router.post("/create", createmark);
router.get("/getMark", getmarks);

export default router;