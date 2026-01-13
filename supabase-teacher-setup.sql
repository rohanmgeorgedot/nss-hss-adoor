-- =====================================================
-- TEACHER ACCOUNT SETUP FOR NSS HSS ADOOR APP
-- =====================================================
-- Run these SQL commands in Supabase Dashboard → SQL Editor
-- Follow the steps in order
-- =====================================================


-- =====================================================
-- STEP 1: CREATE TABLES (if not exists)
-- =====================================================

-- Create classes table
CREATE TABLE IF NOT EXISTS classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  section VARCHAR(10),
  academic_year VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create teachers table
CREATE TABLE IF NOT EXISTS teachers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(100),
  class_id UUID REFERENCES classes(id) ON DELETE SET NULL,
  is_class_teacher BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  roll_no INTEGER NOT NULL,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  parent_name VARCHAR(255),
  parent_phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create attendance table
CREATE TABLE IF NOT EXISTS attendance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('present', 'absent', 'late')),
  marked_by UUID REFERENCES teachers(id) ON DELETE SET NULL,
  remarks TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, date)
);


-- =====================================================
-- STEP 2: ENABLE ROW LEVEL SECURITY (RLS)
-- =====================================================

ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;


-- =====================================================
-- STEP 3: CREATE RLS POLICIES
-- =====================================================

-- Classes policies
DROP POLICY IF EXISTS "Anyone can view classes" ON classes;
CREATE POLICY "Anyone can view classes" ON classes FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Teachers can manage classes" ON classes;
CREATE POLICY "Teachers can manage classes" ON classes FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM teachers WHERE teachers.user_id = auth.uid()));

-- Teachers policies
DROP POLICY IF EXISTS "Teachers can view all teachers" ON teachers;
CREATE POLICY "Teachers can view all teachers" ON teachers FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Teachers can update own profile" ON teachers;
CREATE POLICY "Teachers can update own profile" ON teachers FOR UPDATE TO authenticated
USING (user_id = auth.uid());

-- Students policies
DROP POLICY IF EXISTS "Teachers can view students" ON students;
CREATE POLICY "Teachers can view students" ON students FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Teachers can manage students" ON students;
CREATE POLICY "Teachers can manage students" ON students FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM teachers WHERE teachers.user_id = auth.uid()));

DROP POLICY IF EXISTS "Students can view own profile" ON students;
CREATE POLICY "Students can view own profile" ON students FOR SELECT TO authenticated
USING (user_id = auth.uid());

-- Attendance policies
DROP POLICY IF EXISTS "Teachers can view attendance" ON attendance;
CREATE POLICY "Teachers can view attendance" ON attendance FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Teachers can manage attendance" ON attendance;
CREATE POLICY "Teachers can manage attendance" ON attendance FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM teachers WHERE teachers.user_id = auth.uid()));

DROP POLICY IF EXISTS "Students can view own attendance" ON attendance;
CREATE POLICY "Students can view own attendance" ON attendance FOR SELECT TO authenticated
USING (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));


-- =====================================================
-- STEP 4: CREATE SAMPLE CLASS (Optional)
-- =====================================================

-- Insert a sample class (modify as needed)
INSERT INTO classes (name, section, academic_year)
VALUES ('Class 10', 'A', '2024-2025')
ON CONFLICT DO NOTHING;

-- You can add more classes like:
-- INSERT INTO classes (name, section, academic_year) VALUES ('Class 9', 'A', '2024-2025');
-- INSERT INTO classes (name, section, academic_year) VALUES ('Class 10', 'B', '2024-2025');


-- =====================================================
-- STEP 5: CREATE TEACHER ACCOUNT
-- =====================================================
-- 
-- IMPORTANT: Follow these steps to create a teacher account:
--
-- METHOD 1: Using Supabase Dashboard (Recommended)
-- ------------------------------------------------
-- 1. Go to Supabase Dashboard → Authentication → Users
-- 2. Click "Add user" → "Create new user"
-- 3. Enter teacher's email (e.g., teacher@nsshssadoor.in)
-- 4. Enter a secure password
-- 5. Check "Auto Confirm User" ✓
-- 6. Click "Create user"
-- 7. Copy the user's ID (UUID) from the users list
-- 8. Run the SQL below with the copied user_id
--
-- METHOD 2: Using SQL (After creating auth user)
-- ------------------------------------------------
-- After creating the user in Authentication, run this:

-- Replace these values with actual data:
-- - 'USER_ID_HERE' → The UUID from auth.users (copy from Authentication → Users)
-- - Other fields → Teacher's actual information

