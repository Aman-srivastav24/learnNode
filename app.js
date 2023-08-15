import express from 'express';

import userRouter from './routes/user.js';
import {config} from 'dotenv'

export const app =express();

config({
    path:"./data/config.env"
})
//Using middleware
app.use(express.json());

//Using Routes
app.use("/users",userRouter);

app.get("/",(req,res)=>{
    res.send("NiceWorking")
});

