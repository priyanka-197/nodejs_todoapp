import { User } from "../model/user.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookies } from "../utils/features.js";
import Errorhandler from "../middlewears/error.js";




  export const ragister=async (req,res,next)=>{
try {
  const {name,email,password}=req.body
  let user=await User.findOne({email})
  if(user){
return next( new Errorhandler("user already exist",404))
}
const hashedPassword=await bcrypt.hash(password,10)
user=await User.create({
name,email,password:hashedPassword
})
setCookies(user,res,201,"ragisterd succesfully")
} catch (error) {
  next(error)
}
   }

   export const login=async(req,res,next)=>{

try {
  const {email,password}=req.body
  const user=await User.findOne({email}).select("+password")
 
  if(!user){
   return next( new Errorhandler("invalid email or password",404))
  }
const isMatch = await bcrypt.compare(password,user.password)

if(!isMatch){
  return next( new Errorhandler("invalid password",404))
}
setCookies(user,res,201,`welcome back ${user.name}`)

} catch (error) {
  next(error)
}

   }

   export const getMyProfile=(req,res)=>{


res.status(200).json({
  success:true,
  user:req.user
})

}
  export const logout=(req,res)=>{
res.status(200).cookie("token","",
{
  expires:new Date(Date.now()),
  sameSite:process.env.NODE_ENV ==="development" ? "lax" :"none",
  secure:process.env.NODE_ENV ==="development" ? false :true,
}).json({
  success:true,
  message:"logout"
})
  }