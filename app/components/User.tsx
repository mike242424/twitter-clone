import Link from 'next/link';
import { UserInterface } from '../types';
import Image from 'next/image';

const User = ({ user, href }: { user: UserInterface; href?: string }) => {
  return (
    <div>
      <Link href={`/${href || user.username}`} className="flex flex-col">
        <div className="self-center">
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
        </div>
        <p className="mt-2">{user.username}</p>
      </Link>
    </div>
  );
};

export default User;
