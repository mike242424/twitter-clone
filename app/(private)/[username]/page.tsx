'use client';

import PostContainer from '@/app/components/PostContainer';
import Header from './Header';

const UserPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return (
    <main className="lg:w-6/12">
      <Header username={username} />
      <PostContainer username={username} />
    </main>
  );
};

export default UserPage;
