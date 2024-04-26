import { loadEnvConfig } from '@next/env';
import { Client, QueryResult } from 'pg';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export async function getClient(): Promise<Client> {
  if (process.env.POSTGRES_URL) {
    const client = new Client({
      connectionString: process.env.POSTGRES_URL + '?sslmode=require',
    });

    return client;
  }
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT!),
  });
  return client;
}

export async function sql(
  sql: string,
  values?: Array<any>,
): Promise<QueryResult<any>> {
  const client = await getClient();
  client.connect();
  const res = await client.query(sql, values);
  await client.end();
  return res;
}
