import express from "express";
const router=express.Router();
import {createTask } from "../controller/TaskController.js";

router.post("/", createTask); // Add a new Vehicle
// router.get("/available", getAvailableVehicles); // Get all Vehicle api
// router.get("/", getVehicles);
export default router;