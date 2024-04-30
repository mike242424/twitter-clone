import { getJWTPayload } from '@/app/utils/auth';
import { sql } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const jwtPayload = await getJWTPayload();
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get('user_id');

  const res = await sql(
    'select * from follows where user_id = $1 and follower_id = $2',
    [user_id, jwtPayload.sub],
  );

  return NextResponse.json({ data: res.rows });
}
