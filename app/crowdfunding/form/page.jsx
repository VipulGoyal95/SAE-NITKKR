"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  updateDoc,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from 'next/navigation'
import db from "../../firebase";
import { ClipLoader } from "react-spinners";
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';


// Dynamically import ThreeDWrapper to avoid SSR issues
const DynamicThreeDWrapper = dynamic(
  () => import("../../components/crowdfunding/ThreeDWrapper"),
  { ssr: false }
);

const Loader = () => (
  <div className="flex items-center justify-center">
    <ClipLoader size={50} color="#3B82F6" />
  </div>
);

export default function Donation() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    graduationYear: "",
    amount: "",
    message: "",
    confirmed: false,
    currency: "INR",
  });
  const currencySymbols = {
    INR: "₹",
    USD: "$",
    CAD: "C$",
    EURO: "€",
  };
  const [loading, setLoading] = useState(false);

  const handleCurrencyChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateForm = () => {
    const { name, amount, email, graduationYear,message } = formData;

    if (!name || !amount || !email || !graduationYear) {
      toast.error("Please fill all required fields.");
      return false;
    }

    if (parseInt(amount) <= 0) {
      toast.error("Amount should be greater than 0.");
      return false;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const saveToFirestore = async () => {
    const timestamp = String(new Date().getTime());
    try {
      setLoading(true);
      await setDoc(doc(db, "CrowdFunding2025", timestamp), {
        ...formData,
        timestamp: new Date(),
      });
        sessionStorage.setItem("crowdfunding2025_userid", timestamp);
        setLoading(false);
        router.push("/crowdfunding/payment")
    } catch (error) {
      setLoading(false);
      // toast.error("Something went wrong, Please try again.");
      console.error("Firestore Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // savedatatoGoogleSheets(e);
      
      saveToFirestore();
    }
  };

  return (
    <DynamicThreeDWrapper>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e1e2f',
            color: '#f5f5f5',
            border: '1px solid #333',
            borderRadius: '10px',
          },
          success: {
            iconTheme: {
              primary: '#4ade80', // green
              secondary: '#1e1e2f',
            },
          },
          error: {
            iconTheme: {
              primary: '#f87171', // red
              secondary: '#1e1e2f',
            },
          },
        }}
      />

      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
        <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-2xl mt-12 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Support Our Mission
            </h1>
            <p className="text-center text-gray-300 mb-12">
              Your contribution helps us continue our work in automotive innovation and education.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-300 mb-2">
                  Graduation Year
                </label>
                <input
                  type="number"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your Graduation Year"
                />
              </div>
              {/* <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-300 mb-2">
                  Select Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={formData.currency}
                  onChange={handleCurrencyChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors mb-4"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="CAD">CAD (C$)</option>
                  <option value="EURO">EURO (€)</option>
                </select>
              </div> */}

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
                  Contribution ({currencySymbols[formData.currency]})
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder={`Enter amount`}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Your thoughts matter to us. Feel free to share a message for our teams!"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-[1.02]"
                disabled={loading}
              >
                {
                  loading? <Loader /> : "Contribute Now"
                }
              </button>
            </form>

          </div>
        </div>
      </div>
    </DynamicThreeDWrapper>
  );
} 