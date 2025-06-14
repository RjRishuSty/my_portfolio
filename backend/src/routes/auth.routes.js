import { Router } from "express";
import { checkAuth, login,logout } from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();
router.post('/login', login);
router.post('/logout', logout);
router.get('/check-auth',verifyToken, checkAuth)
export default router; 