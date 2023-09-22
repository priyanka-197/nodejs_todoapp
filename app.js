import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";
import taskRouter from "./routes/Task.js"
import {config}  from "dotenv";
import {User} from "./model/user.js";
import cookieParser from "cookie-parser"
import { errorMiddleWare } from "./middlewears/error.js";

config({
  path:"./data/config.env"
})

 export const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  methods:["GET","POST","PUT","PATCH"],
  credentials:true
}))
app.use("/api/v1/users",userRouter)
app.use("/api/v1/task",taskRouter)



app.get("/",(req,res)=>{
  res.render("index")
})


app.use(errorMiddleWare)
