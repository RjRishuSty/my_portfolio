import { Router } from "express";
import { adminLogin, adminLogout, getMessages } from "../Controllers/admin.controllers.js";

const router = Router();
router.post('/login', adminLogin);
router.post('/logout', adminLogout);
router.get('/get-messages', getMessages);

export default router;