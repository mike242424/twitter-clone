'use client';

import useSWR, { mutate } from 'swr';

const UserPage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const {
    data: dataUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useSWR(`/api/users?username=${username}`);

  const userId = dataUser.data[0].id;

  const {
    data: dataFollow,
    error: errorFollow,
    isLoading: isLoadingFollow,
  } = useSWR(() => `/api/follows?user_id=${userId}`);

  async function handleFollow() {
    const res = await fetch(`/api/follows`, {
      method: 'POST',
      body: JSON.stringify({ user_id: userId }),
    });

    if (res.ok) {
      mutate(`/api/follows?user_id=${userId}`);
    }
  }

  async function handleUnfollow() {
    const res = await fetch(`/api/follows/${userId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      mutate(`/api/follows?user_id=${dataUser.data[0].id}`);
    }
  }

  if (errorFollow || errorUser) return <div>failed to load</div>;
  if (isLoadingFollow || isLoadingUser) return <div>loading...</div>;

  return (
    <main className="lg:w-6/12">
      <h1 className="text-center text-3xl text-slate-900 my-4 font-bold">
        {username}
      </h1>
      {dataFollow.data.length > 0 ? (
        <button
          className="p-4 bg-slate-800 text-white rounded-lg"
          onClick={handleUnfollow}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="p-4 bg-slate-800 text-white rounded-lg"
          onClick={handleFollow}
        >
          Follow
        </button>
      )}
    </main>
  );
};

export default UserPage;
