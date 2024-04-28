import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-600  p-3">
      <ul className="flex justify-around">
        <li className="hover:text-slate-900">
          <Link href="/feed">Feed</Link>
        </li>
        <li className="hover:text-slate-900">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="hover:text-slate-900">
          <Link href="/follwing">Following</Link>
        </li>
        <li className="hover:text-slate-900">
          <Link href="/follwers">Followers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
