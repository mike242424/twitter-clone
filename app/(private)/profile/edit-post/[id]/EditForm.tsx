'use client';

import { PostInterface } from '@/app/types';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

const EditForm = ({ post }: { post: PostInterface }) => {
  const router = useRouter();
  const [postContent, setPostContent] = useState(post.content);
  const [confirmDelete, setConfirmDelete] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ content: postContent }),
    });

    if (res.ok) {
      setPostContent('');
      router.push('/profile');
    }
  }

  async function handleDelete() {
    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      router.push('/profile');
    }
  }

  function handleConfirmDelete() {
    setConfirmDelete((confirmDelete) => !confirmDelete);
  }

  return (
    <form className="flex flex-col items-center m-4" onSubmit={handleSubmit}>
      <textarea
        className="p-4 bg-slate-200 text-slate-900 rounded-lg w-full border-2 border-slate-500"
        placeholder="Edit post..."
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <div className="flex mt-3 w-full justify-between">
        <button
          className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
          type="submit"
        >
          Save Post
        </button>
        {!confirmDelete ? (
          <button
            className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
            type="submit"
            onClick={handleConfirmDelete}
          >
            Delete Post
          </button>
        ) : (
          <div className="flex gap-4 items-center">
            <div className="text-slate-900">Are you sure?</div>
            <button
              className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
              onClick={handleConfirmDelete}
            >
              No
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default EditForm;
