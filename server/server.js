import express from "express";
const app = express();
app.use(express.json());
import TaskRoute from "./routes/TaskRoute.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT =5000;

connectMongoDB();
app.use("/api/Tasks",TaskRoute);

app.listen(PORT,()=>{
    console.log(" server is running");
}) 
