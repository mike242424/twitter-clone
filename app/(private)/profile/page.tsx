'use client';
import useSWR from 'swr';
import Form from './Form';
import PostContainer from '@/app/components/PostContainer';

const Profile = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="lg:w-6/12">
      <h1 className="text-center text-3xl text-slate-900 my-4 font-bold">
        Profile
      </h1>
      <Form />
      <PostContainer username={data.data.username} />
    </main>
  );
};

export default Profile;
