import express from "express";
import {User} from "../model/user.js"
import { getAllUsers,ragister, specialFunc, getUserId} from "../controllers/user.js";
const router=express.Router();

export default router;

router.get("/all",getAllUsers)

  router.post("/new",ragister)

  router.get('/userid/special',specialFunc)

  router.get("/userid/:id",getUserId)