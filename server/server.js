import express from "express";
import cors from "cors"
const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "https://test3-six-lac.vercel.app/"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
import TaskRoute from "./routes/TaskRoute.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT =5000;

connectMongoDB();
app.use("/api/tasks",TaskRoute);

app.listen(PORT,()=>{
    console.log(" server is running");
}) 
