"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaMobileAlt, FaCheckCircle, FaArrowLeft, FaPlusSquare } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { useAuth } from "./layout";

export default function AppPage() {
  const router = useRouter();
  const { user, userType, isLoading } = useAuth();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isMobile, setIsMobile] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check device type
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
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  // Handle authenticated users and PWA mode
  useEffect(() => {
    if (isPWA) {
      // Running as installed PWA
      if (!isLoading) {
        if (user && userType) {
          // User is logged in, redirect to their dashboard
          if (userType === 'teacher') {
            router.push("/app/dashboard/teacher");
          } else if (userType === 'student') {
            router.push("/app/dashboard/student");
          }
        } else {
          // Not logged in, go to login
          router.push("/app/login");
        }
      }
    } else if (!isLoading && user && userType) {
      // Not PWA but logged in, redirect to dashboard
      if (userType === 'teacher') {
        router.push("/app/dashboard/teacher");
      } else if (userType === 'student') {
        router.push("/app/dashboard/student");
      }
    }
  }, [isLoading, user, userType, isPWA, router]);

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

  // Show loading while checking
  if (isMobile === null || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-green-600 to-teal-600 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  // If running as PWA, show loading (will redirect via useEffect)
  if (isPWA) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-green-600 to-teal-600 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  // Desktop users → go to login
  if (!isMobile) {
    router.push("/app/login");
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-green-600 to-teal-600 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

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

          {/* Back to Website */}
          <Link 
            href="/" 
            className="w-full mt-4 text-gray-400 text-sm py-2 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaArrowLeft className="text-xs" />
            Back to Website
          </Link>
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

        {/* Back to Website */}
        <Link 
          href="/" 
          className="w-full mt-4 pt-4 border-t border-gray-100 text-gray-400 text-sm py-2 hover:text-gray-600 transition-colors flex items-center justify-center gap-2"
        >
          <FaArrowLeft className="text-xs" />
          Back to Website
        </Link>
      </div>
    </div>
  );
}
