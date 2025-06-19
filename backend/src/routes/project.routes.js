import { Router } from "express";
import { createProject, getProjects } from "../controllers/project.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/create-project", verifyToken, createProject);
router.get("/projects", getProjects);

export default router;
