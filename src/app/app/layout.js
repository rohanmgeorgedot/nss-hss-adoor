"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaDownload, FaMobileAlt, FaCheckCircle, FaPlusSquare } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
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
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [userType, setUserType] = useState(null); // 'student' or 'teacher'
  const [isLoading, setIsLoading] = useState(true);
  
  // PWA detection states
  const [isMobile, setIsMobile] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check device type and PWA status
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    const ios = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    
    setIsMobile(mobile);
    setIsIOS(ios);

    // Check if running as installed PWA
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches 
      || window.navigator.standalone 
      || document.referrer.includes("android-app://");
    setIsPWA(isStandalone);

    // Listen for PWA install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

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

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
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

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    }
  };

  // Show loading while checking device
  if (isMobile === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-green-600 to-teal-600 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  // Mobile users who haven't installed PWA - show install prompt
  if (isMobile && !isPWA) {
    // iOS Instructions Modal
    if (showIOSInstructions) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-primary via-green-600 to-teal-600 flex items-center justify-center p-5">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMobileAlt className="text-3xl text-blue-500" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 mb-2">Install on iPhone/iPad</h1>
              <p className="text-sm text-gray-600">Follow these steps to add to home screen:</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                <div>
                  <p className="text-sm text-gray-700">
                    Tap the <IoShareOutline className="inline text-blue-500 text-lg mx-1" /> <strong>Share</strong> button at the bottom of Safari
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                <div>
                  <p className="text-sm text-gray-700">
                    Scroll down and tap <FaPlusSquare className="inline text-gray-600 mx-1" /> <strong>"Add to Home Screen"</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                <div>
                  <p className="text-sm text-gray-700">
                    Tap <strong>"Add"</strong> in the top right corner
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSInstructions(false)}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Got it!
            </button>
          </div>
        </div>
      );
    }

    // Mobile Install Page
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-green-600 to-teal-600 flex items-center justify-center p-5">
        <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <Image
                src="/images/logo.webp"
                alt="NSS HSS Adoor"
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900">NSS HSS Adoor</h1>
            <p className="text-sm text-gray-500">Student & Teacher Portal</p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Quick access from home screen</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">Fast & smooth experience</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">No app store download needed</span>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstallClick}
            className="w-full bg-gradient-to-r from-primary to-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-[0.98] cursor-pointer"
          >
            <FaDownload className="text-lg" />
            {isIOS ? "How to Install" : "Install App"}
          </button>

          {/* Info */}
          <p className="text-center text-xs text-gray-400 mt-4">
            {isIOS 
              ? "Opens instructions for Safari" 
              : "Installs directly to your home screen"}
          </p>
        </div>
      </div>
    );
  }

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
