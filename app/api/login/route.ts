import { sql } from '@/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';

export async function POST(request: Request) {
  const json = await request.json();
  const res = await sql(
    'select id, username, password from public.users where username ilike $1',
    [json.username],
  );

  if (res.rowCount === 0) {
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  }

  const user = res.rows[0];

  if (!user.password) {
    return NextResponse.json(
      { error: 'no password provided' },
      { status: 401 },
    );
  }

  const match = await bcrypt.compare(json.password, user.password);
  console.log(match);

  if (!match) {
    return NextResponse.json({ error: 'invalid credentials' }, { status: 401 });
  }
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime('2w')
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

  const response = NextResponse.json({ message: 'login success' });
  response.cookies.set('jwt-token', token, {
    sameSite: 'strict',
    httpOnly: true,
    secure: true,
  });

  return response;
}
