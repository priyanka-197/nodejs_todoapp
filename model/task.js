import mongoose from 'mongoose';


const sechema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
      },
   descreption:{
      type:String,
      required:true,
    },
   isCompeleted:{
        type:Boolean,
       default:false,
    },
    user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
    },
    createdAt:{
type:Date,
default:Date.now
    }
})

export const Task=mongoose.model("Task",sechema)