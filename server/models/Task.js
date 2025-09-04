import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        phone:{type:String,required:true},
        alt_phone:{type:String,required:true},
        email:{type:String, required:true},
        alt_email:{type:String,required:true},
        status:{type:String,required:true},
        qualification:{type:String, required:true},
        interest:{type:String,required:true},
        source:{type:String, required:true},
        assignedTo:{type:String,required:true},
        job:{type:String,required:true},
        state:{type:String,required:true},
        city:{type:String,required:true},
        passout:{type:Number,required:true},
        updatedAt: { type: Date, default: Date.now }

    },
    {
        timestamps:true,
        }
 
);
 const Task = mongoose.model("Task", taskSchema);
export default Task;
