"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase";

export default function AutokritiDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [registrationData, setRegistrationData] = useState(null); // NEW STATE
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [studymaterial,setStudyMaterial] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Fetch registration data from Firestore
        try {
          const q = query(
            collection(db, "AutokritiRegistration"),
            where("email", "==", user.email)
          );
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            setRegistrationData(querySnapshot.docs[0].data());
          } else {
            setRegistrationData(null);
          }
        } catch (err) {
          console.error("Error fetching registration data:", err);
          setRegistrationData(null);
        }
        setLoading(false);
      } else {
        // User is not authenticated, redirect to login
        router.push("/autokriti/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await signOut(auth);
      toast.success("Signed out successfully");
      router.push("/autokriti/login");
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out. Please try again.");
    } finally {
      setSigningOut(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ClipLoader color="#06b6d4" size={60} />
          <p className="mt-4 text-cyan-400 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 mt-42">
        {/* Header */}
        <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    Autokriti Dashboard
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Welcome back, {user.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50 flex items-center space-x-2"
              >
                {signingOut ? (
                  <>
                    <ClipLoader size={16} color="#ffffff" />
                    <span>Signing Out...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Sign Out</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-8 mb-8 border border-cyan-700/50">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome to Autokriti 15.0!
              </h2>
              <p className="text-xl text-cyan-200 mb-6">
                North India's Largest Automotive Workshop
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Registration Confirmed
              </div>
            </div>
          </div>

          {/* User Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Account Info */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Account Information
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  {/* <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-white font-medium">{registrationData.name}</p> */}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">College</p>
                  <p className="text-white font-medium">{registrationData.college}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Department</p>
                  <p className="text-white font-medium">{registrationData.department}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Accommodation</p>
                  <p className="text-white font-medium">{registrationData.accommodation?"Yes":"No"}</p>
                </div>
                {/* <div>
                  <p className="text-gray-400 text-sm">User ID</p>
                  <p className="text-white font-mono text-sm">{user.uid}</p>
                </div> */}
                {/* <div>
                  <p className="text-gray-400 text-sm">Email Verified</p>
                  <div className="flex items-center">
                    {user.emailVerified ? (
                      <span className="text-green-400 flex items-center">
                        <svg
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </span>
                    ) : (
                      <span className="text-yellow-400 flex items-center">
                        <svg
                          className="h-4 w-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Not Verified
                      </span>
                    )}
                  </div>
                </div> */}
              </div>
            </div>

            {/* Workshop Details */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Workshop Details
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Event</p>
                  <p className="text-white font-medium">Autokriti 15.0</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-white font-medium">4th September, 2025</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Venue</p>
                  <p className="text-white font-medium">NIT Kurukshetra</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white font-medium">3 Days</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Quick Actions
                </h3>
              </div>
              <div className="space-y-3">
                <button
                  onClick={()=> setStudyMaterial(true)}
                  className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Download Study Materials
                </button>
                <button
                  onClick={() => router.push("/contactus")}
                  className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Contact Us
                </button>
                {/* <button
                  onClick={() => router.push("/sponsors")}
                  className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  View Sponsors
                </button> */}
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <div className="h-8 w-8 bg-yellow-600 rounded-lg flex items-center justify-center mr-4 mt-1">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  Important Information
                </h3>
                <ul className="text-yellow-200 space-y-2">
                  <li>• Detailed workshop schedule will be shared via email</li>
                  <li>
                    • Please bring your college ID and registration confirmation
                  </li>
                  <li>• Workshop materials will be provided on-site</li>
                  <li>
                    • For any queries, contact Ankit (+91-8168754398) or Sarthak
                    (+91-9311323161)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              © 2025 SAE NIT Kurukshetra. All rights reserved. |
              <button
                onClick={() => router.push("/termsandconditions")}
                className="text-cyan-400 hover:text-cyan-300 ml-1 transition-colors"
              >
                Terms
              </button>{" "}
              |
              <button
                onClick={() => router.push("/privacypolicy")}
                className="text-cyan-400 hover:text-cyan-300 ml-1 transition-colors"
              >
                Privacy
              </button>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
