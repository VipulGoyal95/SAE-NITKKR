"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Toaster, toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

export default function AutokritiLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
  const [forgetPasswordLoading, setForgetPasswordLoading] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is already logged in, redirect to dashboard
        router.push("/autokriti/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    if (!forgetPasswordEmail.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(forgetPasswordEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setForgetPasswordLoading(true);

    try {
      const response = await fetch("/api/forget-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgetPasswordEmail }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setShowForgetPassword(false);
        setForgetPasswordEmail("");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Password reset failed:", error);
      toast.error("Failed to send reset email. Please try again.");
    } finally {
      setForgetPasswordLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Authenticate user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const uid = userCredential.user.uid;
      console.log("User authenticated successfully:", uid);

      // Firebase auth is successful - user is now logged in
      // No need to check Firestore or registration status

      toast.success("Login successful! Welcome back!");

      // Redirect to dashboard - Firebase auth state is already set
      router.push("/autokriti/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      let errorMessage = "Login failed. Please try again.";
      // console.log(error);
      switch (error.code) {
        case "auth/invalid-credential":
          errorMessage =
            errorMessage = "Invalid email or password. Please try again.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address format.";
          break;
        case "auth/too-many-requests":
          errorMessage =
            "Too many failed login attempts. Please try again later.";
          break;
        case "auth/user-disabled":
          errorMessage =
            "This account has been disabled. Please contact support.";
          break;
        case "auth/network-request-failed":
          errorMessage =
            "Network error. Please check your internet connection.";
          break;
        default:
          errorMessage = "Authentication failed. Please try again.";
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center"/>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 mt-12">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto h-20 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-white"
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
            <h2 className="text-3xl font-extrabold text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-400">Sign in to your Autokriti account</p>
          </div>

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  } focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors`}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <ClipLoader size={20} color="#1f2937" />
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Additional Links */}
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/autokriti/registrationform")}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Register here
                </button>
              </p>

              <p className="text-sm text-gray-400">
                Forgot your password?{" "}
                <button
                  type="button"
                  onClick={() => setShowForgetPassword(true)}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Reset password
                </button>
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              By signing in, you agree to our{" "}
              <button
                type="button"
                onClick={() => router.push("/termsandconditions")}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                onClick={() => router.push("/privacypolicy")}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>

        {/* Forget Password Modal */}
        {showForgetPassword && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Reset Password
                </h3>
                <button
                  onClick={() => {
                    setShowForgetPassword(false);
                    setForgetPasswordEmail("");
                  }}
                  className="text-gray-400 hover:text-white text-2xl transition-colors"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleForgetPassword} className="space-y-6">
                <div>
                  <label
                    htmlFor="forget-email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="forget-email"
                    type="email"
                    value={forgetPasswordEmail}
                    onChange={(e) => setForgetPasswordEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400 transition-colors"
                    required
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgetPassword(false);
                      setForgetPasswordEmail("");
                    }}
                    className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgetPasswordLoading}
                    className="flex-1 px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {forgetPasswordLoading ? (
                      <div className="flex items-center space-x-2">
                        <ClipLoader size={16} color="#ffffff" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Reset Email"
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  We'll send you an email with a link to reset your password.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
