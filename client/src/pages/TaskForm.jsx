
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const API = import.meta.env.VITE_API_URL;
export default function TaskForm({ onClose ,onSuccess}) {


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")
    const [alt_phone, setAlt_Phone] = useState("")
    const [email, setEmail] = useState("")
    const [alt_email, setAlt_Email] = useState("")
    const [status, setStatus] = useState("New")
    const [qualification, setQualification] = useState("High School");
    const [interest, setInterest] = useState("Web Development");
    const [source, setSource] = useState("Website");
    const [assignedTo, setAssignedTo] = useState("John Dee");
    const [job, setJob] = useState("");
    const [state, setState] = useState("");
    const [city, SetCity] = useState("");
    const [passout, setPassout] = useState("");


    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            name,
            phone,
            alt_phone,
            email,
            alt_email,
            status,
            qualification,
            interest,
            source,
            assignedTo,
            job,
            state,
            city,
            passout,
        };

        try {
            const res = await axios.post(`${API}/api/tasks`, payload);
              toast.success("Lead Add Successfully");

            setName("");
            setPhone("");
            setAlt_Phone("");
            setEmail("");
            setAlt_Email("");
            setStatus("New");
            setQualification("High School");
            setInterest("Web Development");
            setSource("Website");
            setAssignedTo("John Dee");
            setJob("");
            setState("");
            SetCity("");
            setPassout("");

            onSuccess?.();
            onClose?.();
        } catch (error) {
            console.log(error.message)    
          toast.error("Lead Failed :" + (err.response?.data?.message || "Something went wrong"));
          
        } finally {
            setLoading(false);
        }
    };

    const inputClasses =
        "w-full h-8 px-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500";


    return (
        <div className=" flex justify-center items-center">



            <div className="bg-white shadow-md rounded-lg p-2 w-fit items-center">

                <div className="flex justify-between realtive ">
                    <h3 className="text-xl px-5"> Add Lead</h3>
                    <button onClick={onClose} className=" ml-4 text-gray-500 hover:text-red-500  ">✖</button>
                </div>


                <div

                    className="grid grid-cols-2 gap-2 p-5 "
                >
                 


                    <div>
                        <label className="block text-sm font-medium ">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            className={inputClasses}
                            required
                        />
                    </div>

                  
                    <div>
                        <label className="block text-sm font-medium ">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                            }}
                            className={inputClasses}
                            required
                        />
                    </div>

                 
                    <div>
                        <label className="block text-sm font-medium ">Alt. Phone</label>
                        <input
                            type="text"
                            name="alt_phone"
                            value={alt_phone}
                            onChange={(e) => { setAlt_Phone(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium ">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

                
                    <div>
                        <label className="block text-sm  ">Alt. Email</label>
                        <input
                            type="email"
                            name="alt_email"
                            value={alt_email}
                            onChange={(e) => { setAlt_Email(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

               
                    <div>
                        <label className="block text-sm font-small  ">Status</label>
                        <select
                            name="status"
                            value={status}
                            onChange={(e) => { setStatus(e.target.value) }}
                            className={inputClasses}
                            required
                        >
                            <option>New</option>
                            <option>Qualified</option>
                            <option>Follow-Up</option>
                            <option>Converted</option>
                        </select>
                    </div>

                   
                    <div>
                        <label className="block text-sm font-medium  ">Qualification</label>
                        <select
                            name="qualification"
                            value={qualification}
                            onChange={(e) => { setQualification(e.target.value) }}
                            className={inputClasses}
                            required
                        >
                            <option>High School</option>
                            <option>Bachelors</option>
                            <option>Masters</option>
                            <option>PHD</option>
                            <option>Other</option>
                        </select>
                    </div>

                   
                    <div>
                        <label className="block text-sm font-medium ">Interest</label>
                        <select
                            name="interest"
                            value={interest}
                            onChange={(e) => { setInterest(e.target.value) }}
                            className={inputClasses}
                            required
                        >
                            <option>Web Development</option>
                            <option>Mobile Developemnt</option>
                            <option>Data Science</option>
                            <option>Digitial Marketing</option>
                            <option>UI/UX</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium ">Source</label>
                        <select
                            name="source"
                            value={source}
                            onChange={(e) => { setSource(e.target.value) }}
                            className={inputClasses}
                            required
                        >
                            <option>Website</option>
                            <option>Cold Call</option>
                            <option>Email Campaign</option>
                            <option>Social Media</option>
                        </select>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium ">Assigned To</label>
                        <select
                            name="assignedTo"
                            value={assignedTo}
                            onChange={(e) => { setAssignedTo(e.target.value) }}
                            className={inputClasses}
                            required
                        >
                            <option>John Dee</option>
                            <option>Jane Smith</option>
                            <option>Emily Davis</option>
                            <option>Robert Johnson</option>
                        </select>
                    </div>

                   
                    <div>
                        <label className="block text-sm font-medium ">Job</label>
                        <input
                            type="text"
                            name="job"
                            value={job}
                            onChange={(e) => { setJob(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium  ">State</label>
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={(e) => { setState(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

               
                    <div>
                        <label className="block text-sm font-medium ">City</label>
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => { SetCity(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

                  
                    <div>
                        <label className="block text-sm font-medium ">Passout Year</label>
                        <input
                            type="number"
                            name="passout"
                            value={passout}
                            onChange={(e) => { setPassout(e.target.value) }}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div className="col-span-2 flex justify-end gap-1 mt-0">
                        <button
                            type="reset"
                            onClick={onClose}

                            className="px-2 py-1 rounded-lg border text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="px-2 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        >
                            {loading ? "Saving..." : "Save Task"}
                        </button>
                    </div>


                </div>
            </div>
        </div >
    );
}



