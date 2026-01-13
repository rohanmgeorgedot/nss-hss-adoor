import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Auth helpers
export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
};

// Student helpers
export const getStudents = async (classId) => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('class_id', classId)
    .order('roll_no', { ascending: true });
  return { data, error };
};

export const addStudent = async (studentData) => {
  const { data, error } = await supabase
    .from('students')
    .insert([studentData])
    .select()
    .single();
  return { data, error };
};

export const updateStudent = async (id, updates) => {
  const { data, error } = await supabase
    .from('students')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteStudent = async (id) => {
  const { error } = await supabase
    .from('students')
    .delete()
    .eq('id', id);
  return { error };
};

// Attendance helpers
export const markAttendance = async (attendanceRecords) => {
  const { data, error } = await supabase
    .from('attendance')
    .upsert(attendanceRecords, { 
      onConflict: 'student_id,date',
      ignoreDuplicates: false 
    })
    .select();
  return { data, error };
};

export const getAttendanceByDate = async (classId, date) => {
  const { data, error } = await supabase
    .from('attendance')
    .select('*, students(name, roll_no)')
    .eq('class_id', classId)
    .eq('date', date);
  return { data, error };
};

export const getStudentAttendance = async (studentId, startDate, endDate) => {
  const { data, error } = await supabase
    .from('attendance')
    .select('*')
    .eq('student_id', studentId)
    .gte('date', startDate)
    .lte('date', endDate)
    .order('date', { ascending: false });
  return { data, error };
};

export const getAttendanceStats = async (studentId) => {
  const { data, error } = await supabase
    .from('attendance')
    .select('status')
    .eq('student_id', studentId);
  
  if (error) return { data: null, error };
  
  const stats = {
    totalDays: data.length,
    present: data.filter(d => d.status === 'present').length,
    absent: data.filter(d => d.status === 'absent').length,
  };
  stats.percentage = stats.totalDays > 0 
    ? Math.round((stats.present / stats.totalDays) * 100) 
    : 0;
  
  return { data: stats, error: null };
};

// Teacher helpers
export const getTeacherByUserId = async (userId) => {
  const { data, error } = await supabase
    .from('teachers')
    .select('*, classes(*)')
    .eq('user_id', userId)
    .single();
  return { data, error };
};

// Class helpers
export const getClassById = async (classId) => {
  const { data, error } = await supabase
    .from('classes')
    .select('*')
    .eq('id', classId)
    .single();
  return { data, error };
};

// Gallery helpers
export const getGalleryImages = async () => {
  try {
    const { data, error } = await supabase.storage
      .from('gallery')
      .list('', {
        limit: 100,
        sortBy: { column: 'created_at', order: 'desc' },
      });

    if (error) throw error;

    // Filter only image files
    const imageFiles = data.filter(file => 
      file.name.match(/\.(jpg|jpeg|png|webp|gif)$/i)
    );

    // Get public URLs for images
    const imagesWithUrls = imageFiles.map(file => ({
      name: file.name,
      src: supabase.storage.from('gallery').getPublicUrl(file.name).data.publicUrl,
      alt: `NSS HSS Adoor Gallery - ${file.name}`,
      created_at: file.created_at,
    }));

    return { data: imagesWithUrls, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const uploadGalleryImage = async (file) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from('gallery')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  return { data, error };
};

export const deleteGalleryImage = async (fileName) => {
  const { error } = await supabase.storage
    .from('gallery')
    .remove([fileName]);

  return { error };
};
