import { Router } from "express";
import { addMessage } from "../controllers/message.controllers.js";

const router = Router();

router.post('/', addMessage);

export default router;