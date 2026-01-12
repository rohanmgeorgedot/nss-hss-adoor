import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request) {
  // Create admin client inside the handler to avoid build-time errors
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: 'Server configuration error. Please contact administrator.' },
      { status: 500 }
    );
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
  try {
    const { name, rollNo, admNo, classId } = await request.json();

    // Validate input
    if (!name || !rollNo || !admNo || !classId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate email and password
    const email = `${admNo}@student.nsshssadoor.in`;
    const password = admNo; // Default password is admission number

    // Create auth user
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email
    });

    if (authError) {
      console.error('Auth error:', authError);
      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    // Create student record with user_id linked
    const { data: studentData, error: studentError } = await supabaseAdmin
      .from('students')
      .insert([{
        name,
        roll_no: parseInt(rollNo),
        adm_no: admNo,
        class_id: classId,
        user_id: authData.user.id,
      }])
      .select()
      .single();

    if (studentError) {
      // If student creation fails, delete the auth user
      await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      console.error('Student error:', studentError);
      return NextResponse.json(
        { error: studentError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      student: studentData,
      credentials: {
        email,
        password,
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
