import express from 'express';

import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';

export const app =express();

config({
    path:"./data/config.env"
})
//Using middleware
app.use(express.json());
app.use(cookieParser());

//Using Routes
app.use("/users",userRouter);
app.use("/task",taskRouter)

app.get("/",(req,res)=>{
    res.send("NiceWorking")
});

