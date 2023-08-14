import mongoose from "mongoose";


//Connection to Database
export const connectDB=()=>{mongoose.connect(process.env.MONGO_URI,{
    dbName:"Backendapi",
}).then(()=>{
    console.log("Server is Connected To DataBase!");
}).catch((e)=>{
    console.log(e);
});
}