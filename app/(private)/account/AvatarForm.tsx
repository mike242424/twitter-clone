import Image from 'next/image';
import useSWR from 'swr';

const AvatarForm = () => {
  const { data, error, isLoading } = useSWR('/api/users/profile');
  const user = data?.data;

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <form className="flex flex-col items-center justify-center gap-4">
      {user.avatar ? (
        <Image
          className="justify-center rounded-full"
          src={user.avatar}
          alt={user.username}
          height={200}
          width={200}
        />
      ) : (
        <div className="bg-slate-600 rounded-full h-[50px] w-[50px]"></div>
      )}

      <input className="ml-32 self-center" type="file" />
    </form>
  );
};

export default AvatarForm;
