import express from "express";
import { home, postSubmit, rank, submit } from "./controller";
const router = express.Router();

router.get("/", home);
router.get("/submit",submit).post("/submit", postSubmit);
router.get("/rank", rank);

export default router;