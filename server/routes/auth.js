import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router()

// SIGNUP
router.post("/signup", signup)

// SIGNIN
router.post("/signin", signin)

// GOOGLEAUTH
router.post("/google", googleAuth)

export default router;