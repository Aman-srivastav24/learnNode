import { User } from "../models/user.js";

export const getAllUsers =async(req,res)=>{
    const users = await User.find({});
    res.json({
        success:true,
        users,
    });
}

export const register = async(req,res)=>{
    const {name , password,email} =req.body;
     await User.create({
        name,
        email,
        password,
     });
    res.json({
        success:true,
        message:"Registered Successfully",

    });
}

export const specialFunc =(req,res)=>{
    res.json({
        success:true,
        message:"Just Joking",
    });
}

export const getUserById =async(req,res)=>{
    const{id} = req.params;
    const user = await User.findById(id);
    res.json({
        success:true,
        user,
    });
}
export const updateUserById =async(req,res)=>{
    const{id} = req.params;
    const user = await User.findById(id);
    res.json({
        success:true,
        message:"Updated",
    });
}
export const deleteUserById =async(req,res)=>{
    const{id} = req.params;
    const user = await User.findById(id);
    res.json({
        success:true,
        message:"Deleted",
    });
}