import Task from "../models/Task.js";


export const createTask = async (req, res) => {
  try {
     const { name,phone,alt_phone,email,alt_email,status,qualification,interest,source,assignedTo,job,state,city,passout,updatedAt} = req.body;
     const task = await Task.create({ name,phone,alt_phone,email,alt_email,status,qualification,interest,source,assignedTo,job,state,city,passout,updatedAt});


    res.status(201).json({
            success: true,
            data: task,
            message: "Add Task successfully !!"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getTask = async (req,res)=>{
  try{
    const Tasks= await Task.find();
      const data = Tasks.map(task => {
      return {
        ...task._doc,
        updatedAt: task.updatedAt
          .toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          })
          .replace("AM", "am")
          .replace("PM", "pm")
          .replace(":", ".")
      };
    });

    res.status(201).json({
        success:true,
        data:data,
        message:"You Successfully Get All Tasks Data"
    })  
  }catch(error){
     res.status(500).json({ success: false, message: error.message })
  }
}

export const searchTasks = async (req, res) => {
  try {
    const { q } = req.query; 

    let filter = {};
    if (q) {
      const isNumber = !isNaN(q);
      filter = {
        $or: [
          { name: new RegExp(q, "i") },
          { phone: new RegExp(q, "i") },
          { email: new RegExp(q, "i") },
          { status: new RegExp(q, "i") },
          {assignedTo:new RegExp(q,"i")},
          {city:new RegExp(q,"i")},
           ...(isNumber ? [{ passout: Number(q) }] : []) 

        ]
      };
    }

    const tasks = await Task.find(filter).sort({ updatedAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




























// // ✅ Get single lead by ID
//  const getLeadById = async (req, res) => {
//   try {
//     const lead = await Lead.findById(req.params.id);
//     if (!lead) return res.status(404).json({ message: "Lead not found" });
//     res.json(lead);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ Update lead
// const updateLead = async (req, res) => {
//   try {
//     const updatedLead = await Lead.findByIdAndUpdate(
//       req.params.id,
//       { ...req.body, updatedAt: Date.now() },
//       { new: true }
//     );
//     if (!updatedLead) return res.status(404).json({ message: "Lead not found" });
//     res.json(updatedLead);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // ✅ Delete lead
// const deleteLead = async (req, res) => {
//   try {
//     const deletedLead = await Lead.findByIdAndDelete(req.params.id);
//     if (!deletedLead) return res.status(404).json({ message: "Lead not found" });
//     res.json({ message: "Lead deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
