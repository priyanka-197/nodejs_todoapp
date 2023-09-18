import { User } from "../model/user.js"
export const getAllUsers= async (req,res)=>{

    const users=await User.find({})
   
      res.json({
          success:true,
          users,
      })
  }

  export const ragister=async (req,res)=>{
    const {name,email,password}=req.body
   await User.create({
      name,
      email,
      password
    })
  
    res.status(201).cookie("api","backendapi").json({
          success:true,
        message:"ragisrterd sucessfully"
      })
  }

  export const specialFunc=async(req,res)=>{

    res.json({
        success:true,
        message:"joking"
    })
  }

  export const getUserId=async (req,res)=>{
    console.log(req.params)
    const id =req.params.id
     const users=await User.findById(id)

       res.json({
           success:true,
           users
       })
   }