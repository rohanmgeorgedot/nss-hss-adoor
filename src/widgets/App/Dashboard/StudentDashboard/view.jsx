"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  FaHome, FaCalendarAlt, FaChartPie, FaSignOutAlt,
  FaCheckCircle, FaTimesCircle, FaClock, FaUserGraduate
} from "react-icons/fa";
import { useAuth } from "@app/app/layout";
import { supabase } from "@lib/supabase";

export default function StudentDashboard() {
  const router = useRouter();
  const { user, userProfile, userType, logout, isLoading: authLoading } = useAuth();
  
  const [activeTab, setActiveTab] = useState("overview");
  const [attendanceStats, setAttendanceStats] = useState({
    totalDays: 0,
    present: 0,
    absent: 0,
    percentage: 0,
  });
  const [recentAttendance, setRecentAttendance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Redirect if not logged in or not a student
  useEffect(() => {
    if (!authLoading && (!user || userType !== 'student')) {
      router.push("/app/login");
    }
  }, [user, userType, authLoading, router]);

  // Fetch attendance data when student profile is loaded
  useEffect(() => {
    if (userProfile?.id) {
      fetchAttendanceData();
    }
  }, [userProfile]);

  const fetchAttendanceData = async () => {
    if (!userProfile?.id) return;
    
    setIsLoading(true);
    try {
      // Fetch all attendance for this student
      const { data, error } = await supabase
        .from('attendance')
        .select('*')
        .eq('student_id', userProfile.id)
        .order('date', { ascending: false });

      if (error) throw error;

      const attendanceData = data || [];
      
      // Calculate stats
      const present = attendanceData.filter(a => a.status === 'present').length;
      const absent = attendanceData.filter(a => a.status === 'absent').length;
      const totalDays = present + absent;
      const percentage = totalDays > 0 ? Math.round((present / totalDays) * 100) : 0;

      setAttendanceStats({
        totalDays,
        present,
        absent,
        percentage,
      });

      // Format recent attendance with day names
      const formattedAttendance = attendanceData.slice(0, 30).map(a => {
        const date = new Date(a.date);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return {
          date: a.date,
          day: days[date.getDay()],
          status: a.status,
        };
      });

      setRecentAttendance(formattedAttendance);
    } catch (err) {
      console.error("Error fetching attendance:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/app/login");
  };

  // Show loading while auth is checking
  if (authLoading || !userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const studentData = {
    name: userProfile.name,
    class: userProfile.classes?.name || "Class",
    admissionNo: userProfile.adm_no,
    rollNo: userProfile.roll_no,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "present": return "text-green-500 bg-green-500/10";
      case "absent": return "text-red-500 bg-red-500/10";
      case "holiday": return "text-gray-400 bg-gray-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "present": return <FaCheckCircle />;
      case "absent": return <FaTimesCircle />;
      case "holiday": return <FaClock />;
      default: return <FaClock />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="NSS HSS Adoor"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <span className="font-semibold text-gray-800 text-sm">Student Dashboard</span>
              <p className="text-xs text-gray-500">{studentData.name}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title="Logout"
          >
            <FaSignOutAlt />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20 min-h-screen">
        <div className="p-4 md:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 max-w-4xl mx-auto">
            <h1 className="text-xl font-bold text-gray-800">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "attendance" && "Attendance History"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {studentData.class} • Roll No: {studentData.rollNo}
            </p>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <FaCalendarAlt className="text-blue-500" />
                    </div>
                    <span className="text-xs text-gray-400">Total</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{attendanceStats.totalDays}</p>
                  <p className="text-xs text-gray-500 mt-1">Working Days</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <FaCheckCircle className="text-green-500" />
                    </div>
                    <span className="text-xs text-gray-400">Present</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600">{attendanceStats.present}</p>
                  <p className="text-xs text-gray-500 mt-1">Days Present</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <FaTimesCircle className="text-red-500" />
                    </div>
                    <span className="text-xs text-gray-400">Absent</span>
                  </div>
                  <p className="text-2xl font-bold text-red-600">{attendanceStats.absent}</p>
                  <p className="text-xs text-gray-500 mt-1">Days Absent</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FaChartPie className="text-primary" />
                    </div>
                    <span className="text-xs text-gray-400">Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{attendanceStats.percentage}%</p>
                  <p className="text-xs text-gray-500 mt-1">Attendance Rate</p>
                </div>
              </div>

              {/* Attendance Progress */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Attendance Progress</h3>
                <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${attendanceStats.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>0%</span>
                  <span className="text-primary font-medium">{attendanceStats.percentage}% Overall</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Recent Attendance */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">Recent Attendance</h3>
                <div className="space-y-3">
                  {recentAttendance.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${getStatusColor(item.status)}`}>
                          {getStatusIcon(item.status)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">{item.day}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Attendance History Tab */}
          {activeTab === "attendance" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Full Attendance History</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {recentAttendance.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{item.day}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium px-4 py-1.5 rounded-full capitalize ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <div className="max-w-4xl mx-auto flex items-center justify-around">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
              activeTab === "overview" 
                ? "text-primary" 
                : "text-gray-400"
            }`}
          >
            <FaHome className="text-lg" />
            <span className="text-xs font-medium">Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("attendance")}
            className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
              activeTab === "attendance" 
                ? "text-primary" 
                : "text-gray-400"
            }`}
          >
            <FaCalendarAlt className="text-lg" />
            <span className="text-xs font-medium">History</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
