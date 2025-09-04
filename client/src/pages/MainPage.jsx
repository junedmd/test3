"use client";
import { useState,useEffect } from "react";
import LeadsTable from "./LeadsTable";
import TaskForm from "./TaskForm";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
export default function MainPage() {
  const [openForm, setOpenForm] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  
   async function fetchLeads() {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/tasks`);
      setLeads(res.data.data);
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);
  

  return (
    <div className="flex flex-col">

      <LeadsTable 
        leads={leads}
        loading={loading}
       onAddLead={() => setOpenForm(true)} />


      {openForm && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
            <TaskForm onClose={() => setOpenForm(false)} onSuccess={fetchLeads}    />
          
        </div>
      )}
    </div>
  );
}