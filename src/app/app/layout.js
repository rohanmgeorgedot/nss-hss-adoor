"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { supabase } from "@lib/supabase";

// Auth Context for the app
export const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export default function AppLayout({ children }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userType, setUserType] = useState(null); // 'student' or 'teacher'
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check current session
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          await fetchUserProfile(session.user.id);
        }
      } catch (error) {
        console.error("Session check error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser(session.user);
        await fetchUserProfile(session.user.id);
      } else {
        setUser(null);
        setUserProfile(null);
        setUserType(null);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      // First check if user is a teacher
      const { data: teacherData, error: teacherError } = await supabase
        .from('teachers')
        .select('*, classes(*)')
        .eq('user_id', userId)
        .maybeSingle();

      if (teacherData) {
        setUserProfile(teacherData);
        setUserType('teacher');
        return 'teacher';
      }

      // If not teacher, check if student
      const { data: studentData, error: studentError } = await supabase
        .from('students')
        .select('*, classes(*)')
        .eq('user_id', userId)
        .maybeSingle();

      if (studentData) {
        setUserProfile(studentData);
        setUserType('student');
        return 'student';
      }

      // No profile found
      setUserProfile(null);
      setUserType(null);
      return null;
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      // Fetch user profile immediately after login
      if (data.user) {
        setUser(data.user);
        const profileType = await fetchUserProfile(data.user.id);
        return { data, error: null, profileType };
      }
      
      return { data, error: null, profileType: null };
    } catch (error) {
      return { data: null, error, profileType: null };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
      setUser(null);
      setUserProfile(null);
      setUserType(null);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userProfile, 
      userType, 
      login, 
      logout, 
      isLoading, 
      setIsLoading,
      refreshProfile: () => user && fetchUserProfile(user.id)
    }}>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </AuthContext.Provider>
  );
}