/*
INSERT INTO teachers (user_id, name, email, phone, subject, class_id, is_class_teacher)
VALUES (
  'USER_ID_HERE',                                    -- Replace with actual user_id from auth.users
  'Teacher Name',                                    -- Teacher's full name
  'teacher@nsshssadoor.in',                          -- Same email used in auth
  '9876543210',                                      -- Phone number (optional)
  'Mathematics',                                     -- Subject they teach
  (SELECT id FROM classes WHERE name = 'Class 10' AND section = 'A' LIMIT 1),  -- Class ID
  true                                               -- Is class teacher? (true/false)
);
*/


-- =====================================================
-- EXAMPLE: Complete Teacher Setup
-- =====================================================
-- Here's a complete example. Replace with your actual values:

/*
-- Step 1: First create the user in Supabase Dashboard → Authentication → Users
-- Step 2: Copy the user_id (UUID) from the newly created user
-- Step 3: Run this SQL with the actual user_id:

INSERT INTO teachers (user_id, name, email, phone, subject, class_id, is_class_teacher)
VALUES (
  '12345678-1234-1234-1234-123456789012',           -- Actual user_id from auth
  'Anil Kumar',                                      -- Teacher name
  'anil.kumar@nsshssadoor.in',                       -- Email
  '9876543210',                                      -- Phone
  'Mathematics',                                     -- Subject
  (SELECT id FROM classes WHERE name = 'Class 10' AND section = 'A' LIMIT 1),
  true
);
*/


-- =====================================================
-- HELPER QUERIES
-- =====================================================

-- View all classes
-- SELECT * FROM classes;

-- View all teachers
-- SELECT t.*, c.name as class_name FROM teachers t LEFT JOIN classes c ON t.class_id = c.id;

-- View all students
-- SELECT s.*, c.name as class_name FROM students s LEFT JOIN classes c ON s.class_id = c.id;

-- Get teacher by email
-- SELECT * FROM teachers WHERE email = 'teacher@example.com';

-- Get user_id from auth.users by email
-- SELECT id FROM auth.users WHERE email = 'teacher@example.com';


-- =====================================================
-- QUICK SETUP CHECKLIST
-- =====================================================
--
-- □ 1. Run Step 1-3 SQL to create tables and policies
-- □ 2. Create a class using Step 4 SQL (or via admin UI later)
-- □ 3. Go to Supabase Dashboard → Authentication → Users
-- □ 4. Click "Add user" → Create teacher account
-- □ 5. Copy the user_id (UUID) of the new user
-- □ 6. Run Step 5 SQL with the actual user_id
-- □ 7. Teacher can now login at /app/login
--
-- =====================================================


-- =====================================================
-- ADD MULTIPLE TEACHERS (Example)
-- =====================================================

/*
-- After creating auth users for each teacher, insert their profiles:

INSERT INTO teachers (user_id, name, email, phone, subject, class_id, is_class_teacher) VALUES
  ('uuid-teacher-1', 'Anil Kumar', 'anil@nsshssadoor.in', '9876543210', 'Mathematics', (SELECT id FROM classes WHERE name = 'Class 10' LIMIT 1), true),
  ('uuid-teacher-2', 'Priya Menon', 'priya@nsshssadoor.in', '9876543211', 'English', (SELECT id FROM classes WHERE name = 'Class 9' LIMIT 1), true),
  ('uuid-teacher-3', 'Suresh Nair', 'suresh@nsshssadoor.in', '9876543212', 'Science', (SELECT id FROM classes WHERE name = 'Class 10' LIMIT 1), false);
*/


-- =====================================================
-- ADD STUDENTS (Example)
-- =====================================================

/*
-- Students can be added without auth accounts (for attendance tracking only)
-- Or with auth accounts (if they need to login to see their attendance)

-- Without auth account (attendance only):
INSERT INTO students (name, roll_no, class_id, parent_name, parent_phone) VALUES
  ('Student Name 1', 1, (SELECT id FROM classes WHERE name = 'Class 10' LIMIT 1), 'Parent Name', '9876543210'),
  ('Student Name 2', 2, (SELECT id FROM classes WHERE name = 'Class 10' LIMIT 1), 'Parent Name', '9876543211');

-- With auth account (if students need login):
-- 1. Create user in Authentication
-- 2. Copy user_id
-- 3. Insert with user_id:
INSERT INTO students (user_id, email, name, roll_no, class_id, parent_name, parent_phone)
VALUES ('student-user-id', 'student@email.com', 'Student Name', 1, (SELECT id FROM classes LIMIT 1), 'Parent', '1234567890');
*/
