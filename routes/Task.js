import  Express from "express";

import { newTask,getMyTask, updateTask, deleteTask } from "../controllers/Task.js";
import { isAuthenticated } from "../middlewears/auth.js";


 const router = Express.Router()

 router.post("/new",isAuthenticated, newTask)
 router.get("/my",isAuthenticated,getMyTask)
 router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

 export default router