export async function fetcher(url: RequestInfo | URL) {
  const res = await fetch(url);

  if (!res.ok) {
    const message = 'an error occured while fetching the data';
    const info = res.json();
    const status = res.status;
    const error = new Error(message);
    console.error(info, status);
    throw error;
  }

  return res.json();
}
