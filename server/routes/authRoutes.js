import { Router } from "express";
import { registerUser } from "../controllers/register.js";
const router = Router();
// create register api
router.post("/register", registerUser);

// create login api


export default router;
