'use client';

import Header from './Header';

const UserPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return (
    <main className="lg:w-6/12">
      <Header username={username} />
    </main>
  );
};

export default UserPage;
