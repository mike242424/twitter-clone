import User from '@/app/components/User';
import { UserInterface } from '@/app/types';
import useSWR from 'swr';

const FollowList = ({ index, follow }: { index: number; follow: string }) => {
  const { data: userData } = useSWR(`/api/users/profile`);

  const { data: followerData } = useSWR(
    () => `/api/users/${userData.data.id}/${follow}?page=${index}`,
  );

  if (!followerData) {
    return <div>loading...</div>;
  }
  return (
    <ul>
      {followerData.data.map((user: UserInterface) => {
        return (
          <li className="m-4" key={user.id}>
            <div className="flex bg-slate-300 rounded full text-slate-800">
              <User user={user} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FollowList;
