import Errorhandler from "../middlewears/error.js"
import { Task } from "../model/task.js"

export const newTask=async(req,res,next)=>{
try {
    const{title,descreption}=req.body

await Task.create({
title,descreption,user:req.user
})
res.status(201).json({
    success:true,
    message:"task edit successfully"
})
} catch (error) {
    next(error)
}
}

export const getMyTask=async (req,res,next)=>{

try {
    const userId=req.user._id

 const tasks = await Task.find({user: userId })
 
res.status(200).json({
    success:true,
    tasks,
    
})
} catch (error) {
    next(error)
}}
export const updateTask=async (req,res,next)=>{
try {
    const {id}=req.params
    const task= await Task.findById(id)
    if(!task){
        return next(new Errorhandler())
    }
    task.isCompeleted = !task.isCompeleted
    await task.save()
    res.status(200).json({
        success:true,
        message:"task updated"
    
        
    }) 
} catch (error) {
   next(error) 
}}
export const deleteTask=async (req,res,next)=>{
  try {
    const {id} = req.params 
    const task= await Task.findById(id)
    if(!task){
        return next(new Errorhandler())
    } 
    await task.deleteOne()

res.status(200).json({
    success:true,
   
    
})
  } catch (error) {
    next(error)
  }}