import express from 'express';

import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
export const app =express();

config({
    path:"./data/config.env"
})
//Using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));

//Using Routes
app.use("/users",userRouter);
app.use("/task",taskRouter)

app.get("/",(req,res)=>{
    res.send("NiceWorking")
});

app.use((err,req,res,next)=>{
    return res.status(404).json({
        success:false,
        message:err.message,
    })
})
