import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-slate-600 p-3">
      <ul className="flex justify-around">
        <li className="hover:text-slate-900">
          <Link
            className={pathname.startsWith('/feed') ? 'text-slate-900' : ''}
            href="/feed"
          >
            Feed
          </Link>
        </li>
        <li className="hover:text-slate-900">
          <Link
            className={pathname.startsWith('/profile') ? 'text-slate-900' : ''}
            href="/profile"
          >
            Profile
          </Link>
        </li>
        <li className="hover:text-slate-900">
          <Link
            className={
              pathname.startsWith('/following') ? 'text-slate-900' : ''
            }
            href="/following"
          >
            Following
          </Link>
        </li>
        <li className="hover:text-slate-900">
          <Link
            className={
              pathname.startsWith('/followers') ? 'text-slate-900' : ''
            }
            href="/followers"
          >
            Followers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
