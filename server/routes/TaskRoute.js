import express from "express";
const router=express.Router();
import {createTask,getTask,searchTasks } from "../controller/TaskController.js";

router.post("/", createTask);
router.get("/",getTask);
router.get("/search", searchTasks);

export default router;