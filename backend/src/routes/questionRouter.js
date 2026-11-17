import { getAnswer } from "../controllers/questionController.js";
import { middleware } from "../controllers/questionController.js";
import { showHistory } from "../controllers/historyController.js";

import express from "express";
let router=express.Router();
router.post("/query",middleware,getAnswer);
router.get("/history",showHistory)

export default router;