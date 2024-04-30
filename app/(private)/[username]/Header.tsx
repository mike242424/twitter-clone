import Image from 'next/image';
import { notFound } from 'next/navigation';
import useSWR, { mutate } from 'swr';

const Header = ({ username }: { username: string }) => {
  const {
    data: dataUser,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useSWR(`/api/users?username=${username}`);

  if (dataUser?.data?.length === 0) {
    notFound();
  }

  const userId = dataUser?.data[0].id;

  const {
    data: dataFollow,
    error: errorFollow,
    isLoading: isLoadingFollow,
  } = useSWR(() => userId && `/api/follows?user_id=${userId}`);
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
      mutate(`/api/follows?user_id=${userId}`);
    }
  }
  if (errorFollow || errorUser) return <div>failed to load</div>;
  if (isLoadingFollow || isLoadingUser) return <div>loading...</div>;

  return (
    <div className="flex gap-4 items-center justify-center">
      <Image
        className="rounded-full"
        src={dataUser.data[0].avatar}
        alt={dataUser.data[0].username}
        width={50}
        height={50}
      />

      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        {username}
      </h1>
      {dataFollow.data.length > 0 ? (
        <div className="text-center">
          <button
            className="p-4 bg-slate-800 text-white rounded-lg"
            onClick={handleUnfollow}
          >
            Unfollow
          </button>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="p-4 bg-slate-800 text-white rounded-lg"
            onClick={handleFollow}
          >
            Follow
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
