import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { getClient } from '@/db';

async function loadFakeData(numUsers: number) {
  console.log(`Executing load fake data. Generating ${numUsers} users.`);

  const client = await getClient();

  await client.connect();
  try {
    await client.query('begin');
    for (let index = 0; index < numUsers; index++) {
      const saltRounds = 10;
      const hash = await bcrypt.hash('password123', saltRounds);
      await client.query(
        'insert into public.users (username, password, avatar) values ($1, $2, $3)',
        [faker.internet.userName(), hash, faker.image.avatar()],
      );
    }

    const res = await client.query(
      'select id from public.users order by created_at desc limit $1',
      [numUsers],
    );
    console.log(res.rows);

    for (let i = 0; i < res.rows.length; i++) {
      for (let j = 0; j < Math.ceil(Math.random() * 25); j++) {
        await client.query(
          'insert into public.posts (user_id, content) values ($1, $2)',
          [res.rows[i].id, faker.lorem.sentence()],
        );
      }
    }

    for (let i = 0; i < res.rows.length; i++) {
      const row1 = res.rows[i];
      for (let j = 0; j < res.rows.length; j++) {
        const row2 = res.rows[j];
        if (row1.id !== row2.id) {
          if (Math.random() > 0.5) {
            await client.query(
              'insert into public.follows (user_id, follower_id) values ($1, $2)',
              [row1.id, row2.id],
            );
          }
        }
      }
    }

    await client.query('commit');
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    await client.end();
  }
}

const numUsers = parseInt(process.argv[2]) || 10;
console.log(`loading ${numUsers} fake users`);

loadFakeData(numUsers);
