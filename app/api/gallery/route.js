import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { data, error } = await supabase.from('videos').select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
