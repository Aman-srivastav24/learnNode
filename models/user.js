import mongoose from "mongoose";

//Creating Models
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        selected:false,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

export const User = mongoose.model("User",schema);