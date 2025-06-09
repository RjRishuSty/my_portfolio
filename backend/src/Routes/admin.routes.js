import { Router } from "express";
import { getMessages } from "../Controllers/admin.controllers.js";

const router = Router();

router.get('/get-messages', getMessages);

export default router;