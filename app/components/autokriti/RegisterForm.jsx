"use client";
import React, { useState } from "react";
import validator from "validator";

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

export default function RegistrationForm({ onClose }) {
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
  });
  const [errors, setErrors] = useState({});
  const [workshopAmount, setWorkshopAmount] = useState(0);
  const [accommodationAmount, setAccommodationAmount] = useState(0);
  const totalAmount = workshopAmount + accommodationAmount;

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
      newErrors.phone = "Enter a valid 10-digit Indian phone number.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 bg-opacity-95 z-50 font-sans">
      <div className="bg-gray-900/95 p-8 rounded-2xl shadow-2xl max-w-4xl w-full relative text-gray-100 border border-gray-700 flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-3xl transition"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
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
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition"
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={form.branch}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg placeholder-gray-400 transition"
            />
            <select
              name="semester"
              value={form.semester}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg text-gray-300 transition"
            >
              <option value="">-- Select Semester --</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
              <option>6th</option>
              <option>7th</option>
              <option>8th</option>
            </select>
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
            </div>
            <div className="space-y-2">
              <div className="text-white font-medium text-sm">
                Workshop Amount (₹): <span className="text-green-400 font-bold">{workshopAmount}</span>
              </div>
            </div>
            <select
              name="timeslot"
              value={form.timeslot}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-lg text-gray-300 transition"
            >
              <option value="">-- Choose Timeslot --</option>
              <option>Morning</option>
              <option>Afternoon</option>
            </select>
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
              />
              I have read and understood the instructions
            </label>
            <span> Total Amount : {totalAmount}</span>
            <button
              type="submit"
              className="w-full bg-cyan-500 text-gray-900 font-extrabold py-3 rounded-lg hover:bg-cyan-400 transition text-lg shadow-lg tracking-wide"
            >
              Confirm
            </button>
          </form>
        </div>
        <div className="hidden md:block">{instructions}</div>
      </div>
    </div>
  );
}
