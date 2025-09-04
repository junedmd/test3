import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        contact:{type:String,required:true},
        status:{type:String,enum: ["New", "Qualified", "Follow-Up", "Converted"],required:true},
        qualification:{type:String, required:true},
        intrest:{type:String, required:true},
        source:{type:String, required:true},
        assignedTo:{type:String, required:true},
        updatedAt: { type: Date, default: Date.now ,required:true}

    },
    {
        timestamps:true,
        }
 
);
 const Task = mongoose.model("Task", taskSchema);
export default Task;
