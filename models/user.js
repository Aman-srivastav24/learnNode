import mongoose from "mongoose";

//Creating Models
const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

export const User = mongoose.model("User",schema);