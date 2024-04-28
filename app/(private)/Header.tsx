'use client';
import useSWR from 'swr';

const fetcher = async function (url: RequestInfo | URL) {
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
};

const Header = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return <header>Header</header>;
};

export default Header;
