import express from "express";
import { createContect } from "../controllers/contectController.js";

const router = express.Router();

router.post("/", createContect);

export default router;
