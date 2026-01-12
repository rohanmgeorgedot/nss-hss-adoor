"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  FaHome, FaCalendarAlt, FaUsers, FaSignOutAlt,
  FaCheckCircle, FaTimesCircle, FaChalkboardTeacher, FaUserCheck,
  FaSearch, FaSave, FaCheck, FaChevronRight, FaPlus, FaTimes, FaUserPlus
} from "react-icons/fa";
import { useAuth } from "@app/app/layout";
import { supabase } from "@lib/supabase";

export default function TeacherDashboard() {
  const router = useRouter();
  const { user, userProfile, userType, logout, isLoading: authLoading } = useAuth();
  
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isLoadingStudents, setIsLoadingStudents] = useState(true);
  const [error, setError] = useState("");
  const [newStudent, setNewStudent] = useState({
    name: "",
    rollNo: "",
    admNo: "",
  });

  // Redirect if not logged in or not a teacher
  useEffect(() => {
    if (!authLoading && (!user || userType !== 'teacher')) {
      router.push("/app/login");
    }
  }, [user, userType, authLoading, router]);

  // Fetch students when teacher profile is loaded
  useEffect(() => {
    if (userProfile?.class_id) {
      fetchStudents();
    }
  }, [userProfile]);

  const fetchStudents = async () => {
    if (!userProfile?.class_id) return;
    
    setIsLoadingStudents(true);
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('class_id', userProfile.class_id)
        .order('roll_no', { ascending: true });

      if (error) throw error;

      // Add status field for attendance marking
      const studentsWithStatus = (data || []).map(s => ({
        id: s.id,
        name: s.name,
        rollNo: s.roll_no,
        admNo: s.adm_no,
        status: null,
      }));

      setStudents(studentsWithStatus);
    } catch (err) {
      console.error("Error fetching students:", err);
      setError("Failed to load students");
    } finally {
      setIsLoadingStudents(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/app/login");
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.rollNo || !newStudent.admNo) return;
    if (!userProfile?.class_id) return;
    
    setIsAddingStudent(true);
    setError("");
    
    try {
      // Call API to create student with auth account
      const response = await fetch('/api/students/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newStudent.name,
          rollNo: newStudent.rollNo,
          admNo: newStudent.admNo,
          classId: userProfile.class_id,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to add student');
      }

      // Add to local state
      const studentToAdd = {
        id: result.student.id,
        name: result.student.name,
        rollNo: result.student.roll_no,
        admNo: result.student.adm_no,
        status: null,
      };
      
      setStudents(prev => [...prev, studentToAdd].sort((a, b) => a.rollNo - b.rollNo));
      setNewStudent({ name: "", rollNo: "", admNo: "" });
      setShowAddStudent(false);
      
      // Show success with login credentials
      alert(`Student added successfully!\n\nLogin Credentials:\nEmail: ${result.credentials.email}\nPassword: ${result.credentials.password}\n\nNote: Student should change password after first login.`);
      
    } catch (err) {
      console.error("Error adding student:", err);
      setError(err.message || "Failed to add student");
    } finally {
      setIsAddingStudent(false);
    }
  };

  const handleMarkAttendance = (studentId, status) => {
    setStudents(students.map(s => 
      s.id === studentId ? { ...s, status } : s
    ));
  };

  const handleMarkAll = (status) => {
    setStudents(students.map(s => ({ ...s, status })));
  };

  const handleSaveAttendance = async () => {
    if (!userProfile?.class_id || !userProfile?.id) return;
    
    setIsSaving(true);
    setError("");
    
    try {
      const today = new Date().toISOString().split('T')[0];
      
      const attendanceRecords = students
        .filter(s => s.status !== null)
        .map(s => ({
          student_id: s.id,
          class_id: userProfile.class_id,
          date: today,
          status: s.status,
          marked_by: userProfile.id,
        }));

      const { error } = await supabase
        .from('attendance')
        .upsert(attendanceRecords, { 
          onConflict: 'student_id,date',
          ignoreDuplicates: false 
        });

      if (error) throw error;

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error("Error saving attendance:", err);
      setError("Failed to save attendance");
    } finally {
      setIsSaving(false);
    }
  };

  // Show loading while auth is checking
  if (authLoading || !userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const teacherData = {
    name: userProfile.name,
    designation: userProfile.designation || "Class Teacher",
    employeeId: userProfile.employee_id,
    assignedClass: {
      id: userProfile.class_id,
      name: userProfile.classes?.name || "Class",
      students: students.length,
    },
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.rollNo.includes(searchQuery) ||
    s.admNo.includes(searchQuery)
  );

  const markedCount = students.filter(s => s.status !== null).length;
  const presentCount = students.filter(s => s.status === "present").length;
  const absentCount = students.filter(s => s.status === "absent").length;

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
              <span className="font-semibold text-gray-800 text-sm">Teacher Dashboard</span>
              <p className="text-xs text-gray-500">{teacherData.assignedClass.name}</p>
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
              {activeTab === "mark" && "Mark Attendance"}
              {activeTab === "students" && "My Students"}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {teacherData.name} • {teacherData.designation}
            </p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-600">
              <FaCheck className="text-lg" />
              <span className="font-medium">Attendance saved successfully!</span>
            </div>
          )}

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Class Info Card */}
              <div className="bg-gradient-to-r from-primary to-green-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/80 mb-1">Your Class</p>
                    <h3 className="text-2xl font-bold">{teacherData.assignedClass.name}</h3>
                    <p className="text-sm text-white/80 mt-1">{teacherData.assignedClass.students} Students</p>
                  </div>
                  <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <FaUsers className="text-3xl text-white" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                    <FaUsers className="text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{teacherData.assignedClass.students}</p>
                  <p className="text-xs text-gray-500 mt-1">Total Students</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                  <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                    <FaCheckCircle className="text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">{presentCount}</p>
                  <p className="text-xs text-gray-500 mt-1">Present Today</p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3">
                    <FaTimesCircle className="text-red-500" />
                  </div>
                  <p className="text-2xl font-bold text-red-600">{absentCount}</p>
                  <p className="text-xs text-gray-500 mt-1">Absent Today</p>
                </div>
              </div>

              {/* Quick Action */}
              <button
                onClick={() => setActiveTab("mark")}
                className="w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <FaUserCheck className="text-xl text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Mark Attendance</h3>
                      <p className="text-sm text-gray-500">Take today's attendance for your class</p>
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </button>
            </div>
          )}

          {/* Mark Attendance Tab */}
          {activeTab === "mark" && (
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Controls */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row gap-3 justify-between">
                  {/* Search */}
                  <div className="relative flex-1">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search student..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    />
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMarkAll("present")}
                      className="flex-1 sm:flex-none px-3 py-2.5 bg-green-500/10 text-green-600 rounded-xl text-xs font-medium hover:bg-green-500/20 transition-all flex items-center justify-center gap-1"
                    >
                      <FaCheckCircle /> All Present
                    </button>
                    <button
                      onClick={() => handleMarkAll("absent")}
                      className="flex-1 sm:flex-none px-3 py-2.5 bg-red-500/10 text-red-600 rounded-xl text-xs font-medium hover:bg-red-500/20 transition-all flex items-center justify-center gap-1"
                    >
                      <FaTimesCircle /> All Absent
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-xl font-bold text-gray-800">{markedCount}/{students.length}</p>
                  <p className="text-xs text-gray-500">Marked</p>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-xl font-bold text-green-600">{presentCount}</p>
                  <p className="text-xs text-gray-500">Present</p>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 text-center">
                  <p className="text-xl font-bold text-red-600">{absentCount}</p>
                  <p className="text-xs text-gray-500">Absent</p>
                </div>
              </div>

              {/* Student List */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {filteredStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-600 text-sm">
                          {student.rollNo}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">{student.name}</p>
                          <p className="text-xs text-gray-500">{student.admNo}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleMarkAttendance(student.id, "present")}
                          className={`h-9 w-9 rounded-lg flex items-center justify-center transition-all ${
                            student.status === "present"
                              ? "bg-green-500 text-white"
                              : "bg-gray-100 text-gray-400 hover:bg-green-500/10 hover:text-green-500"
                          }`}
                        >
                          <FaCheckCircle />
                        </button>
                        <button
                          onClick={() => handleMarkAttendance(student.id, "absent")}
                          className={`h-9 w-9 rounded-lg flex items-center justify-center transition-all ${
                            student.status === "absent"
                              ? "bg-red-500 text-white"
                              : "bg-gray-100 text-gray-400 hover:bg-red-500/10 hover:text-red-500"
                          }`}
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              {markedCount > 0 && (
                <div className="fixed bottom-16 left-0 right-0 p-4 bg-white border-t border-gray-200">
                  <div className="max-w-4xl mx-auto">
                    <button
                      onClick={handleSaveAttendance}
                      disabled={isSaving || markedCount !== students.length}
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary to-green-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSaving ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <FaSave /> Save Attendance ({markedCount}/{students.length})
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
              {/* Spacer for fixed button */}
              {markedCount > 0 && <div className="h-20" />}
            </div>
          )}

          {/* Students Tab */}
          {activeTab === "students" && (
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Add Student Button */}
              <button
                onClick={() => setShowAddStudent(true)}
                className="w-full bg-gradient-to-r from-primary to-green-500 text-white rounded-2xl p-4 font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]"
              >
                <FaUserPlus /> Add New Student
              </button>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-800">Class {teacherData.assignedClass.name}</h3>
                    <p className="text-sm text-gray-500">{students.length} Students</p>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        {student.rollNo}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{student.name}</p>
                        <p className="text-xs text-gray-500">Admission No: {student.admNo}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "overview" ? "text-primary" : "text-gray-400"
            }`}
          >
            <FaHome className="text-lg" />
            <span className="text-xs font-medium">Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("mark")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "mark" ? "text-primary" : "text-gray-400"
            }`}
          >
            <FaUserCheck className="text-lg" />
            <span className="text-xs font-medium">Attendance</span>
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeTab === "students" ? "text-primary" : "text-gray-400"
            }`}
          >
            <FaUsers className="text-lg" />
            <span className="text-xs font-medium">Students</span>
          </button>
        </div>
      </nav>

      {/* Add Student Modal */}
      {showAddStudent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => !isAddingStudent && setShowAddStudent(false)}
          />
          
          {/* Modal */}
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Add New Student</h3>
              <button
                onClick={() => !isAddingStudent && setShowAddStudent(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                disabled={isAddingStudent}
              >
                <FaTimes />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddStudent} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Name *
                </label>
                <input
                  type="text"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter student name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  required
                  disabled={isAddingStudent}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Roll No *
                  </label>
                  <input
                    type="number"
                    value={newStudent.rollNo}
                    onChange={(e) => setNewStudent(prev => ({ ...prev, rollNo: e.target.value }))}
                    placeholder="Roll number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    required
                    disabled={isAddingStudent}
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Admission No *
                  </label>
                  <input
                    type="text"
                    value={newStudent.admNo}
                    onChange={(e) => setNewStudent(prev => ({ ...prev, admNo: e.target.value }))}
                    placeholder="Admission no"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                    required
                    disabled={isAddingStudent}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddStudent(false)}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  disabled={isAddingStudent}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAddingStudent || !newStudent.name || !newStudent.rollNo || !newStudent.admNo}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-green-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAddingStudent ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <FaPlus /> Add Student
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
