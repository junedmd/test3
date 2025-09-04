"use client";
import React, { useState, useEffect } from "react";

import { FunnelIcon, PlusIcon } from "lucide-react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
function LeadsTable({ onAddLead }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");


  const statusColors = {
    New: "bg-blue-100 text-blue-600",
    Qualified: "bg-green-100 text-green-600",
    Converted: "bg-purple-100 text-purple-600",
    "Follow-Up": "bg-orange-100 text-orange-600",
  };

  const fetchLeads = async (q = "") => {
    try {
      setLoading(true);
      let url = q
        ? `${API}/api/tasks/search?q=${q}`
        : `${API}/api/tasks`;
      const res = await axios.get(url);
      setLeads(res.data.data || res.data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchLeads(search);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);



  return (
    <>


      <div className="flex">
        <div className="flex-1 p-6">

          <div className="flex justify-between items-center ">
            <div>
              <h1 className="text-2xl font-bold">Leads</h1>
              <p className="text-gray-500 text-sm">Manage and track your leads</p>
            </div>
            <button onClick={onAddLead} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              <PlusIcon size={16} /> Add Lead
            </button>
          </div>


          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-3 py-2 max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          <div className="border rounded-xl shadow-sm overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50 ">
                <tr>
                  <th className=" text-center  border-1">Name</th>
                  <th className="text-left px-4 py-3 border-1">Contact</th>
                  <th className="text-left px-4 py-3 border-1">Status</th>
                  <th className="text-left px-4 py-3 border-1">Qualification</th>
                  <th className="text-left px-4 py-3 border-1">Interest</th>
                  <th className="text-left px-4 py-3 border-1 ">Source</th>
                  <th className="text-left px-4 py-3 border-1">Assigned To</th>
                  <th className="text-left px-4 py-3 border-1">Updated At</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={8} className="text-center py-6">
                      Loading...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-6">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead._id} className="border-t hover:bg-gray-50">
                      <td className="px-2 font-medium text-blue-600 cursor-pointer hover:underline">
                        {lead.name}
                      </td>
                      <td className="px-2 py-3 border-1">{lead.phone}</td>
                      <td className="px-4 py-3 border-1">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-lg ${statusColors[lead.status]

                            } text-sm border-1`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-1 py-1 text-sm border-1 ">{lead.qualification}</td>
                      <td className="px-1 py-1 text-sm border-1">{lead.interest}</td>
                      <td className="px-1 py-1 text-sm border-1">{lead.source}</td>
                      <td className="px-1 py-1 text-sm border-1">{lead.assignedTo}</td>
                      <td className="px-1 py-1 border-1 ">
                        {lead.updatedAt}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadsTable;
