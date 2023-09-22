import express from "express";
import { User } from "../model/user.js";
import {

  ragister,
  login,
  logout,
  getMyProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewears/auth.js";
const router = express.Router();



router.post("/ragister", ragister);
router.post("/login", login);
router.get("/logout",logout)
router.get("/me",isAuthenticated,getMyProfile);

export default router;
