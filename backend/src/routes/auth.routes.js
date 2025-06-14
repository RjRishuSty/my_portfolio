import { Router } from "express";
import { checkAuth, login,logout } from "../controllers/auth.controllers.js";

const router = Router();
router.post('/login', login);
router.post('/logout', logout);
router.get('/check-auth', checkAuth)
export default router; 