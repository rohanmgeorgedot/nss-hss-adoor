-- =====================================================
-- SUPABASE STORAGE RLS POLICIES FOR GALLERY
-- =====================================================
-- Run this SQL in your Supabase Dashboard → SQL Editor
-- Make sure you have created a storage bucket named 'gallery' first
-- =====================================================

-- 1. Allow public to view gallery images (for displaying on website)
CREATE POLICY "Public can view gallery images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'gallery');

-- 2. Allow authenticated users to upload to gallery
CREATE POLICY "Authenticated users can upload gallery images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery');

-- 3. Allow authenticated users to delete from gallery
CREATE POLICY "Authenticated users can delete gallery images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'gallery');

-- 4. Allow authenticated users to update gallery images (optional)
CREATE POLICY "Authenticated users can update gallery images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'gallery');

-- =====================================================
-- NOTES:
-- =====================================================
-- 
-- 1. Before running these policies, ensure:
--    - You have created a storage bucket named 'gallery' in Supabase
--    - The bucket is set to 'Public' (for images to be viewable)
--
-- 2. To create an admin user:
--    - Go to Supabase Dashboard → Authentication → Users
--    - Click "Add user" → "Create new user"
--    - Enter email and password
--    - Check "Auto Confirm User"
--    - Click "Create user"
--
-- 3. To restrict admin access:
--    - Open src/app/admin/page.js
--    - Add your admin email to the ADMIN_EMAILS array:
--
--    const ADMIN_EMAILS = [
--      "admin@nsshssadoor.in",
--    ];
--
-- =====================================================
