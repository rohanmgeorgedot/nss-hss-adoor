-- =====================================================
-- SUPABASE COMPLETE RESET GUIDE
-- =====================================================
-- Run these SQL commands in Supabase Dashboard → SQL Editor
-- Follow the steps in order to avoid foreign key errors
-- =====================================================


-- =====================================================
-- STEP 1: DELETE DATA FROM CHILD TABLES FIRST
-- (Tables with foreign keys pointing to other tables)
-- =====================================================

-- Delete attendance records first (references teachers and students)
DELETE FROM attendance;

-- Delete marks if exists (references students)
DELETE FROM marks;

-- Delete student_class if exists (references students and classes)
DELETE FROM student_class;

-- Add any other child tables here...
-- DELETE FROM your_child_table;


-- =====================================================
-- STEP 2: DELETE DATA FROM PARENT TABLES
-- =====================================================

DELETE FROM teachers;
DELETE FROM students;
DELETE FROM classes;

-- Add any other parent tables here...
-- DELETE FROM your_parent_table;


-- =====================================================
-- STEP 3: DELETE ALL AUTH USERS
-- =====================================================

DELETE FROM auth.users;


-- =====================================================
-- STEP 4: CLEAR STORAGE (GALLERY IMAGES)
-- =====================================================

DELETE FROM storage.objects WHERE bucket_id = 'gallery';


-- =====================================================
-- ALTERNATIVE: DROP ALL TABLES COMPLETELY
-- Use this if you want to remove tables entirely
-- The CASCADE keyword handles foreign key constraints
-- =====================================================

-- Uncomment these lines to drop tables:

-- DROP TABLE IF EXISTS attendance CASCADE;
-- DROP TABLE IF EXISTS marks CASCADE;
-- DROP TABLE IF EXISTS student_class CASCADE;
-- DROP TABLE IF EXISTS teachers CASCADE;
-- DROP TABLE IF EXISTS students CASCADE;
-- DROP TABLE IF EXISTS classes CASCADE;

-- Clear auth users
-- DELETE FROM auth.users;

-- Clear storage
-- DELETE FROM storage.objects WHERE bucket_id = 'gallery';


-- =====================================================
-- STEP 5: RESET STORAGE POLICIES (OPTIONAL)
-- Run this if you want to recreate policies
-- =====================================================

-- Drop existing policies
DROP POLICY IF EXISTS "Public can view gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete gallery images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update gallery images" ON storage.objects;


-- =====================================================
-- STEP 6: RE-CREATE STORAGE POLICIES
-- After clearing, run these to set up gallery again
-- =====================================================

-- Allow public to view gallery images (for displaying on website)
CREATE POLICY "Public can view gallery images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'gallery');

-- Allow authenticated users to upload to gallery
CREATE POLICY "Authenticated users can upload gallery images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery');

-- Allow authenticated users to delete from gallery
CREATE POLICY "Authenticated users can delete gallery images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'gallery');

-- Allow authenticated users to update gallery images
CREATE POLICY "Authenticated users can update gallery images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'gallery');


-- =====================================================
-- AFTER RUNNING THIS SQL, FOLLOW THESE STEPS:
-- =====================================================
--
-- 1. CREATE NEW ADMIN USER:
--    - Go to Supabase Dashboard → Authentication → Users
--    - Click "Add user" → "Create new user"
--    - Enter your admin email and password
--    - Check "Auto Confirm User" ✓
--    - Click "Create user"
--
-- 2. UPDATE ADMIN EMAIL IN CODE:
--    - Open src/app/admin/page.js
--    - Find the ADMIN_EMAILS array (around line 21-23)
--    - Add your new admin email:
--
--      const ADMIN_EMAILS = [
--        "your-new-email@example.com",
--      ];
--
-- 3. VERIFY STORAGE BUCKET EXISTS:
--    - Go to Supabase Dashboard → Storage
--    - Make sure "gallery" bucket exists
--    - If not, create it and set it to "Public"
--
-- 4. TEST THE SETUP:
--    - Go to your-domain.com/admin
--    - Login with your new admin credentials
--    - Try uploading an image to verify everything works
--
-- =====================================================
