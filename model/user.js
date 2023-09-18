import mongoose from 'mongoose';


const sechema= new mongoose.Schema({
    name:String,email:String,password:String
})

export const User=mongoose.model("User",sechema)