import Task from "../models/Task.js";


export const createTask = async (req, res) => {
  try {
     const { name,contact,status,qualification,intrest,source,assignedTo,updatedAt} = req.body;
     const task = await Task.create({ name,contact,status,qualification,intrest,source,assignedTo,updatedAt });


    res.status(201).json({
            success: true,
            data: task,
            message: "Add Task successfully !!"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get all leads (with search & filters)
//  const getLeads = async (req, res) => {
//   try {
//     const { search, match = "and" } = req.query;
//     let filters = req.query.filters ? JSON.parse(req.query.filters) : {};

//     let query = [];

//     // 🔍 Search by name, email, or phone
//     if (search) {
//       query.push({
//         $or: [
//           { name: new RegExp(search, "i") },
//           { contact: new RegExp(search, "i") }
//         ]
//       });
//     }

//     // 🎯 Apply filters
//     if (Object.keys(filters).length > 0) {
//       query.push(filters);
//     }

//     // 👇 Build MongoDB query based on match type
//     let mongoQuery = query.length > 0
//       ? match === "or" ? { $or: query } : { $and: query }
//       : {};

//     const leads = await Lead.find(mongoQuery).sort({ updatedAt: -1 });
//     res.json(leads);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




































































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
