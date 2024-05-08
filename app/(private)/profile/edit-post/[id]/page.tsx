'use client';

import useSWR from 'swr';
import EditForm from './EditForm';
import EditPostLoading from '../EditPostLoading';
import NotFound from '@/app/components/AccessDenied';

function EditPost({ params: { id } }: { params: { id: number } }) {
  const { data, error, isLoading } = useSWR(`/api/posts/${id}`);

  if (error) return <NotFound />;
  if (isLoading) return <EditPostLoading />;

  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Edit Post
      </h1>
      <EditForm post={data.data} />
    </>
  );
}

export default EditPost;
