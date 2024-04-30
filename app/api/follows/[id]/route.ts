import { getJWTPayload } from '@/app/utils/auth';
import { sql } from '@/db';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: number } },
) {
  const jwtPayload = await getJWTPayload();
  await sql('delete from follows where user_id = $1 and follower_id = $2', [
    id,
    jwtPayload.sub,
  ]);

  return NextResponse.json({ message: 'follow deleted' });
}
