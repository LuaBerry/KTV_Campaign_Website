import express from "express";
import { home, rank, submit } from "./controller";
const router = express.Router();

router.get("/", home);
router.get("/submit",submit).post("/submit");
router.get("/rank", rank);

export default router;