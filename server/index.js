import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import videoRoute from "./routes/videos.js";
import commentRoute from "./routes/comments.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors())
dotenv.config()

// mongoDB database connection
const connect = () =>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to DB")
    })
    .catch(error=>{throw error});
}

// all routes called
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/videos",videoRoute);
app.use("/api/comments",commentRoute);

app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    });
});


// create a server on a specific port
app.listen(process.env.PORT,()=>{
    connect() 
    console.log(`Server is running on ${process.env.PORT}`)
})

