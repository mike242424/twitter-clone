'use client';
import useSWR from 'swr';
import User from '../components/User';

const Header = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <header className="flex flex-row w-full p-3 bg-slate-800 justify-between items-center mb-2">
      <h1 className="text-3xl font-bold ml-10">Twitter Clone</h1>
      <div className="mr-10">
        <User user={data.data} href="account" />
      </div>
    </header>
  );
};

export default Header;
