import { sql } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json(
      { error: 'username parameter required' },
      { status: 400 },
    );
  }

  const res = await sql(
    'select id, username, avatar from users where username ilike $1',
    [username],
  );

  return NextResponse.json({ data: res.rows });
}
