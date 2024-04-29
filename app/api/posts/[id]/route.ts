import { getJWTPayload } from '@/app/utils/auth';
import { sql } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: number } },
) {
  const jwtPayload = await getJWTPayload();
  const res = await sql('select * from posts where id = $1 and user_id = $2', [
    id,
    jwtPayload.sub,
  ]);

  if (res.rowCount == 0) {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }

  return NextResponse.json({ data: res.rows[0] });
}

export async function PATCH(
  request: Request,
  { params: { id } }: { params: { id: number } },
) {
  const body = await request.json();
  const jwtPayload = await getJWTPayload();
  const res = await sql('select * from posts where user_id = $1 and id = $2', [
    jwtPayload.sub,
    id,
  ]);

  if (res.rowCount == 0) {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }

  await sql('update posts set content = $1 where user_id = $2 and id = $3', [
    body.content,
    jwtPayload.sub,
    id,
  ]);

  return NextResponse.json({ message: 'update success' });
}

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } },
) {
  const jwtPayload = await getJWTPayload();
  const res = await sql('delete from posts where user_id = $1 and id = $2', [
    jwtPayload.sub,
    id,
  ]);

  if (res.rowCount == 1) {
    return NextResponse.json({ message: 'delete success' });
  } else {
    return NextResponse.json({ error: 'not found' }, { status: 404 });
  }
}
