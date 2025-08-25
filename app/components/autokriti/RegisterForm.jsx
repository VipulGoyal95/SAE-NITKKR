"use client";
import { getCashfree } from "@/app/utils/cashfree";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const instructions = (
  <div className="bg-cyan-950/70 border border-cyan-700 rounded-xl p-5 text-cyan-100 max-w-xs shadow-lg">
    <div className="font-bold text-lg mb-2 flex items-center gap-2">
      <span className="text-cyan-400 text-xl">ℹ️</span> Instructions
    </div>
    <ul className="list-disc pl-5 space-y-2 text-sm">
      <li>
        <span className="font-semibold">
          Make sure your email id is correct
        </span>{" "}
        as you will be getting confirmation on that email.
      </li>
      <li>
        <span className="font-semibold">Workshop will be 3 days long.</span>
      </li>
      <li>
        In case of any issue or payment failure, please contact:
        <br />
        <span className="font-semibold">Ankit</span> +91-8168754398
        <br />
        <span className="font-semibold">Sarthak</span> +91-9311323161
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
    password: "",
    phone: "",
    college: "",
    branch: "",
    semester: "",
    department: "",
    accommodation: false,
    instructionsRead: false,
  });
  const [errors, setErrors] = useState({});
  const [workshopAmount, setWorkshopAmount] = useState(0);
  const [accommodationAmount, setAccommodationAmount] = useState(0);
  const [showDataDialog, setShowDataDialog] = useState(false);
  const amount = workshopAmount + accommodationAmount;
  const [sessionId, setSessionId] = useState("");
  const version = "2025-01-01";
  const [loading, setLoading] = useState(false);
  const [bigLoader, setBigLoader] = useState(false); // NEW STATE
  const router = useRouter();
  const getSessionId = async () => {
    // if (!name || !email || !amount || !phone) {
    //     alert("Please fill in all fields.");
    //     return null;
    // }

    setLoading(true);
    try {
      const res = await axios.post(
        `https://sae-backend.vercel.app/api/payment`,
        {
          version,
          form,
          amount,
        }
      );

      console.log(res.data);
      setLoading(false);
      return res.data.payment_session_id; // Extract session ID from response
    } catch (err) {
      setLoading(false);
      console.error("Error generating session ID:", err);
      toast.alert("Failed to initiate payment. Please try again.");
      return null;
    }
  };

  const handlePayment2 = async (e) => {
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

  const handlePayment = async () => {
    setLoading(true); // Show button loader
    try {
      // 1. Create order from backend (amount is in paise)
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }), // ₹500.00 → 50000 paise
      });

      const order = await res.json();
      if (!order.id) throw new Error("Order creation failed");

      // 2. Razorpay Checkout (Live/Test depending on env)
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // ✅ Live key in prod
        amount: order.amount,
        currency: order.currency,
        name: "SAE NIT Kurukshetra",
        description: "Autokriti Registration",
        order_id: order.id,
        handler: async function (response) {
          setBigLoader(true); // Full page loader while verifying
          try {
            const verifyRes = await fetch("/api/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...response, form, amount }),
            });

            const data = await verifyRes.json();
            setBigLoader(false);

            if (data.success) {
              router.replace("/autokriti/redirect");
            } else {
              toast.error("Payment Verification Failed");
            }
          } catch (err) {
            setBigLoader(false);
            toast.error("Something went wrong during verification");
            console.error(err);
          }
        },
        prefill: {
          name: form.name || "Guest User",
          email: form.email || "guest@example.com",
          contact: form.phone || "9999999999",
        },
        theme: { color: "#000000" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setBigLoader(false);
      console.error(err);
      toast.error("Payment initialization failed");
    }
    setLoading(false);
  };

  useEffect(() => {
    setSessionId(isSessionId);
  }, [isSessionId]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "accommodation") {
      setAccommodationAmount(checked ? 299 * 3 : 0);
    }

    if (name === "department") {
      let amount = 0;
      if (value === "CV") amount = 1799;
      else if (value === "IoT") amount = 2199;
      else if (value === "EV") amount = 1799;
      else if (value === "Software") amount = 1599;
      setWorkshopAmount(amount);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!validator.isLength(form.name.trim(), { min: 2 })) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!validator.isEmail(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    // if (!form.password || form.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters long.";
    // }
    if (
      !validator.isMobilePhone(form.phone, "en-IN") ||
      !validator.isLength(form.phone, { min: 10, max: 10 })
    ) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!form.department) {
      newErrors.department = "Please select a department.";
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

  const [semesterDropdownOpen, setSemesterDropdownOpen] = useState(false);

  return (
    <>
      <Toaster />
      <div className="inset-0 flex items-center justify-center z-50 font-sans bg-black">
        <div className="bg-gray-900/95 p-8 rounded-2xl shadow-2xl mt-40 max-w-4xl w-full relative text-gray-100 border border-gray-700 flex flex-col-reverse md:flex-row gap-8 overflow-y-auto max-[960px]:mt-40 max-[960px]:m-10  max-[440px]:mt-36 max-[440px]:m-6 ">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-extrabold mb-6 text-cyan-400 tracking-tight text-center drop-shadow font-sans">
              Registration Form
            </h2>
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg bg-gray-800 border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
                />
                {errors.name && (
                  <div className="text-red-400 text-xs mt-1">{errors.name}</div>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
                />
                {errors.email && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.email}
                  </div>
                )}
              </div>
              {/* <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password*"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg bg-gray-800 border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
                />
                
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 group">
                  <span className="text-cyan-400 cursor-pointer text-xl" tabIndex={0} title="Create password for Autokriti dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 16v-4m0-4h.01"/>
                    </svg>
                  </span>
                  <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-gray-100 text-xs rounded shadow-lg px-3 py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none z-20">
                    Create password for Autokriti dashboard
                  </div>
                </div>
                {errors.password && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.password}
                  </div>
                )}
              </div> */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg bg-gray-800 border ${
                    errors.phone ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition`}
                />
                {errors.phone && (
                  <div className="text-red-400 text-xs mt-1">
                    {errors.phone}
                  </div>
                )}
              </div>
              <input
                type="text"
                name="college"
                placeholder="College *"
                value={form.college}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition"
              />
              <input
                type="text"
                name="branch"
                placeholder="Branch *"
                value={form.branch}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition"
              />
              <div className="relative">
                <div
                  className={`w-full p-3 pr-10 rounded-lg bg-gray-800 border ${
                    errors.semester ? "border-red-500" : "border-gray-700"
                  } focus-within:border-cyan-400 text-lg text-gray-300 transition cursor-pointer`}
                  onClick={() => setSemesterDropdownOpen(!semesterDropdownOpen)}
                >
                  <span
                    className={
                      form.semester ? "text-gray-300" : "text-gray-400"
                    }
                  >
                    {form.semester || "-- Select Semester --"}
                  </span>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        form.semesterDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {semesterDropdownOpen && (
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
                      { value: "8th", label: "8th" },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className={`px-3 py-2 cursor-pointer transition-colors ${
                          form.semester === option.value
                            ? "bg-cyan-400 text-gray-900"
                            : "text-gray-300 hover:bg-gray-700"
                        } ${option.value === "" ? "text-gray-400" : ""}`}
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            semester: option.value,
                          }));
                          setSemesterDropdownOpen(!semesterDropdownOpen);
                        }}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
                {errors.semester && (
                  <div className="text-red-400 text-xs mt-2">
                    {errors.semester}
                  </div>
                )}
              </div>
              <div>
                <label className="block mb-2 font-semibold text-cyan-300">
                  Select Your Department
                </label>
                <div className="flex flex-col space-y-2">
                  {["CV", "IoT", "EV", "Software"].map((department) => (
                    <label
                      key={department}
                      className="flex items-center gap-2 cursor-pointer hover:text-cyan-400 transition"
                    >
                      <input
                        type="radio"
                        name="department"
                        value={department}
                        checked={form.department === department}
                        onChange={handleChange}
                        className="accent-cyan-400"
                      />
                      {department}
                    </label>
                  ))}
                </div>
                {errors.department && (
                  <div className="text-red-400 text-xs mt-2">
                    {errors.department}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="text-white font-medium text-sm">
                  Workshop Amount (₹):{" "}
                  <span className="text-green-400 font-bold">
                    {workshopAmount}
                  </span>
                </div>
              </div>

              <label className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition cursor-pointer">
                <input
                  type="checkbox"
                  name="accommodation"
                  checked={form.accommodation}
                  onChange={handleChange}
                  className="accent-cyan-400 mr-2"
                />
                Need Accommodation & food (₹299/day)
              </label>
              <div className="text-white font-medium text-sm">
                Amount (₹):{" "}
                <span className="text-green-400 font-bold">
                  {accommodationAmount !== 0 ? accommodationAmount : 0}{" "}
                  {accommodationAmount !== 0 && "for 3 days"}
                </span>
              </div>
              <label className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition cursor-pointer">
                <input
                  type="checkbox"
                  name="instructionsRead"
                  checked={form.instructionsRead}
                  onChange={handleChange}
                  className="accent-cyan-400 mr-2"
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
          <div className="block max-[768px]:flex max-[768px]:justify-center">
            {instructions}
          </div>
        </div>

        {/* Data Display Dialog */}
        {showDataDialog && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4">
            <div
              className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#4B5563 #1F2937",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  width: 8px;
                }
                div::-webkit-scrollbar-track {
                  background: #1f2937;
                  border-radius: 4px;
                }
                div::-webkit-scrollbar-thumb {
                  background: #4b5563;
                  border-radius: 4px;
                  transition: background 0.2s ease;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: #6b7280;
                }
                div::-webkit-scrollbar-corner {
                  background: #1f2937;
                }
              `}</style>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-cyan-400">
                  Registration Summary
                </h2>
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
                      <th className="py-3 px-4 text-cyan-400 font-semibold">
                        Field
                      </th>
                      <th className="py-3 px-4 text-cyan-400 font-semibold">
                        Value
                      </th>
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
                    {/* <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Password</td>
                      <td className="py-3 px-4">••••••</td>
                    </tr> */}
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Phone Number</td>
                      <td className="py-3 px-4">{form.phone}</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">College</td>
                      <td className="py-3 px-4">
                        {form.college || "Not specified"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Branch</td>
                      <td className="py-3 px-4">
                        {form.branch || "Not specified"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Semester</td>
                      <td className="py-3 px-4">
                        {form.semester || "Not selected"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Department</td>
                      <td className="py-3 px-4">
                        {form.department || "Not selected"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Accommodation</td>
                      <td className="py-3 px-4">
                        {form.accommodation ? "Yes" : "No"}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Workshop Amount</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">
                        ₹{workshopAmount}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">
                        Accommodation Amount
                      </td>
                      <td className="py-3 px-4 text-green-400 font-semibold">
                        ₹{accommodationAmount}
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Total Amount</td>
                      <td className="py-3 px-4 text-green-400 font-bold text-xl">
                        ₹{amount}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handlePayment}
                  className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition w-full max-w-xs flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <ClipLoader size={24} color="#ffffff" loading={loading} />
                  ) : (
                    <>
                      <span>Pay Now</span>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg> */}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
        {bigLoader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-70">
            <div className="flex flex-col items-center">
              <ClipLoader color="#06b6d4" size={80} />
              <span className="mt-6 text-cyan-200 text-xl font-semibold animate-pulse">
                Processing Payment...
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
