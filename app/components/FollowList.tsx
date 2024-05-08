import User from '@/app/components/User';
import { UserInterface } from '@/app/types';
import { Dispatch, SetStateAction } from 'react';
import useSWR from 'swr';
import Loading from './FollowLoading';

const FollowList = ({
  index,
  follow,
  setHasMoreFollows,
}: {
  index: number;
  follow: string;
  setHasMoreFollows: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: userData } = useSWR(`/api/users/profile`);

  const { data: followerData } = useSWR(
    () => `/api/users/${userData.data.id}/${follow}?page=${index}`,
  );

  if (!followerData) {
    return <Loading />;
  }

  if (followerData.data.length < 10) {
    setHasMoreFollows(false);
  }

  return (
    <ul className="grid sm:grid-cols-2 gap-4 m-4">
      {followerData.data.map((user: UserInterface) => {
        return (
          <li className="w-full" key={user.id}>
            <div className="flex bg-slate-200 rounded-lg text-slate-800">
              <User user={user} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FollowList;
