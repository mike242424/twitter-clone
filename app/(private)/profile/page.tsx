'use client';
import useSWR from 'swr';
import Form from './Form';
import PostContainer from '@/app/components/PostContainer';

const Profile = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Profile
      </h1>
      <Form />
      <PostContainer username={data.data.username} showEditButton={true} />
    </>
  );
};

export default Profile;
