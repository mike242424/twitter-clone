'use client';
import useSWR from 'swr';

const Header = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return <header>Header</header>;
};

export default Header;
