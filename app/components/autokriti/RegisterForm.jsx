  "use client";
import { getCashfree } from "@/app/utils/cashfree";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";

const instructions = (
  <div className="bg-cyan-950/70 border border-cyan-700 rounded-xl p-5 text-cyan-100 max-w-xs shadow-lg">
    <div className="font-bold text-lg mb-2 flex items-center gap-2">
      <span className="text-cyan-400 text-xl">ℹ️</span> Instructions
    </div>
    <ul className="list-disc pl-5 space-y-2 text-sm">
      <li>
        <span className="font-semibold">Make sure your email id is correct</span> as you will be getting confirmation on that email.
      </li>
      <li>
        <span className="font-semibold">Workshop will be 3 days long.</span>
      </li>
      <li>
        In case of any issue or payment failure, please contact:<br />
        <span className="font-semibold">Govind</span> +91-9602562300<br />
        <span className="font-semibold">Sourav</span> +91-9306356371
      </li>
    </ul>
  </div>
);

export default function RegistrationForm() {
  const params = useParams();
  const isSessionId = params.sessionid;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    semester: "",
    dept: "",
    timeslot: "",
    accommodation: false,
    instructionsRead: false,
    semesterDropdownOpen: false,
    timeslotDropdownOpen: false,
  });
  const [errors, setErrors] = useState({});
  const [workshopAmount, setWorkshopAmount] = useState(0);
  const [accommodationAmount, setAccommodationAmount] = useState(0);
  const [showDataDialog, setShowDataDialog] = useState(false);
  const amount = workshopAmount + accommodationAmount;
  const [sessionId, setSessionId] = useState('');
  const version = "2025-01-01";
  const [loading, setLoading] = useState(false);

    const getSessionId = async () => {
        // if (!name || !email || !amount || !phone) {
        //     alert("Please fill in all fields.");
        //     return null;
        // }
        
        setLoading(true);
        try {
            const res = await axios.post(`https://sae-backend.vercel.app/api/payment`, {
                version,
                name: form.name,
                email: form.email,
                phone: form.phone,
                amount: 1,
            });

            console.log(res.data);
            setLoading(false);
            return res.data.payment_session_id; // Extract session ID from response
        } catch (err) {
            setLoading(false);
            console.error("Error generating session ID:", err);
            alert("Failed to initiate payment. Please try again.");
            return null;
        }
    };

    const handlePayment = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // console.log("run");
        const newSessionId = await getSessionId(); // Get session ID from API
        // console.log(newSessionId);
        if (!newSessionId) return; // Stop if session ID is not received
        const cashfree = await getCashfree();
        setSessionId(newSessionId); // Update session ID state

        let checkoutOptions = {
            paymentSessionId: newSessionId, // Use the latest session ID
            // returnUrl: `https://saenitkurukshetra.com/cashfree/payment`,
        };

        cashfree.checkout(checkoutOptions).then(function (result) {
            if (result.error) {
                alert(result.error.message);
            }
            if (result.redirect) {
                console.log("Redirection", result);
            }
        });
    };

    useEffect(async () => {
        setSessionId(isSessionId);
    }, [isSessionId]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "accommodation") {
      setAccommodationAmount(checked ? 279 : 0);
    }

    if (name === "dept") {
      let amount = 0;
      if (value === "Mechanical") amount = 1000;
      else if (value === "IoT") amount = 1500;
      else if (value === "EV + PCB Designing") amount = 2000;
      else if (value === "Software") amount = 2500;
      setWorkshopAmount(amount);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!validator.isLength(form.name.trim(), { min: 2 })) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!validator.isEmail(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (
      !validator.isMobilePhone(form.phone, "en-IN") ||
      !validator.isLength(form.phone, { min: 10, max: 10 })
    ) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!form.dept) {
      newErrors.dept = "Please select a department.";
    }
    if (!form.semester) {
      newErrors.semester = "Please select a semester.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Store form data in localStorage
      localStorage.setItem("form data", JSON.stringify(form));
      // alert("Form submitted successfully! Data saved to localStorage.");
      setShowDataDialog(true);
    }
  }

  return (
    <div className="inset-0 flex items-center justify-center mt-30 from-gray-950 via-gray-900 to-gray-800 bg-opacity-95 z-50 font-sans">
      <div className="bg-gray-900/95 p-8 rounded-2xl shadow-2xl max-w-4xl w-full relative text-gray-100 border border-gray-700 flex flex-col md:flex-row gap-8 overflow-y-auto">
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-extrabold mb-6 text-cyan-400 tracking-tight text-center drop-shadow font-sans">
            Registration Form
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-700"} focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
              />
              {errors.name && <div className="text-red-400 text-xs mt-1">{errors.name}</div>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email ID *"
                value={form.email}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-700"} focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
              />
              {errors.email && <div className="text-red-400 text-xs mt-1">{errors.email}</div>}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone No *"
                value={form.phone}
                onChange={handleChange}
                required
                className={`w-full p-3 rounded-lg bg-gray-800 border ${errors.phone ? "border-red-500" : "border-gray-700"} focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
              />
              {errors.phone && <div className="text-red-400 text-xs mt-1">{errors.phone}</div>}
            </div>
            <input
              type="text"
              name="college"
              placeholder="College"
              value={form.college}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition"
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition"
            />
            <div className="relative">
              <div 
                className={`w-full p-3 pr-10 rounded-lg bg-gray-800 border ${errors.semester ? 'border-red-500' : 'border-gray-700'} focus-within:border-cyan-400 text-lg text-gray-300 transition cursor-pointer`}
                onClick={() => setForm(prev => ({ ...prev, semesterDropdownOpen: !prev.semesterDropdownOpen }))}
              >
                <span className={form.semester ? 'text-gray-300' : 'text-gray-400'}>
                  {form.semester || '-- Select Semester --'}
                </span>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${form.semesterDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {form.semesterDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                  {[
                    { value: "", label: "-- Select Semester --" },
                    { value: "1st", label: "1st" },
                    { value: "2nd", label: "2nd" },
                    { value: "3rd", label: "3rd" },
                    { value: "4th", label: "4th" },
                    { value: "5th", label: "5th" },
                    { value: "6th", label: "6th" },
                    { value: "7th", label: "7th" },
                    { value: "8th", label: "8th" }
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`px-3 py-2 cursor-pointer transition-colors ${
                        form.semester === option.value 
                          ? 'bg-cyan-400 text-gray-900' 
                          : 'text-gray-300 hover:bg-gray-700'
                      } ${option.value === "" ? 'text-gray-400' : ''}`}
                      onClick={() => {
                        setForm(prev => ({ 
                          ...prev, 
                          semester: option.value, 
                          semesterDropdownOpen: false 
                        }));
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
              {errors.semester && <div className="text-red-400 text-xs mt-2">{errors.semester}</div>}
            </div>
            <div>
              <label className="block mb-2 font-semibold text-cyan-300">Select Your Department</label>
              <div className="flex flex-col space-y-2">
                {["Mechanical", "IoT", "EV + PCB Designing", "Software"].map((dept) => (
                  <label key={dept} className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition">
                    <input
                      type="radio"
                      name="dept"
                      value={dept}
                      checked={form.dept === dept}
                      onChange={handleChange}
                      className="accent-cyan-400"
                    />
                    {dept}
                  </label>
                ))}
              </div>
              {errors.dept && <div className="text-red-400 text-xs mt-2">{errors.dept}</div>}
            </div>
            <div className="space-y-2">
              <div className="text-white font-medium text-sm">
                Workshop Amount (₹): <span className="text-green-400 font-bold">{workshopAmount}</span>
              </div>
            </div>
            <div className="relative">
              <div 
                className="w-full p-3 pr-10 rounded-lg bg-gray-800 border border-gray-700 focus-within:border-cyan-400 text-lg text-gray-300 transition cursor-pointer"
                onClick={() => setForm(prev => ({ ...prev, timeslotDropdownOpen: !prev.timeslotDropdownOpen }))}
              >
                <span className={form.timeslot ? 'text-gray-300' : 'text-gray-400'}>
                  {form.timeslot || '-- Choose Timeslot --'}
                </span>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${form.timeslotDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {form.timeslotDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
                  {[
                    { value: "", label: "-- Choose Timeslot --" },
                    { value: "Morning", label: "Morning" },
                    { value: "Afternoon", label: "Afternoon" }
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`px-3 py-2 cursor-pointer transition-colors ${
                        form.timeslot === option.value 
                          ? 'bg-cyan-400 text-gray-900' 
                          : 'text-gray-300 hover:bg-gray-700'
                      } ${option.value === "" ? 'text-gray-400' : ''}`}
                      onClick={() => {
                        setForm(prev => ({ 
                          ...prev, 
                          timeslot: option.value, 
                          timeslotDropdownOpen: false 
                        }));
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <label className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition cursor-pointer">
              <input
                type="checkbox"
                name="accommodation"
                checked={form.accommodation}
                onChange={handleChange}
                className="accent-cyan-400"
              />
              Need Accommodation & food  (₹279/day)
            </label>
            <div className="text-white font-medium text-sm">
              Amount (₹): <span className="text-green-400 font-bold">{accommodationAmount}</span>
            </div>
            <label className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition cursor-pointer">
              <input
                type="checkbox"
                name="instructionsRead"
                checked={form.instructionsRead}
                onChange={handleChange}
                className="accent-cyan-400"
                required
              />
              I have read and understood the instructions
            </label>
            <span> Total Amount : {amount}</span>
            <button
              type="submit"
              className="w-full cursor-pointer mt-6 bg-cyan-500 text-gray-900 font-extrabold py-3 rounded-lg hover:bg-cyan-400 transition text-lg shadow-lg tracking-wide"
            >
              Confirm
            </button>
          </form>
        </div>
        <div className="hidden md:block">{instructions}</div>
      </div>

      {/* Data Display Dialog */}
      {showDataDialog && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4">
          <div 
            className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4B5563 #1F2937'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                width: 8px;
              }
              div::-webkit-scrollbar-track {
                background: #1F2937;
                border-radius: 4px;
              }
              div::-webkit-scrollbar-thumb {
                background: #4B5563;
                border-radius: 4px;
                transition: background 0.2s ease;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: #6B7280;
              }
              div::-webkit-scrollbar-corner {
                background: #1F2937;
              }
            `}</style>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-cyan-400">Registration Summary</h2>
              <button
                onClick={() => setShowDataDialog(false)}
                className="text-gray-400 hover:text-cyan-400 text-3xl transition"
              >
                &times;
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-cyan-400 font-semibold">Field</th>
                    <th className="py-3 px-4 text-cyan-400 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Full Name</td>
                    <td className="py-3 px-4">{form.name}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Email ID</td>
                    <td className="py-3 px-4">{form.email}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Phone Number</td>
                    <td className="py-3 px-4">{form.phone}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">College</td>
                    <td className="py-3 px-4">{form.college || "Not specified"}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Branch</td>
                    <td className="py-3 px-4">{form.branch || "Not specified"}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Semester</td>
                    <td className="py-3 px-4">{form.semester || "Not selected"}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Department</td>
                    <td className="py-3 px-4">{form.dept || "Not selected"}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Timeslot</td>
                    <td className="py-3 px-4">{form.timeslot || "Not selected"}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Accommodation</td>
                    <td className="py-3 px-4">{form.accommodation ? "Yes" : "No"}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Workshop Amount</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">₹{workshopAmount}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Accommodation Amount</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">₹{accommodationAmount}</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 font-medium">Total Amount</td>
                    <td className="py-3 px-4 text-green-400 font-bold text-xl">₹{amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={handlePayment}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
              >
                Pay Now ₹{amount}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
