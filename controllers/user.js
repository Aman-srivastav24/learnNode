import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../utils/features.js";
export const getAllUsers =async(req,res)=>{}

export const login =async(req,res,next)=>{
    const{email , password}  = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user)
    return res.status(404).json({
    success: false,
    message: "Invalid User Or password!!"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
    return res.status(404).json({
    success: false,
    message: "Invalid User Or password!!!"});

    sendCookie(user,res,`Welcome back,${user.name}`,200)
}


export const register = async(req,res)=>{
const {name , email ,password}= req.body;
let user = await User.findOne({email});
if(user)
    return res.status(404).json({
        success:false,
        message:"User Already Exist",
    });

    const hashedPassword = await bcrypt.hash(password,10);

    user = await User.create({name , email , password:hashedPassword});

    sendCookie(user,res,"Registered Successfully",201);

}

export const getUserById =async(req,res)=>{}


