"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@lib/supabase";
import { 
  FaImages, 
  FaPlus, 
  FaTrash, 
  FaSignOutAlt, 
  FaSpinner,
  FaUpload,
  FaCheck,
  FaTimes,
  FaArrowLeft,
  FaLock,
  FaHome,
  FaGlobe
} from "react-icons/fa";
import { HiHome, HiPhotograph, HiLogout, HiGlobe } from "react-icons/hi";

// List of allowed admin emails - ADD YOUR ADMIN EMAILS HERE
const ADMIN_EMAILS = [
  "admin@nsshssadoor.in",
];

// Helper function to check if user is admin
const isAdmin = (email) => {
  if (!email) return false;
  return ADMIN_EMAILS.some(adminEmail => 
    adminEmail.toLowerCase() === email.toLowerCase()
  );
};

export default function AdminPage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  
  // Auth state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Gallery state
  const [images, setImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Check auth status on mount
  useEffect(() => {
    checkUser();
  }, []);

  // Load gallery images when user is authenticated and authorized
  useEffect(() => {
    if (user && isAuthorized) {
      loadGalleryImages();
    }
  }, [user, isAuthorized]);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setIsAuthorized(isAdmin(user.email));
      }
    } catch (error) {
      console.error("Auth check error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // Check if user is an admin
      if (!isAdmin(data.user.email)) {
        // Sign out non-admin users immediately
        await supabase.auth.signOut();
        setAuthError("Access denied. You are not authorized to access this page.");
        return;
      }
      
      setUser(data.user);
      setIsAuthorized(true);
    } catch (error) {
      setAuthError(error.message || "Login failed");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAuthorized(false);
    setImages([]);
  };

  const loadGalleryImages = async () => {
    setGalleryLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from("gallery")
        .list("", {
          limit: 100,
          sortBy: { column: "created_at", order: "desc" },
        });

      if (error) throw error;

      // Filter only image files
      const imageFiles = data.filter(file => 
        file.name.match(/\.(jpg|jpeg|png|webp|gif)$/i)
      );

      // Get public URLs for images
      const imagesWithUrls = imageFiles.map(file => ({
        name: file.name,
        url: supabase.storage.from("gallery").getPublicUrl(file.name).data.publicUrl,
        created_at: file.created_at,
      }));

      setImages(imagesWithUrls);
    } catch (error) {
      console.error("Error loading gallery:", error);
    } finally {
      setGalleryLoading(false);
    }
  };

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    setUploadProgress(0);

    try {
      let completed = 0;
      
      for (const file of files) {
        // Generate unique filename
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { error } = await supabase.storage
          .from("gallery")
          .upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) throw error;

        completed++;
        setUploadProgress(Math.round((completed / files.length) * 100));
      }

      // Refresh gallery
      await loadGalleryImages();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading image: " + error.message);
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (imageName) => {
    try {
      const { error } = await supabase.storage
        .from("gallery")
        .remove([imageName]);

      if (error) throw error;

      setImages(images.filter(img => img.name !== imageName));
      setDeleteConfirm(null);
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting image: " + error.message);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedImages.length === 0) return;

    try {
      const { error } = await supabase.storage
        .from("gallery")
        .remove(selectedImages);

      if (error) throw error;

      setImages(images.filter(img => !selectedImages.includes(img.name)));
      setSelectedImages([]);
    } catch (error) {
      console.error("Bulk delete error:", error);
      alert("Error deleting images: " + error.message);
    }
  };

  const toggleImageSelection = (imageName) => {
    setSelectedImages(prev => 
      prev.includes(imageName)
        ? prev.filter(name => name !== imageName)
        : [...prev, imageName]
    );
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <FaSpinner className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  // Access Denied screen for logged-in but unauthorized users
  if (user && !isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Lock Icon */}
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLock className="text-3xl text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
            <p className="text-gray-500 mb-6">
              You don&apos;t have permission to access the admin panel. This area is restricted to authorized administrators only.
            </p>
            
            <p className="text-sm text-gray-400 mb-6">
              Logged in as: <span className="font-medium text-gray-600">{user.email}</span>
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleLogout}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <FaSignOutAlt />
                Sign Out
              </button>
              
              <Link 
                href="/"
                className="w-full text-gray-500 py-2 hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                <FaArrowLeft className="text-sm" />
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Login form
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-orange-50 px-4">
        <div className="w-full max-w-md">
          {/* Back to website */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            Back to Website
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Logo */}
            <div className="text-center mb-8">
              <Image
                src="/images/logo.webp"
                alt="NSS HSS Adoor"
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
              <p className="text-gray-500 text-sm mt-1">NSS HSS Adoor</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {authError && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {authError}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="admin@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {authLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50 pb-16 lg:pb-0">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <Image
                src="/images/logo.webp"
                alt="NSS HSS Adoor"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <div>
                <h1 className="font-bold text-gray-800 text-sm sm:text-base">Admin Dashboard</h1>
                <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">NSS HSS Adoor</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/"
                className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
              >
                <HiGlobe className="text-lg" />
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>

            {/* Mobile/Tablet - Only logout visible in header */}
            <div className="lg:hidden">
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 hover:text-red-600 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-100"
              >
                <FaSignOutAlt className="text-sm" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Gallery Management Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Section Header */}
          <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-100">
            {/* Title Row */}
            <div className="flex items-center justify-between mb-3 sm:mb-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaImages className="text-primary text-sm sm:text-base" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800 text-sm sm:text-base">Gallery</h2>
                  <p className="text-xs sm:text-sm text-gray-500">{images.length} images</p>
                </div>
              </div>

              {/* Action Buttons - Desktop */}
              <div className="hidden sm:flex items-center gap-2 sm:gap-3">
                {selectedImages.length > 0 && (
                  <button
                    onClick={handleBulkDelete}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs sm:text-sm font-medium hover:bg-red-100 transition-colors"
                  >
                    <FaTrash className="text-xs" />
                    Delete ({selectedImages.length})
                  </button>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-primary-700 transition-colors cursor-pointer ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {uploading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span className="hidden sm:inline">Uploading</span> {uploadProgress}%
                    </>
                  ) : (
                    <>
                      <FaPlus className="text-xs" />
                      Add Images
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Action Buttons - Mobile */}
            <div className="flex sm:hidden items-center gap-2 mt-3">
              {selectedImages.length > 0 && (
                <button
                  onClick={handleBulkDelete}
                  className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors"
                >
                  <FaTrash className="text-xs" />
                  Delete ({selectedImages.length})
                </button>
              )}

              <label
                htmlFor="file-upload"
                className={`flex items-center gap-1.5 px-3 py-2 bg-primary text-white rounded-lg text-xs font-medium hover:bg-primary-700 transition-colors cursor-pointer flex-1 justify-center ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {uploading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    {uploadProgress}%
                  </>
                ) : (
                  <>
                    <FaPlus className="text-xs" />
                    Add Images
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="p-3 sm:p-4 md:p-6">
            {galleryLoading ? (
              <div className="flex items-center justify-center py-12">
                <FaSpinner className="animate-spin text-2xl text-primary" />
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-10 sm:py-12">
                <FaImages className="text-3xl sm:text-4xl text-gray-300 mx-auto mb-3 sm:mb-4" />
                <p className="text-gray-500 text-sm sm:text-base">No images in gallery</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Tap &quot;Add Images&quot; to upload</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                {images.map((image) => (
                  <div
                    key={image.name}
                    className={`relative group aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-all ${
                      selectedImages.includes(image.name) 
                        ? 'border-primary ring-2 ring-primary/20' 
                        : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />

                    {/* Selection Checkbox - Always visible on mobile */}
                    <button
                      onClick={() => toggleImageSelection(image.name)}
                      className={`absolute top-1 left-1 sm:top-2 sm:left-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all ${
                        selectedImages.includes(image.name)
                          ? 'bg-primary text-white'
                          : 'bg-white/90 text-gray-400 sm:opacity-0 sm:group-hover:opacity-100'
                      }`}
                    >
                      {selectedImages.includes(image.name) ? (
                        <FaCheck className="text-[10px] sm:text-xs" />
                      ) : (
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-gray-400" />
                      )}
                    </button>

                    {/* Delete Button - Always visible on mobile */}
                    <button
                      onClick={() => setDeleteConfirm(image.name)}
                      className="absolute top-1 right-1 sm:top-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 bg-red-500 text-white rounded-full flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all hover:bg-red-600"
                    >
                      <FaTrash className="text-[10px] sm:text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile & Tablet Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200">
        <div className="pb-[env(safe-area-inset-bottom)]">
          <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
            {/* Dashboard - Active */}
            <div className="flex flex-col items-center justify-center flex-1 h-full text-primary">
              <HiPhotograph className="text-[22px]" />
              <span className="mt-0.5 text-[10px] font-semibold">Gallery</span>
            </div>
            
            {/* View Site */}
            <Link
              href="/"
              className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 active:opacity-70"
            >
              <HiGlobe className="text-xl" />
              <span className="mt-0.5 text-[10px] font-medium">Website</span>
            </Link>
            
            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex flex-col items-center justify-center flex-1 h-full text-gray-400 active:opacity-70"
            >
              <HiLogout className="text-xl" />
              <span className="mt-0.5 text-[10px] font-medium">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-sm w-full mx-4">
            <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2">Delete Image?</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
              This action cannot be undone. The image will be permanently deleted.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-3 sm:px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
