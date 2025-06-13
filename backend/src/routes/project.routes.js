import { Router } from "express";
import { createProject } from "../controllers/project.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/create-project", verifyToken, createProject);

export default router;
