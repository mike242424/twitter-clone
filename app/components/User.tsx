import Link from 'next/link';
import { UserInterface } from '../types';
import Image from 'next/image';

const User = ({ user, href }: { user: UserInterface; href?: string }) => {
  return (
    <div>
      <Link
        href={`/${href || user.username}`}
        className="flex flex-col font-bold"
      >
        <div
          className={`flex flex-row self-center gap-4 items-center p-1 my-4 ml-4`}
        >
          {user.avatar ? (
            <Image
              src={user.avatar}
              width={50}
              height={50}
              alt={user.username}
              className="rounded-full"
            />
          ) : (
            <div className="bg-slate-600 rounded-full h-[50px] w-[50px]"></div>
          )}
          <p>{user.username}</p>
        </div>
      </Link>
    </div>
  );
};

export default User;
