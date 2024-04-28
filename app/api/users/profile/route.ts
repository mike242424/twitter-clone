import { getJWTPayload } from '@/app/utils/auth';
import { sql } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // get currently logged in user
  const JWTPayload = await getJWTPayload();

  // fetch user data
  const res = await sql(
    'select id, username, avatar from users where id = $1 ',
    [JWTPayload.sub],
  );

  const user = res.rows[0];
  // return user data
  return NextResponse.json({ data: user }, { status: 200 });
}
