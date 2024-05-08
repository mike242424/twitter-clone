'use client';
import useSWR from 'swr';
import Form from './Form';
import PostContainer from '@/app/components/PostContainer';
import PostLoading from '@/app/components/PostLoading';
import NotFound from '../../components/AccessDenied';

const Profile = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (error) return <NotFound />;
  if (isLoading)
    return (
      <>
        <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
          Profile
        </h1>
        <Form />
        <PostLoading />
      </>
    );

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
