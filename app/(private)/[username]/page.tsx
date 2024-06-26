'use client';

import PostContainer from '@/app/components/Post/PostContainer';
import Header from './Header';

const UserPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return (
    <>
      <Header username={username} />
      <PostContainer username={username} />
    </>
  );
};

export default UserPage;
