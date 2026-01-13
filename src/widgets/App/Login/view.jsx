"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGraduationCap, FaChalkboardTeacher, FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { useAuth } from "@app/app/layout";

export default function Login() {
  const router = useRouter();
  const { login, user, userType: authUserType, isLoading: authLoading } = useAuth();
  const [userType, setUserType] = useState("student"); // student or teacher
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (user && authUserType) {
      if (authUserType === 'teacher') {
        router.push("/app/dashboard/teacher");
      } else if (authUserType === 'student') {
        router.push("/app/dashboard/student");
      }
    }
  }, [user, authUserType, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error: loginError, profileType } = await login(formData.email, formData.password);
      
      if (loginError) {
        setError(loginError.message || "Invalid credentials. Please try again.");
        setIsLoading(false);
        return;
      }

      // Redirect based on profile type
      if (profileType === 'teacher') {
        router.push("/app/dashboard/teacher");
      } else if (profileType === 'student') {
        router.push("/app/dashboard/student");
      } else {
        // User exists but no profile linked
        setError("Your account is not linked to a teacher or student profile. Please contact the administrator.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 md:p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
        {/* Back to Website Link - Desktop Only */}
        <Link 
          href="/" 
          className="mb-6 hidden lg:inline-flex items-center gap-2 text-sm md:text-base text-gray-400 hover:text-white transition-colors"
        >
          <FaArrowLeft className="text-xs md:text-sm" />
          Back to Website
        </Link>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10">
          {/* Logo & Header */}
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center mb-4 md:mb-6">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-primary/20 blur-lg" />
                <Image
                  src="/images/logo.webp"
                  alt="NSS HSS Adoor"
                  width={80}
                  height={80}
                  className="relative h-16 w-16 md:h-20 md:w-20 rounded-full object-cover ring-2 ring-white/20"
                />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">NSS HSS Adoor</h1>
            <p className="text-sm md:text-base text-gray-400">Student & Teacher Portal</p>
          </div>

          {/* User Type Toggle */}
          <div className="flex gap-2 p-1.5 bg-gray-800/50 rounded-xl mb-6 md:mb-8">
            <button
              type="button"
              onClick={() => setUserType("student")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium transition-all cursor-pointer ${
                userType === "student"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaGraduationCap className="text-base md:text-lg" />
              Student
            </button>
            <button
              type="button"
              onClick={() => setUserType("teacher")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium transition-all cursor-pointer ${
                userType === "teacher"
                  ? "bg-primary text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <FaChalkboardTeacher className="text-base md:text-lg" />
              Teacher
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs md:text-xs sm:text-sm font-medium text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <FaEnvelope className="text-sm md:text-base" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3.5 md:py-4 pl-11 md:pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs md:text-xs sm:text-sm font-medium text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <FaLock className="text-sm md:text-base" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter password"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3.5 md:py-4 pl-11 md:pl-12 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash className="text-base md:text-lg" /> : <FaEye className="text-base md:text-lg" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 md:p-4 text-sm md:text-base text-red-400">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-green-500 text-white font-semibold py-3.5 md:py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Help Text */}
          <p className="mt-6 md:mt-8 text-center text-xs md:text-xs sm:text-sm text-gray-500">
            Contact your class teacher or administrator if you need help logging in.
          </p>

          {/* Footer */}
          <p className="mt-4 md:mt-6 text-center text-xs md:text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} NSS HSS Adoor. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
