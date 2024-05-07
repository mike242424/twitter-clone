import { FormEvent, useState } from 'react';
import { useSWRConfig } from 'swr';

const Form = () => {
  const { mutate } = useSWRConfig();
  const [post, setPost] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ content: post }),
    });

    if (res.ok) {
      setPost('');
      mutate((key) => typeof key === 'string' && key.startsWith('/api/posts'));
    }
  }
  return (
    <form className="flex flex-col items-center m-4" onSubmit={handleSubmit}>
      <textarea
        className="p-4 bg-slate-200 text-slate-900 rounded-lg w-full border-2 border-slate-500"
        placeholder="Add new post..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>
      <div className="text-center mt-3">
        <button
          className="p-3 mt-1 bg-slate-800 text-white rounded-lg"
          type="submit"
        >
          Add Post
        </button>
      </div>
    </form>
  );
};

export default Form;
