import { sql } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } },
) {
  const { searchParams } = new URL(request.url);
  const page =
    (searchParams.get('page') && parseInt(searchParams.get('page')!)) || 0;
  const limit = 10;
  const offset = page * limit;
  const res = await sql(
    `select u.id, u.username, u.avatar
    from users u inner join follows f on u.id = f.follower_id
    where user_id = $1 limit $2 offset $3
  `,
    [id, limit, offset],
  );

  return NextResponse.json({ data: res.rows });
}
